'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
	const pathName = usePathname();

	return (
		<nav className='navbar w-full sticky top-0 backdrop-blur-md p-4 '>
			<div className='w-full navbar-blurred-backdrop max-w-6xl mx-auto flex items-center justify-between'>
				<div className='logo'>
					<Link href='/'>
						<Image
							src='/logo.svg'
							alt='Logo'
							width={24}
							height={24}
							className='logo'
						/>
					</Link>
				</div>
				<ul className='flex gap-4 items-center tracking-wider font-gochi-hand md:text-lg'>
					<li
						className={`${pathName.includes('about') ? 'text-amber-400 underline decoration-wavy underline-offset-2' : 'text-stone-400 hover:text-amber-400'}  `}
					>
						<Link href='/about'>about</Link>
					</li>
					<li className='text-stone-400 hover:text-amber-400'>
						<Link
							href='https://github.com/akshay-rajput/next-jump-start'
							target='_blank'
						>
							github
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
