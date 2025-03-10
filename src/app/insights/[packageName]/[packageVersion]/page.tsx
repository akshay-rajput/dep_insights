import React from 'react';
import { redirect } from 'next/navigation';
// import { fetchPackageInsight } from '@/services/getDepInsights';
import InsightsReport from '@/components/insights/InsightsReport';
// import Button from '@/components/shared/Button';
// import { GetPackageVersionInsightResponse } from '@buf/safedep_api.bufbuild_es/safedep/services/insights/v2/insights_pb';

export default async function Insights({
	params,
}: {
	params: Promise<{ packageVersion: string; packageName: string }>;
}) {
	const { packageName, packageVersion } = await params;
	if (!packageName || !packageVersion) {
		redirect('/404'); // Redirects to a separate 404 page
	}

	// const packageInsights = await fetchPackageInsight();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const packageInsights: any = {
		packageVersion: {
			package: {
				ecosystem: 'ECOSYSTEM_NPM',
				name: 'lodash',
			},
			version: '4.17.21',
		},
		insight: {
			dependencies: [
				{
					package: {
						ecosystem: 'ECOSYSTEM_NPM',
						name: 'accepts',
					},
					version: '1.3.8',
				},
				{
					package: {
						ecosystem: 'ECOSYSTEM_NPM',
						name: 'array-flatten',
					},
					version: '1.1.1',
				},
				{
					package: {
						ecosystem: 'ECOSYSTEM_NPM',
						name: 'body-parser',
					},
					version: '1.19.0',
				},
				{
					package: {
						ecosystem: 'ECOSYSTEM_NPM',
						name: 'content-disposition',
					},
					version: '0.5.3',
				},
				{
					package: {
						ecosystem: 'ECOSYSTEM_NPM',
						name: 'content-type',
					},
					version: '1.0.5',
				},
				{
					package: {
						ecosystem: 'ECOSYSTEM_NPM',
						name: 'cookie',
					},
					version: '0.4.0',
				},
				{
					package: {
						ecosystem: 'ECOSYSTEM_NPM',
						name: 'cookie-signature',
					},
					version: '1.0.6',
				},
			],
			vulnerabilities: [
				{
					id: {
						type: 'VULNERABILITY_IDENTIFIER_TYPE_GHSA',
						value: 'GHSA-rv95-896h-c2vc',
					},
					summary: 'Express.js Open Redirect in malformed URLs',
					aliases: [
						{
							type: 'VULNERABILITY_IDENTIFIER_TYPE_CVE',
							value: 'CVE-2024-29041',
						},
					],
					related: [
						{
							value: 'CGA-5389-98xc-vr78',
						},
						{
							value: 'CGA-w26h-h47r-f6rx',
						},
						{
							type: 'VULNERABILITY_IDENTIFIER_TYPE_CVE',
							value: 'CVE-2024-29041',
						},
					],
					severities: [
						{
							type: 'TYPE_CVSS_V3',
							score: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N',
							risk: 'RISK_MEDIUM',
						},
					],
					publishedAt: '2024-03-25T19:40:26Z',
					modifiedAt: '2024-03-25T22:24:57Z',
				},
				{
					id: {
						type: 'VULNERABILITY_IDENTIFIER_TYPE_GHSA',
						value: 'GHSA-qw6h-vgh9-j6wx',
					},
					summary: 'express vulnerable to XSS via response.redirect()',
					aliases: [
						{
							type: 'VULNERABILITY_IDENTIFIER_TYPE_CVE',
							value: 'CVE-2024-43796',
						},
					],
					related: [
						{
							value: 'CGA-8w92-879x-f9wc',
						},
						{
							value: 'CGA-jq8v-jx6x-3fpc',
						},
					],
					severities: [
						{
							type: 'TYPE_CVSS_V3',
							score: 'CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:U/C:L/I:L/A:L',
							risk: 'RISK_MEDIUM',
						},
						{
							type: 'TYPE_CVSS_V4',
							score:
								'CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:P/VC:N/VI:N/VA:N/SC:L/SI:L/SA:L',
							risk: 'RISK_LOW',
						},
					],
					publishedAt: '2024-09-10T19:41:04Z',
					modifiedAt: '2024-11-18T16:27:11Z',
				},
			],
			projectInsights: [
				{
					project: {
						type: 'PROJECT_SOURCE_TYPE_GITHUB',
						name: 'github.com/lodash/lodash',
						url: 'https://github.com/lodash/lodash',
					},
					stars: '60206',
					forks: '7063',
					issues: {
						open: '92',
						closed: '0',
						total: '0',
					},
					scorecard: {
						date: 'seconds:1740355200',
						score: 5.800000190734863,
						repo: {
							name: 'github.com/lodash/lodash',
							commit: '8a26eb42adb303f4adc7ef56e300f14c5992aa68',
						},
						checks: [
							{
								name: 'Packaging',
								score: -1,
								reason: 'packaging workflow not detected',
								documentation: {
									url: 'https://github.com/ossf/scorecard/blob/cb565cdceb47d4a79054430dd3590decbb2afb54/docs/checks.md#packaging',
									description:
										'Determines if the project is published as a package that others can easily download, install, easily update, and uninstall.',
								},
							},
							{
								name: 'Maintained',
								score: 10,
								reason:
									'1 commit(s) and 13 issue activity found in the last 90 days -- score normalized to 10',
								documentation: {
									url: 'https://github.com/ossf/scorecard/blob/cb565cdceb47d4a79054430dd3590decbb2afb54/docs/checks.md#maintained',
									description:
										'Determines if the project is "actively maintained".',
								},
							},
							{
								name: 'Dangerous-Workflow',
								score: -1,
								reason: 'no workflows found',
								documentation: {
									url: 'https://github.com/ossf/scorecard/blob/cb565cdceb47d4a79054430dd3590decbb2afb54/docs/checks.md#dangerous-workflow',
									description:
										"Determines if the project's GitHub Action workflows avoid dangerous patterns.",
								},
							},
							{
								name: 'Token-Permissions',
								score: -1,
								reason: 'No tokens found',
								documentation: {
									url: 'https://github.com/ossf/scorecard/blob/cb565cdceb47d4a79054430dd3590decbb2afb54/docs/checks.md#token-permissions',
									description:
										"Determines if the project's workflows follow the principle of least privilege.",
								},
							},
							{
								name: 'Code-Review',
								score: 2,
								reason:
									'Found 8/30 approved changesets -- score normalized to 2',
								documentation: {
									url: 'https://github.com/ossf/scorecard/blob/cb565cdceb47d4a79054430dd3590decbb2afb54/docs/checks.md#code-review',
									description:
										'Determines if the project requires human code review before pull requests (aka merge requests) are merged.',
								},
							},
							{
								name: 'Security-Policy',
								score: 10,
								reason: 'security policy file detected',
								documentation: {
									url: 'https://github.com/ossf/scorecard/blob/cb565cdceb47d4a79054430dd3590decbb2afb54/docs/checks.md#security-policy',
									description:
										'Determines if the project has published a security policy.',
								},
							},
							{
								name: 'Binary-Artifacts',
								score: 10,
								reason: 'no binaries found in the repo',
								documentation: {
									url: 'https://github.com/ossf/scorecard/blob/cb565cdceb47d4a79054430dd3590decbb2afb54/docs/checks.md#binary-artifacts',
									description:
										'Determines if the project has generated executable (binary) artifacts in the source repository.',
								},
							},
							{
								name: 'CII-Best-Practices',
								score: 0,
								reason:
									'no effort to earn an OpenSSF best practices badge detected',
								documentation: {
									url: 'https://github.com/ossf/scorecard/blob/cb565cdceb47d4a79054430dd3590decbb2afb54/docs/checks.md#cii-best-practices',
									description:
										'Determines if the project has an OpenSSF (formerly CII) Best Practices Badge.',
								},
							},
							{
								name: 'Pinned-Dependencies',
								score: -1,
								reason: 'no dependencies found',
								documentation: {
									url: 'https://github.com/ossf/scorecard/blob/cb565cdceb47d4a79054430dd3590decbb2afb54/docs/checks.md#pinned-dependencies',
									description:
										'Determines if the project has declared and pinned the dependencies of its build process.',
								},
							},
							{
								name: 'License',
								score: 9,
								reason: 'license file detected',
								documentation: {
									url: 'https://github.com/ossf/scorecard/blob/cb565cdceb47d4a79054430dd3590decbb2afb54/docs/checks.md#license',
									description:
										'Determines if the project has defined a license.',
								},
							},
							{
								name: 'Signed-Releases',
								score: -1,
								reason: 'no releases found',
								documentation: {
									url: 'https://github.com/ossf/scorecard/blob/cb565cdceb47d4a79054430dd3590decbb2afb54/docs/checks.md#signed-releases',
									description:
										'Determines if the project cryptographically signs release artifacts.',
								},
							},
							{
								name: 'Branch-Protection',
								score: -1,
								reason:
									'internal error: error during branchesHandler.setup: internal error: githubv4.Query: Resource not accessible by integration',
								documentation: {
									url: 'https://github.com/ossf/scorecard/blob/cb565cdceb47d4a79054430dd3590decbb2afb54/docs/checks.md#branch-protection',
									description:
										"Determines if the default and release branches are protected with GitHub's branch protection settings.",
								},
							},
							{
								name: 'Fuzzing',
								score: 10,
								reason: 'project is fuzzed',
								documentation: {
									url: 'https://github.com/ossf/scorecard/blob/cb565cdceb47d4a79054430dd3590decbb2afb54/docs/checks.md#fuzzing',
									description: 'Determines if the project uses fuzzing.',
								},
							},
							{
								name: 'SAST',
								score: 0,
								reason:
									'SAST tool is not run on all commits -- score normalized to 0',
								documentation: {
									url: 'https://github.com/ossf/scorecard/blob/cb565cdceb47d4a79054430dd3590decbb2afb54/docs/checks.md#sast',
									description:
										'Determines if the project uses static code analysis.',
								},
							},
							{
								name: 'Vulnerabilities',
								score: 0,
								reason: '91 existing vulnerabilities detected',
								documentation: {
									url: 'https://github.com/ossf/scorecard/blob/cb565cdceb47d4a79054430dd3590decbb2afb54/docs/checks.md#vulnerabilities',
									description:
										'Determines if the project has open, known unfixed vulnerabilities.',
								},
							},
						],
					},
				},
			],
			licenses: {
				licenses: [
					{
						licenseId: 'MIT',
						name: '',
						referenceNumber: 0,
						deprecatedLicenseId: false,
						osiApproved: false,
						fsfApproved: false,
						saasCompatible: false,
						commercialUseAllowed: false,
						compatibility: {},
						referenceUrl: '',
						detailsUrl: '',
					},
				],
			},
			dependsOn: [],
			packagePublishedAt: '2021-02-20T15:42:16Z',
			deprecated: false,
			defaultVersion: true,
			registries: ['https://registry.npmjs.org/'],
			slsaProvenances: [],
			availableVersions: [
				{
					version: '0.1.0',
					purl: '',
					deprecated: false,
					defaultVersion: false,
					publishedAt: '2012-04-23T16:37:12Z',
				},
				{
					version: '0.10.0',
					purl: '',
					deprecated: false,
					defaultVersion: false,
					publishedAt: '2013-08-31T04:56:09Z',
				},
				{
					version: '0.2.0',
					purl: '',
					deprecated: false,
					defaultVersion: false,
					publishedAt: '2012-05-22T04:06:24Z',
				},
				{
					version: '0.2.1',
					purl: '',
					deprecated: false,
					defaultVersion: false,
					publishedAt: '2012-05-24T21:53:08Z',
				},
				{
					version: '0.2.2',
					purl: '',
					deprecated: false,
					defaultVersion: false,
					publishedAt: '2012-05-30T07:56:26Z',
				},
			],
			dependencyGraph: {
				dependencies: [
					{
						packageVersion: {
							package: {
								ecosystem: 'ECOSYSTEM_NPM',
								name: 'lodash',
							},
							version: '4.17.21',
						},
						relation: 'RELATION_SELF',
					},
				],
				dependencyRelations: [],
			},
			downloadCount: '0',
		},
	};

	return (
		<div id='insights-page-container'>
			<div className='mb-4'></div>

			<InsightsReport insightsData={packageInsights} />
		</div>
	);
}
