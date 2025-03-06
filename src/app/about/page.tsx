import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'About | Next JumpStart',
	description: 'More information about Next Jumpstart template.',
};

export default function Page() {
	const keyPoints: Array<React.ReactNode> = [
		<span key='turbopack'>
			This template uses{' '}
			<a
				href='https://nextjs.org/docs/app/api-reference/turbopack'
				target='_blank'
				className='text-amber-600 hover:text-amber-400'
			>
				Turbopack
			</a>{' '}
			for faster local development.
		</span>,
		<span key='react-version'>
			Uses{' '}
			<span className='underline underline-offset-2'>Next.js version 15</span> &{' '}
			<span className='underline underline-offset-2'>React.js version 19</span>.
			You can read about support for shadcn/ui components{' '}
			<a
				href='https://ui.shadcn.com/docs/react-19'
				target='_blank'
				className='text-amber-600 hover:text-amber-400'
			>
				here
			</a>
			.
		</span>,
		<span key='react-version'>
			Uses <span className='underline underline-offset-2'>App router</span> &
			all code resides inside the{' '}
			<span className='bg-stone-800 text-stone-300 px-1 py-0 tracking-wider rounded text-sm'>
				src
			</span>{' '}
			directory.
		</span>,
		<span key='darkmode' className=''>
			To add Dark mode, check out{' '}
			<a
				href='https://ui.shadcn.com/docs/dark-mode'
				target='_blank'
				className='text-amber-600 hover:text-amber-400'
			>
				shadcn/ui docs
			</a>
			. Alternatively you can programmatically add {`"dark"`} class to the body
			for toggling dark mode for components.
		</span>,
		<span className='' key={'fonts'}>
			Fonts: Uses 2 fonts from Google Fonts by default. You can change them in
			the{' '}
			<span className='bg-stone-800 text-stone-300 px-1 py-0 tracking-wider rounded text-sm'>
				app/layout.tsx
			</span>{' '}
			file.
		</span>,
	];

	const recommendations: Array<React.ReactNode> = [
		<span key='zustand'>
			<a
				href='https://zustand-demo.pmnd.rs/'
				target='_blank'
				className='text-amber-600 hover:text-amber-400'
			>
				Zustand 🐻
			</a>{' '}
			- keeps your state management simple, minimal, and scalable.
		</span>,

		<span key='react-query'>
			<a
				href='https://tanstack.com/query/v3/'
				target='_blank'
				className='text-amber-600 hover:text-amber-400'
			>
				React Query 🧿
			</a>{' '}
			- for all your data fetching needs.
		</span>,
		<span key='radix'>
			<a
				href='https://www.radix-ui.com/'
				target='_blank'
				className='text-amber-600 hover:text-amber-400'
			>
				Radix UI 🌈
			</a>{' '}
			- accessible, unstyled, and customizable component library.
		</span>,
		<span key='auto-animate'>
			<a
				href='https://auto-animate.formkit.com/'
				target='_blank'
				className='text-amber-600 hover:text-amber-400'
			>
				AutoAnimate ✨
			</a>{' '}
			- for simple animations that enhance the user experience.
		</span>,
	];

	return (
		<div className='about-content mt-20 w-full'>
			<div className='points-to-note mb-10 md:mb-16'>
				<h2 className='text-stone-500 font-gochi-hand tracking-wide mb-2 text-xl'>
					Points to note:
				</h2>
				<ul className='w-full text-stone-400 flex flex-col gap-2 list-disc pl-6 text-sm leading-6 tracking-wide mb-4'>
					{keyPoints.map((keyPoint, index) => (
						<li key={index} className=''>
							{keyPoint}
						</li>
					))}
				</ul>
			</div>

			<div className='recommendations text-stone-400 '>
				<h2 className='text-stone-500 font-gochi-hand tracking-wide mb-2 text-xl'>
					Other tools:
				</h2>
				<ul className='w-full flex flex-col gap-2 list-disc pl-6 text-sm leading-6 tracking-wide mb-4'>
					{recommendations.map((recommendation, index) => (
						<li key={index} className=''>
							{recommendation}
						</li>
					))}
				</ul>

				<p className='text-sm mb-4 pl-2'>
					Above tools aren&apos;t included to keep the template light. These are
					just recommendations, you can add them if it suits your needs.
				</p>
			</div>
		</div>
	);
}
