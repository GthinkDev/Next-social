'use client'

import UserInfoCard from '@/components/home/UserInfoCard'
import UserMediaCard from '@/components/home/UserMediaCard'
import type { FC } from 'react'
import { memo } from 'react'
import Ad from './Ad'
import Birthdays from './Birthdays'
import FriendRequests from './FriendRequests'

interface IProps {
  userId?: string
}

const RightMenu: FC<IProps> = props => {
  const { userId } = props
  return (
    <section className="flex flex-col gap-2">
      {userId ? (
        <div className={'flex flex-col gap-2'}>
          <UserInfoCard userId={userId} />
          <UserMediaCard userId={userId} />
        </div>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Ad />
    </section>
  )
}

export default memo(RightMenu)
