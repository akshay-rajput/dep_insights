'use client';
import React from 'react';
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from '@/components/ui/chart';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

interface ScoreCardProps {
	chartConfig: ChartConfig;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	chartData: Array<any>;
}

export default function ScoreCard({ chartConfig, chartData }: ScoreCardProps) {
	return (
		<div id='scorecard' className='text-white'>
			<ChartContainer config={chartConfig}>
				<BarChart
					data={chartData}
					layout='vertical'
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
					barGap={1}
				>
					<XAxis type='number' dataKey='score' scale={'linear'} />
					<YAxis dataKey='name' type='category' tickMargin={10} />
					<ChartTooltip cursor={false} content={<ChartTooltipContent />} />
					<Bar dataKey='score' fill='#2563eb' radius={5} />
				</BarChart>
			</ChartContainer>
		</div>
	);
}
