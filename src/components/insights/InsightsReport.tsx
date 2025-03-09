'use client';
import React from 'react';
import { GetPackageVersionInsightResponse } from '@buf/safedep_api.bufbuild_es/safedep/services/insights/v2/insights_pb';
import Link from 'next/link';
import { LucideChevronLeft, LucideDot, LucideScale } from 'lucide-react';
import {
  type ChartConfig,
} from '@/components/ui/chart';
import ScoreCard from './ScoreCard';

interface InsightsReportProps {
	insightsData: GetPackageVersionInsightResponse;
}

export default function InsightsReport({ insightsData }: InsightsReportProps) {
	const getPackageName = () => {
		if (insightsData.packageVersion?.package?.name) {
			return (
				insightsData.packageVersion?.package?.name.charAt(0).toUpperCase() +
				insightsData.packageVersion?.package?.name.slice(1)
			);
		}
	};

	const scoreCardData =
		insightsData.insight?.projectInsights[0]?.scorecard?.checks || [];

	const chartData = scoreCardData.map((check) => ({
		name: check.name,
		score: check.score,
	}));

	const chartConfig = {
		score: {
			label: 'Score',
			color: '#2563eb',
		},
	} satisfies ChartConfig;

	return (
		<div className='border border-stone-600 rounded-md'>
			<div className='info p-4 mb-4 border-b border-b-stone-600 flex items-start justify-between'>
				<div className='flex flex-col name-and-version'>
					<div className='flex gap-1 items-center mb-3'>
						<Link
							href={'/'}
							className='back-icon hover:text-blue-200 p-1 rounded hover:bg-stone-900'
						>
							<LucideChevronLeft
								className='font-medium'
								height={18}
								width={18}
							></LucideChevronLeft>
						</Link>
						<h1 className='text-xl font-medium '>{getPackageName()}</h1>
					</div>
					<p className='text-sm text-stone-400 pl-2 flex items-center'>
						Version: {insightsData.packageVersion?.version}
						<LucideDot height={16} width={16} className='mx-2 '></LucideDot>
						{insightsData?.insight?.licenses?.licenses[0]?.licenseId && (
							<div className='license text-sm text-stone-400 flex gap-1 items-center'>
								<LucideScale height={16} width={16}></LucideScale>
								{insightsData?.insight?.licenses?.licenses[0]?.licenseId}
							</div>
						)}
					</p>
				</div>
			</div>

      <div className="grid md:grid-cols-2 gap-8 px-4">
        <div className="scorecard-container p-4 rounded">
          <h3 className="mb-1 text-base font-medium">Scorecard</h3>
          <p className="mb-5 text-gray-400 text-xs">Security health metrics</p>
          {scoreCardData && chartData && (
            <ScoreCard chartConfig={chartConfig} chartData={chartData}/>
          )}
        </div>
      </div>

			{/* <pre className='border p-4 rounded max-h-96 overflow-hidden overflow-y-auto'>
				{JSON.stringify(insightsData, null, 4)}
			</pre> */}
		</div>
	);
}
