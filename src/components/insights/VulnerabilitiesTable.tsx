import React from 'react';
import { Vulnerability } from '@buf/safedep_api.bufbuild_es/safedep/messages/vulnerability/v1/vulnerability_pb';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { LucideScanHeart } from 'lucide-react';

const VulnerabilityKeyMap: { [key: string]: string } = {
	RISK_CRITICAL: 'Critical',
	RISK_HIGH: 'High',
	RISK_MEDIUM: 'Medium',
	RISK_LOW: 'Low',
};
interface VulnerabilityTableProps {
	vulnerabilities: Array<Vulnerability> | [];
}

export default function VulnerabilitiesTable({
	vulnerabilities,
}: VulnerabilityTableProps) {
	return (
		<div
			className='p-4 rounded flex flex-grow '
			id='vulnerabilities-table-container'
		>
			{vulnerabilities?.length ? (
				<div className=' relative max-h-[300px] flex-grow overflow-y-auto'>
					<Table className='w-full relative overflow-hidden'>
						<TableHeader className='sticky top-0 z-10 shadow-md'>
							<TableRow>
								<TableHead className='w-[100px]'>CVE</TableHead>
								<TableHead>Title</TableHead>
								<TableHead>Severity</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody className='overflow-y-auto'>
							{vulnerabilities.map((vulnerability) => {
								return (
									<TableRow
										key={vulnerability.aliases[0].value}
										className=' overflow-x-auto'
									>
										<TableCell className='font-medium'>
											{vulnerability.aliases[0].value}
										</TableCell>
										<TableCell>{vulnerability.summary}</TableCell>
										<TableCell>
											{vulnerability.severities?.length
												? VulnerabilityKeyMap[vulnerability.severities[0].risk]
												: '-'}
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</div>
			) : (
				<div className='empty-state flex-grow border -m-4 border-gray-700 rounded-lg flex flex-col justify-center items-center'>
					<span className='text-gray-600 text-4xl'>
						<LucideScanHeart size={50} />
					</span>
					<span className='text-gray-500 text-sm mt-4'>
						No vulnerabilities detected
					</span>
				</div>
			)}
		</div>
	);
}
