import type { FC } from 'react'
import React, { memo } from 'react'
import Image from 'next/image'

const StoriesItem: FC = () => {
	return (
		<li className='flex flex-col gap-2 items-center cursor-pointer'>
			<div className='w-20 h-20 rounded-full border-2 border-gray-600/20 overflow-hidden bg-base-300'>
				<Image
					src='https://images.pexels.com/photos/34299175/pexels-photo-34299175.jpeg'
					alt='Story 1'
					width={80}
					height={80}
					className='w-full h-full object-cover'
					unoptimized={true}
				/>
			</div>
			<span>添加故事</span>
		</li>
	)
}

export default memo(StoriesItem)
