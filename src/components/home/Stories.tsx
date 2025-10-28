'use client'

import type { FC } from 'react'
import React, { memo } from 'react'
import StoriesItem from './StoriesItem'

const Stories: FC = () => {
	return (
		<section className='card text-sm'>
			<div className='overflow-x-auto scrollbar-hide'>
				<ul className='flex gap-8'>
					<StoriesItem />
					<StoriesItem />
					<StoriesItem />
					<StoriesItem />
					<StoriesItem />
					<StoriesItem />
					<StoriesItem />
					<StoriesItem />
				</ul>
			</div>
		</section>
	)
}

export default memo(Stories)
