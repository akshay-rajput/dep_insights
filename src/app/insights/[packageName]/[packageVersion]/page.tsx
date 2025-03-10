import React from 'react';
import { redirect } from 'next/navigation';
import { fetchPackageInsight } from '@/services/getDepInsights';
import InsightsReport from '@/components/insights/InsightsReport';
// import { GetPackageVersionInsightResponse } from '@buf/safedep_api.bufbuild_es/safedep/services/insights/v2/insights_pb';

export default async function Insights({
	params,
}: {
	params: Promise<{ packageVersion: string; packageName: string }>;
}) {
	const { packageName, packageVersion } = await params;
	const allowedPackages = [
		'lodash',
		'chalk',
		'react-dnd',
		'express',
		'node-ipc',
	];
	if (
		!packageName ||
		!packageVersion ||
		!allowedPackages.includes(packageName)
	) {
		redirect('/404'); // Redirects to a separate 404 page
	}

	const packageInsights = await fetchPackageInsight({
		packageName,
		packageVersion,
	});

	return (
		<div id='insights-page-container'>
			<div className='mb-4'></div>

			<InsightsReport
				insightsData={JSON.parse(JSON.stringify(packageInsights))}
			/>
		</div>
	);
}
