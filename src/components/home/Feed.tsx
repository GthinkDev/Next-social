'use client'

import type { FC } from 'react'
import React, { memo } from 'react'
import Post from './Post'

const Feed: FC = () => {
	return (
		<section className=' flex flex-col gap-4'>
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
		</section>
	)
}

export default memo(Feed)
