import type { Metadata } from 'next';
import Link from 'next/link';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/shared/Navbar';

const openSans = Open_Sans({
	variable: '--font-open-sans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Dep Insights',
	description: 'Package insights',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${openSans.variable} dark bg-zinc-800 text-stone-50 antialiased`}
			>
				<div className='main-container flex flex-col min-h-screen'>
					{/* boilerplate navbar */}
					<Navbar />

					{/* main content */}
					<main className='flex-grow max-w-6xl mx-auto flex flex-col w-full font-open-sans'>
						{children}
					</main>

					{/* footer */}
					<footer className='flex items-center py-2 justify-center mt-8'>
						<p className='text-gray-400 flex items-center justify-center gap-1 tracking-wide text-sm'>
							insights powered by{' '}
							<Link
								href='https://docs.safedep.io/guides/insights-api-using-typescript'
								target='_blank'
								className='underline underline-offset-4 hover:text-blue-500 hover:underline'
							>
								safedep insights api
							</Link>
						</p>
					</footer>
				</div>
			</body>
		</html>
	);
}
