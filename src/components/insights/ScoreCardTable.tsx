import React from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { ScorecardCheck } from '@buf/safedep_api.bufbuild_es/safedep/messages/scorecard/v1/scorecard_pb';
import { LucideExternalLink } from 'lucide-react';
import Link from 'next/link';

interface ScoreCardTableProps {
	checks: Array<ScorecardCheck> | [];
}

export default function ScoreCardTable({ checks }: ScoreCardTableProps) {
	return (
		<div className='scorecard-table-container p-4 rounded '>
			{checks?.length ? (
				<div className=' relative max-h-[300px] overflow-y-auto'>
					<Table className='w-full relative overflow-hidden'>
						<TableHeader className='sticky top-0 z-10 shadow-md'>
							<TableRow>
								<TableHead className='w-[100px]'>Name</TableHead>
								<TableHead>Score</TableHead>
								<TableHead>Reason</TableHead>
								<TableHead className=''>More info</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody className='overflow-y-auto'>
							{checks.map((check) => {
								return (
									<TableRow key={check.name} className=' overflow-x-auto'>
										<TableCell className='font-medium'>{check.name}</TableCell>
										<TableCell>{check.score.toFixed(0)}</TableCell>
										<TableCell>{check.reason ? check.reason : '-'}</TableCell>
										<TableCell className='text-center'>
											{check.documentation?.url ? (
												<Link href={check.documentation?.url} target='_blank'>
													<LucideExternalLink
														height={16}
														width={16}
													></LucideExternalLink>
												</Link>
											) : (
												<span>-</span>
											)}
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</div>
			) : (
				<div className='p-4 text-stone-400 rounded text-sm text-center w-full border border-gray-500'>
					No checks found to show in table
				</div>
			)}
		</div>
	);
}
