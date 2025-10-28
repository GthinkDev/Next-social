'use client'

import type { FC } from 'react'
import React, { memo } from 'react'
import Ad from './Ad'
import LeftNav from './LeftNav'

const LeftMenu: FC = () => {
	return (
		<section className='flex flex-col gap-4'>
			<LeftNav />
			<Ad size='sm' />
		</section>
	)
}

export default memo(LeftMenu)
