import Link from 'next/link';

export default function Home() {
	const contentsMap = [
		{
			link: 'https://nextjs.org/',
			title: '🚀 Next.js v15',
			description:
				'The latest version with app directory and server components.',
		},
		{
			link: 'https://tailwindcss.com/',
			title: '🎨 Tailwind CSS',
			description: 'A utility-first CSS framework for rapid styling.',
		},
		{
			link: 'https://ui.shadcn.com/docs',
			title: '🧩 shadcn/ui',
			description: 'Prebuilt, accessible, and customizable UI components.',
		},
		{
			link: 'https://www.typescriptlang.org/',
			title: '⚙️ TypeScript',
			description: 'Strongly typed language for maintainable codebases.',
		},
		{
			link: 'https://typicode.github.io/husky/',
			title: '🛠️ Pre-Commit Hooks',
			description:
				'Husky pre-commit hook for formatting & type-checking staged files using tsc and Prettier.',
		},
	];

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

			<div className='contents-of-template flex flex-col p-4 text-sm md:text-base mb-8'>
				<h3 className='font-medium text-stone-500 mb-2'>
					What&apos;s included in the Template?
				</h3>
				<ul className='w-full text-stone-400 flex flex-col gap-2'>
					{contentsMap.map((content, index) => (
						<li key={index} className=''>
							{content.link ? (
								<Link
									href={content.link}
									target='_blank'
									className='text-amber-600 hover:text-amber-400'
								>
									{content.title}
								</Link>
							) : (
								content.title
							)}
							: {content.description}
						</li>
					))}
				</ul>

				<div className='more-info my-6 leading-6 text-sm text-stone-400'>
					For more information related to the template, and recommendations for
					other libraries for common use-cases, check out the{' '}
					<Link
						href={'/about'}
						target='_blank'
						className='font-mono text-amber-600 hover:text-amber-400 underline decoration-wavy underline-offset-2 decoration-1 font-medium'
					>
						/about
					</Link>{' '}
					page.
				</div>
			</div>
		</div>
	);
}
