import type { Metadata } from 'next';
import Link from 'next/link';
import { Open_Sans, Gochi_Hand } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/shared/Navbar';

const openSans = Open_Sans({
	variable: '--font-open-sans',
	subsets: ['latin'],
});

const gochiHand = Gochi_Hand({
	variable: '--font-gochi-hand',
	weight: '400',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Next JumpStart',
	description: 'An opinionated starter kit for Nextjs.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${openSans.variable} ${gochiHand.variable} antialiased`}
			>
				<div className='main-container flex flex-col min-h-screen'>
					{/* boilerplate navbar */}
					<Navbar />

					{/* main content */}
					<main className='flex-grow max-w-3xl mx-auto flex flex-col w-full font-open-sans'>
						{children}
					</main>

					{/* footer */}
					<footer className='flex items-center py-2 border-t border-stone-800 justify-center'>
						<p className='text-stone-500 flex items-center justify-center gap-1 font-gochi-hand tracking-wide md:text-lg'>
							a foundation by{' '}
							<Link
								href='https://github.com/akshay-rajput'
								target='_blank'
								className='text-amber-500 hover:underline decoration-wavy'
							>
								akshay
							</Link>
						</p>
					</footer>
				</div>
			</body>
		</html>
	);
}
