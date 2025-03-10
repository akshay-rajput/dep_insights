'use client';
import { LucideExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
	return (
		<nav className='navbar w-full sticky top-0 z-20 backdrop-blur-md p-4 '>
			<div className='w-full navbar-blurred-backdrop max-w-6xl mx-auto flex items-center justify-between'>
				<div className='logo'>
					<Link href='/' title='Home'>
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
					<li className='text-stone-400 hover:text-blue-400'>
						<Link
							href='https://github.com/akshay-rajput/dep_insights'
							target='_blank'
							className='flex items-center gap-2 text-sm'
						>
							Github
							<LucideExternalLink size={14} />
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
