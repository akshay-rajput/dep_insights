import React from 'react';
import { Vulnerability } from '@buf/safedep_api.bufbuild_es/safedep/messages/vulnerability/v1/vulnerability_pb';
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '../ui/chart';
import { Label, Pie, PieChart } from 'recharts';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import VulnerabilitiesTable from './VulnerabilitiesTable';

interface VulnerabilitiesProps {
	vulnerabilityData: Vulnerability[];
}
const VulnerabilityKeyMap: { [key: string]: string } = {
	RISK_CRITICAL: 'Critical',
	RISK_HIGH: 'High',
	RISK_MEDIUM: 'Medium',
	RISK_LOW: 'Low',
};

export default function Vulnerabilities({
	vulnerabilityData,
}: VulnerabilitiesProps) {
	const chartConfig = {
		risk: {
			label: 'Risk',
			color: '#2563eb',
		},
	} satisfies ChartConfig;

	const COLORS = ['#FF8042', '#0088FE', '#00C49F', '#FFBB28'];

	let totalVulnerabilities = 0;

	const aggregateVulnerabilityCounts = (data: Vulnerability[]) => {
		const counts: { [key: string]: number } = {};

		data.forEach((vData) => {
			vData.severities?.forEach((sData) => {
				const riskLabel = VulnerabilityKeyMap[sData.risk] || 'Unknown';
				counts[riskLabel] = (counts[riskLabel] || 0) + 1;
				totalVulnerabilities += 1;
			});
		});

		return counts;
	};

	const vulnerabilityCounts = aggregateVulnerabilityCounts(vulnerabilityData);

	const vChartData = Object.entries(vulnerabilityCounts).map(
		([risk, count], idx) => ({
			risk,
			count,
			fill: COLORS[idx],
		})
	);

	return (
		<div className='' id='vulnerabilities-container'>
			{/* heading and total score */}
			<div className='heading-group mb-5'>
				<h3 className='mb-1 text-base font-medium'>Vulnerabilities</h3>
				<p className='text-gray-400 text-xs'>
					Vulnerabilities detected in the package using{' '}
					<Link
						href={
							'https://docs.safedep.io/guides/insights-api-using-typescript'
						}
						target='_blank'
						className='hover:underline underline-offset-2 text-blue-400'
					>
						Safedep API
					</Link>
				</p>
			</div>

			{/* tabs */}
			<Tabs defaultValue='chart' className=''>
				<TabsList>
					<TabsTrigger value='chart'>Chart</TabsTrigger>
					<TabsTrigger value='table'>Table</TabsTrigger>
				</TabsList>
				<TabsContent value='chart'>
					<div
						id='vulnerability-chart'
						className='grid md:grid-cols-4 items-center'
					>
						<ChartContainer
							config={chartConfig}
							className='max-h-[320px] aspect-square col-span-1 md:col-span-2'
						>
							<PieChart>
								<ChartTooltip
									cursor={false}
									content={<ChartTooltipContent hideLabel />}
								/>
								<Pie
									data={vChartData}
									dataKey='count'
									nameKey='risk'
									innerRadius={80}
									strokeWidth={3}
								>
									<Label
										content={({ viewBox }) => {
											if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
												return (
													<text
														x={viewBox.cx}
														y={viewBox.cy}
														textAnchor='middle'
														dominantBaseline='middle'
														fill='#eee'
													>
														<tspan
															x={viewBox.cx}
															y={viewBox.cy}
															className='fill-foreground text-3xl text-white font-bold'
														>
															{totalVulnerabilities}
														</tspan>
														<tspan
															x={viewBox.cx}
															y={(viewBox.cy || 0) + 24}
															className='fill-muted-foreground text-gray-200'
														>
															Vulnerabilities
														</tspan>
													</text>
												);
											}
										}}
									/>
								</Pie>
							</PieChart>
						</ChartContainer>

						<div className='legend text-white mb-5'>
							{vChartData.map((chartRow) => (
								<span
									className='flex gap-3 items-center relative mb-3'
									key={chartRow.risk}
								>
									<span
										className='rounded-full h-[12px] w-[12px]'
										style={{ backgroundColor: chartRow.fill }}
									></span>
									{chartRow.risk}
								</span>
							))}
						</div>
					</div>
				</TabsContent>
				<TabsContent value='table'>
          <VulnerabilitiesTable vulnerabilities={vulnerabilityData} />
        </TabsContent>
			</Tabs>
		</div>
	);
}
