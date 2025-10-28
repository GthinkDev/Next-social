import type { FC } from 'react'
import React, { memo } from 'react'
import Image from 'next/image'
import { CircleCheckBig, CircleX } from 'lucide-react'

const FriendRequests: FC = () => {
	return (
		<section className='card flex flex-col gap-4  '>
			<div className='flex w-full justify-between'>
				<h1 className='title'>好友回复</h1>
				<p className='next'>查看所有</p>
			</div>
			<FriendList />
			<FriendList />
			<FriendList />
			<FriendList />
			<FriendList />
		</section>
	)
}

export default memo(FriendRequests)

const FriendList: FC = () => {
	return (
		<main className='flex gap-4 justify-between items-center'>
			<Image
				src='https://images.pexels.com/photos/34206555/pexels-photo-34206555.jpeg'
				alt='friend1'
				width={50}
				height={50}
				className='rounded-full w-12 h-12 object-cover'
			/>
			<p className='font-black text-base  flex-1'>张三</p>
			<div className='flex gap-4'>
				<CircleCheckBig className='cursor-pointer text-primary' />
				<CircleX className='cursor-pointer text-gray-400' />
			</div>
		</main>
	)
}

export { FriendList }
