import type { FC } from 'react'
import React, { memo } from 'react'

const Page: FC = () => {
	return (
		<section>
			<h1 className='title'>Page</h1>
		</section>
	)
}

export default memo(Page)
