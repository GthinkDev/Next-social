import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC, JSX } from 'react'
import { memo } from 'react'

interface IProps {
  href: string
  title: string
  icon: JSX.Element | string
}

const LeftNavItem: FC<IProps> = props => {
  const { href, title, icon } = props
  const pathname = usePathname()

  return (
    <Link
      key={href}
      href={href}
      className={`nav-item hover-dark flex flex-1 w-full items-center gap-4 font-medium px-4 py-3 text-xl rounded-lg text-base-content transition-all ${
        pathname === href
          ? 'font-semibold bg-neutral text-neutral-content hover:bg-neutral/80 hover:text-neutral-content'
          : 'hover:bg-gray-100'
      }`}
    >
      <span className={'w-5 h-5'}>{icon}</span>
      <span className="text-base">{title}</span>
    </Link>
  )
}

export default memo(LeftNavItem)
