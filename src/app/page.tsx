'use client';
import { Card } from '@/components/ui/card';
import { redirect } from 'next/navigation';

interface packageInfo {
	name: string;
	id: string;
	version: string;
}
export default function Home() {
	const packageOptions: Array<packageInfo> = [
		{
			name: 'Express',
			id: 'express',
			version: '4.17.1',
		},
		{
			name: 'Lodash',
			id: 'lodash',
			version: '4.17.21',
		},
		{
			name: 'Chalk',
			id: 'chalk',
			version: '5.4.1',
		},
		{
			name: 'React-dnd',
			id: 'react-dnd',
			version: '16.0.1',
		},
		{
			name: 'node-ipc',
			id: 'node-ipc',
			version: '12.0.0',
		},
	];

	const handlePackageClick = (pkg: packageInfo) => {
		redirect(`/insights/${pkg.id}/${pkg.version}`);
	};

	return (
		<div className='main-page-content'>
			<div className='intro my-12 md:my-20'>
				<h2 className='font-gochi-hand font-mono tracking-wider text-4xl md:text-6xl text-stone-600 hover:text-stone-400 mb-3 md:mb-5 text-center'>
					Dep Insights
				</h2>
				<p className='text-stone-500 font-mono tracking-wider font-medium text-center text-sm md:text-base px-4'>
					Pick one of below packages to check their health and reliability with
					detailed insights
				</p>
			</div>

			<div className='flex flex-wrap md:gap-6 gap-2 items-center md:justify-between px-4'>
				{packageOptions.map((pkg) => (
					<Card key={pkg.id} className='hover:shadow-sm hover:cursor-pointer'>
						<div
							onClick={() => handlePackageClick(pkg)}
							className='text-gray-400 hover:text-white w-full p-4 md:p-8 border border-transparent hover:border-stone-600 rounded-lg'
						>
							<p className='font-mono text-xl tracking-wide font-medium mb-1'>
								{pkg.name}
							</p>
							<p className='text-sm text-gray-500 font-mono tracking-wide'>
								version {pkg.version}{' '}
							</p>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
}
