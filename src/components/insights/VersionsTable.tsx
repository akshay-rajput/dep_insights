import React from 'react';
import { PackageAvailableVersion } from '@buf/safedep_api.bufbuild_es/safedep/messages/package/v1/package_version_insight_pb';
import { LucideExternalLink, LucidePackageX } from 'lucide-react';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import Link from 'next/link';

interface VersionsParams {
	versions: Array<PackageAvailableVersion> | [];
	packageName: string;
}

export default function VersionsTable({
	versions,
	packageName,
}: VersionsParams) {
	return (
		<div className='versions flex flex-col flex-grow'>
			<div className='heading-group mb-5'>
				<h3 className='mb-1 text-base font-medium'>
					Versions{' '}
					{versions?.length > 0 && (
						<span className='text-gray-400 tracking-wide font-mono ml-1'>
							({versions?.length})
						</span>
					)}
				</h3>
				<p className='text-gray-400 text-xs'>
					All the versions of this package
				</p>
			</div>

			{versions?.length ? (
				<div
					id='versions-table-container'
					className=' relative max-h-[300px] overflow-y-auto'
				>
					<Table className='w-full relative'>
						<TableHeader className='sticky top-0 z-10 shadow-md'>
							<TableRow>
								<TableHead className='w-[100px]'>Version</TableHead>
								<TableHead>Date</TableHead>
								<TableHead>View</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody className=''>
							{versions.map((version) => {
								return (
									<TableRow key={version.version} className=''>
										<TableCell className='font-medium'>
											{version.version}
										</TableCell>
										<TableCell>
											{JSON.stringify(version.publishedAt)?.slice(0, 10)}
										</TableCell>
										<TableCell className=''>
											<Link
												href={
													'https://npmjs.com/package/' +
													packageName +
													'/v/' +
													version.version
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
						<LucidePackageX size={50} />
					</span>
					<span className='text-gray-500 text-sm mt-4'>
						There are no versions
					</span>
				</div>
			)}
		</div>
	);
}
