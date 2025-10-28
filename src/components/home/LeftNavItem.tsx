import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC, JSX } from 'react'
import React, { memo } from 'react'

interface IProps {
	href: string
	title: string
	icon: JSX.Element
}

const LeftNavItem: FC<IProps> = (props) => {
	const { href, title, icon } = props
	const pathname = usePathname()
	return (
		<Link
			key={href}
			href={href}
			className={`flex flex-1 w-full items-center gap-4 px-4 py-3 text-xl rounded-lg text-base-content transition-all ${
				pathname === href
					? 'font-semibold bg-neutral text-neutral-content hover:bg-neutral hover:text-neutral-content'
					: 'hover:bg-gray-100 dark:hover:bg-neutral/30'
			}`}
		>
			<span className={'w-5 h-5'}>{icon}</span>
			<span className='text-base'>{title}</span>
		</Link>
	)
}

export default memo(LeftNavItem)
