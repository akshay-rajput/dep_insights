import Link from 'next/link';

export default async function Home() {
	

	return (
		<div className='main-page-content'>
			<div className='intro my-12 md:my-20'>
				<h2 className='font-gochi-hand text-4xl md:text-6xl text-stone-600 hover:text-stone-400 mb-3 md:mb-5 text-center'>
					Next JumpStart
				</h2>
				<p className='text-stone-500 font-medium text-center text-sm md:text-base'>
					An opinionated starter kit for{' '}
					<Link
						href={'https://nextjs.org/'}
						target='_blank'
						className='hover:text-amber-500'
					>
						Nextjs
					</Link>
					.
				</p>
			</div>

		</div>
	);
}
