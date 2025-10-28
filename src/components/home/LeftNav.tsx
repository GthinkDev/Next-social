import siteConfig from '@/config/sits'
import { memo, type FC } from 'react'
import LeftNavItem from './LeftNavItem'

const LeftNav: FC = () => {
	const items = siteConfig.leftNavConfig
	return (
		<section className='card flex flex-col gap-2 p-4 menu w-full'>
			{items.map((item) => (
				<LeftNavItem key={item.href} href={item.href} title={item.title} icon={item.icon} />
			))}
		</section>
	)
}

export default memo(LeftNav)
