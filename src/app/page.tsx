'use client'

import type { FC } from 'react'
import React, { memo } from 'react'
import LeftMenu from '@/components/home/LeftMenu'
import RightMenu from '@/components/home/RightMenu'
import Stories from '@/components/home/Stories'
import AddPost from '@/components/home/AddPost'
import Feed from '@/components/home/Feed'

const Page: FC = () => {
	return (
		<section className={' w-full pt-4 flex gap-4 justify-start items-start z-0'}>
			<div className={'hidden xl:block w-1/5 '}>
				<LeftMenu />
			</div>
			<div className={'w-full lg:w-[70%] xl:w-1/2 flex flex-col gap-4'}>
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
