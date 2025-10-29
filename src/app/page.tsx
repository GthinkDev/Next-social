'use client'

import AddPost from '@/components/home/AddPost'
import Feed from '@/components/home/Feed'
import LeftMenu from '@/components/home/LeftMenu'
import RightMenu from '@/components/home/RightMenu'
import Stories from '@/components/home/Stories'
import type { FC } from 'react'
import { memo } from 'react'

const Page: FC = () => {
  return (
    <section
      className={' w-full pt-4 flex gap-2 justify-start items-start z-0'}
    >
      <div className={'hidden xl:block w-1/5 '}>
        <LeftMenu type={'home'} />
      </div>
      <div className={'w-full lg:w-[70%] xl:w-1/2 flex flex-col gap-2'}>
        <Stories />
        <AddPost />
        <Feed />
      </div>
      <div className={'hidden lg:block w-1/3 '}>
        <RightMenu />
      </div>
    </section>
  )
}

export default memo(Page)
