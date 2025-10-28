'use client'

import type { FC } from 'react'
import React, { memo } from 'react'
import Birthdays from './Birthdays'
import FriendRequests from './FriendRequests'
import Ad from './Ad'

interface IProps {
	userId?: string
}
const RightMenu: FC<IProps> = (props) => {
	const { userId } = props
	return (
		<section className='flex flex-col gap-4'>
			<FriendRequests />
			<Birthdays />
			<Ad />
		</section>
	)
}

export default memo(RightMenu)
