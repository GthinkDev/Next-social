'use client'

import MobileMenu from '@/components/MobileMenu'
import Themes from '@/components/Themes'
import siteConfig from '@/config/sits'
import { ClerkLoading } from '@clerk/clerk-react'
import { ClerkLoaded, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import {
  Bell,
  CircleUserRound,
  MessageCircleMore,
  UsersRound,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'
import { memo } from 'react'

const NavBar: FC = () => {
  const links = siteConfig.navConfig
  const pathname = usePathname()
  return (
    <section className={'flex justify-between items-center w-full  gap-4 '}>
      <div
        className={'font-black w-32 text-xl text-primary md:hidden lg:block '}
      >
        <span>
          <Link href={'/'}>DeMaster</Link>
        </span>
      </div>
      <div
        className={
          'md:flex gap-8 flex-1 justify-start hidden text-base-content w-1/2'
        }
      >
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`flex justify-center w-fit items-center gap-2 hover:text-primary ${
              pathname === link.href ? 'text-primary font-semibold' : ''
            }`}
          >
            <span className={'w-4 h-4'}>{link.icon}</span>
            <span>{link.title}</span>
          </Link>
        ))}
        <label className="input text-base   input-sm hidden xl:flex w-1/3 bg-base-200">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="搜索" />
        </label>
      </div>
      <div className={'flex gap-4 items-center xl:gap-8 justify-end '}>
        <ClerkLoading>
          <div className="flex items-center justify-center text-primary text-sm">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
              role="status"
            >
              <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className={' cursor-pointer'}>
              <UsersRound size={18} strokeWidth={2} />
            </div>{' '}
            <div className={' cursor-pointer'}>
              <MessageCircleMore size={18} />
            </div>
            <div className={' cursor-pointer'}>
              <Bell size={20} strokeWidth={2} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className={'flex gap-2 items-center text-primary text-sm'}>
              <CircleUserRound size={18} strokeWidth={2} />
              <Link href={'/sign-in'}>登录/注册</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <Themes />
        <MobileMenu />
      </div>
    </section>
  )
}

export default memo(NavBar)
