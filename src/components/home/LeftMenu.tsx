'use client'

import ProfileCard from '@/components/home/ProfileCard'
import type { FC } from 'react'
import { memo } from 'react'
import Ad from './Ad'
import LeftNav from './LeftNav'

interface IProps {
  type: 'home' | 'profile' | 'settings'
}

const LeftMenu: FC<IProps> = props => {
  const { type } = props
  return (
    <section className="flex flex-col gap-2">
      {type === 'home' && <ProfileCard />}
      <LeftNav />
      <Ad size="sm" />
    </section>
  )
}

export default memo(LeftMenu)
