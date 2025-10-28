'use client'

import type { FC } from 'react'
import { memo } from 'react'
import Ad from './Ad'
import LeftNav from './LeftNav'
import UserCard from './UserCard'

const LeftMenu: FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <UserCard />
      <LeftNav />
      <Ad size="sm" />
    </section>
  )
}

export default memo(LeftMenu)
