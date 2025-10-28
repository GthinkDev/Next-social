'use client'

import React, { FC, memo, useState } from 'react'
import Link from 'next/link'
import siteConfig from '@/config/sits'

const MobileMenu: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const links = siteConfig.navConfig
	return (
		<section className={'md:hidden'}>
			<div
				className={'flex flex-col items-center justify-center gap-[4.5px] cursor-pointer'}
				onClick={() => setIsOpen((prev) => !prev)}
			>
				<div
					className={`w-6 h-1 bg-primary rounded-sm ${isOpen ? 'rotate-45' : ''} origin-left ease-in-out duration-500`}
				/>
				<div className={`w-6 h-1 bg-primary rounded-sm ${isOpen ? 'opacity-0' : ''}  ease-in-out duration-500`}></div>
				<div
					className={`w-6 h-1 bg-primary rounded-sm ${isOpen ? '-rotate-45' : ''} origin-left  ease-in-out duration-500`}
				/>
				{isOpen && (
					<div
						className={
							'bg-base-300 w-full h-[calc(100vh-64px)] flex flex-col justify-center items-center gap-8 absolute left-0 top-16 z-50 text-lg font-bold'
						}
					>
						{links.map((link, index) => (
							<Link key={index} href={link.href} className={'flex justify-center items-center gap-4'}>
								<span className={'w-4 h-4'}>{link.icon}</span>
								<span>{link.title}</span>
							</Link>
						))}
					</div>
				)}
			</div>
		</section>
	)
}

export default memo(MobileMenu)
