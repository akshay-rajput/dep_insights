import React from 'react';
import { PackageVersion } from '@buf/safedep_api.bufbuild_es/safedep/messages/package/v1/package_version_pb';
import { LucideBlocks, LucideExternalLink } from 'lucide-react';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '../ui/table';
import Link from 'next/link';

// interface Dependency extends PackageVersion {
//   name?: string;
// }

interface DependenciesParams {
	dependencies: Array<PackageVersion> | [];
}

export default function DependenciesTable({
	dependencies,
}: DependenciesParams) {
	return (
		<div className='dependencies flex flex-col flex-grow'>
			<div className='heading-group mb-5'>
				<h3 className='mb-1 text-base font-medium'>
					Dependencies{' '}
					{dependencies?.length > 0 && (
						<span className='text-gray-400  tracking-wide font-mono ml-1'>
							({dependencies?.length})
						</span>
					)}
				</h3>
				<p className='text-gray-400 text-xs'>
					All the dependencies of this package
				</p>
			</div>

			{dependencies?.length ? (
				<div
					id='dependencies-table-container'
					className=' relative max-h-[300px] overflow-y-auto'
				>
					<Table className='w-full relative'>
						<TableHeader className='sticky top-0 z-10 shadow-md'>
							<TableRow>
								<TableHead className=''>Name</TableHead>
								<TableHead>Version</TableHead>
								<TableHead>View</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody className=''>
							{dependencies.map((dependency) => {
								return (
									<TableRow
										key={dependency.version + dependency.package?.name}
										className=''
									>
										<TableCell className='font-medium flex-grow'>
											{dependency.package?.name}
										</TableCell>
										<TableCell>{dependency.version}</TableCell>
										<TableCell className=''>
											<Link
												href={
													'https://npmjs.com/package/' +
													dependency.package?.name +
													'/v/' +
													dependency.version
												}
												className='hover:text-blue-500 '
												target='_blank'
											>
												<LucideExternalLink size={16} />
											</Link>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</div>
			) : (
				<div className='empty-state flex-grow border border-gray-700 rounded-lg flex flex-col justify-center items-center'>
					<span className='text-gray-600 text-4xl'>
						<LucideBlocks size={50} />
					</span>
					<span className='text-gray-500 text-sm mt-4'>
						There are no dependencies
					</span>
				</div>
			)}
		</div>
	);
}
