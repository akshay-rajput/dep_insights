'use client';
import React from 'react';
import { GetPackageVersionInsightResponse } from '@buf/safedep_api.bufbuild_es/safedep/services/insights/v2/insights_pb';
import Link from 'next/link';
import { LucideChevronLeft, LucideDot, LucideExternalLink, LucideScale } from 'lucide-react';
import { type ChartConfig } from '@/components/ui/chart';
import ScoreCardChart from './ScoreCardChart';
import { Card } from '../ui/card';
import ScoreCardTable from './ScoreCardTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Vulnerabilities from './Vulnerabilities';

interface InsightsReportProps {
	insightsData: GetPackageVersionInsightResponse;
}

interface GithubData {
	stars: null | bigint | undefined;
	forks: null | bigint | undefined;
	url: null | string | undefined;
	issues: null | bigint | undefined;	
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

	const totalScore =
		insightsData.insight?.projectInsights[0]?.scorecard?.score || 0;

	const githubData:GithubData = {
		stars: null,
		forks: null,
		url: null,
		issues: null,
	}

	if(insightsData?.insight?.projectInsights[0]) {
		const {stars, forks, project, issues} = insightsData?.insight?.projectInsights[0];
		githubData.stars = stars;
		githubData.forks = forks;
		githubData.url = project?.url;
		githubData.issues = issues?.open;
	}

	const vulnerabilities = insightsData.insight?.vulnerabilities || [];

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
		<div className='border border-stone-600 rounded-md '>
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
					<div className='text-sm text-stone-400 pl-2 flex items-center'>
						Version: {insightsData.packageVersion?.version}
						<LucideDot height={16} width={16} className='mx-2 '></LucideDot>
						{insightsData?.insight?.licenses?.licenses[0]?.licenseId && (
							<p className='license text-sm text-stone-400 flex gap-1 items-center'>
								<LucideScale height={16} width={16}></LucideScale>
								{insightsData?.insight?.licenses?.licenses[0]?.licenseId}
							</p>
						)}
					</div>
				</div>
			</div>

			<div className="grid grid-cols-3 gap-4 mb-4">
				{/* github */}
				<Card className="ml-4 col-span-1 p-4">
					<h3 className='text-base font-medium mb-1'>Github</h3>
					<p className="text-gray-400 text-xs">Github metrics and activity</p>

					{/* stats */}
					<div className="my-4 flex flex-wrap justify-stretch">
						{/* individual metric */}
						<div className="flex flex-col">
							<h4 className="text-xs font-medium text-gray-400">Stars</h4>
							<span className="text-2xl font-mono text-gray-200">{githubData.stars}</span>
						</div>
						{/* individual metric */}
						<div className="flex flex-col">
							<h4 className="text-xs font-medium text-gray-400">Forks</h4>
							<span className="text-2xl font-mono text-gray-200">{githubData.forks}</span>
						</div>
						{/* individual metric */}
						<div className="flex flex-col">
							<h4 className="text-xs font-medium text-gray-400">Issues</h4>
							<span className="text-2xl font-mono text-gray-200">{githubData.issues}</span>
						</div>
					</div>

					{/* link */}
					{
						githubData.url && 
						<div className="text-gray-400 hover:underline hover:text-blue-500">
							<Link href={githubData.url} className='flex gap-1 items-center'>
								View on GitHub
								<LucideExternalLink className='' height={14} width={14} />
							</Link>
						</div>
					}
				</Card>

				<Card className="mr-4 col-span-2 p-4">
					<Vulnerabilities vulnerabilityData={vulnerabilities} />
				</Card>
			</div>

			{/* scorecard tabs */}
			<Card className='mx-4 gap-8 p-4 mb-4'>
				<div className='scorecard-chart-container p-4 rounded'>
					{/* heading and total score */}
					<div className='flex items-start justify-between mb-5'>
						<div className='heading-group'>
							<h3 className='mb-1 text-base font-medium'>Scorecard</h3>
							<p className='text-gray-400 text-xs'>
								Security health metrics chart
							</p>
						</div>

						{totalScore && (
							<p className='text-base mt-1 font-semibold tracking-wider pr-4'>
								{totalScore.toFixed(0)}/10
							</p>
						)}
					</div>

					{/* tabs */}
					<Tabs
						defaultValue={
							scoreCardData && chartData ? 'score_chart' : 'score_table'
						}
						className=''
					>
						<TabsList>
							{scoreCardData && chartData && (
								<TabsTrigger value='score_chart'>Chart</TabsTrigger>
							)}
							<TabsTrigger value='score_table'>Table</TabsTrigger>
						</TabsList>
						<TabsContent value='score_chart' className='w-full'>
							<ScoreCardChart chartConfig={chartConfig} chartData={chartData} />
						</TabsContent>
						<TabsContent value='score_table'>
							<ScoreCardTable checks={scoreCardData} />
						</TabsContent>
					</Tabs>

					{/* components base on currentTab */}
				</div>
			</Card>

			{/* <pre className='border p-4 rounded max-h-96 overflow-hidden overflow-y-auto'>
				{JSON.stringify(insightsData, null, 4)}
			</pre> */}
		</div>
	);
}
