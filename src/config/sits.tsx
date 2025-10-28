import {
	BookImage,
	BookText,
	BookUser,
	BrickWallFire,
	CalendarCog,
	CircleFadingPlus,
	FilePlay,
	House,
	Newspaper,
	Rows3,
	StickyNote,
	Warehouse,
} from 'lucide-react'

const siteConfig = {
	title: '社交应用',
	description: '一款由 DeMaster 通过 NextJs 写的多端适配的社交应用程序',
	url: 'https://zhiyuan-chen.github.io',
	ogImage: '/og.png',
	navConfig: [
		{
			title: '首页',
			href: '/',
			icon: <House size={18} strokeWidth={2} />,
		},
		{
			title: '好友',
			href: '/friends',
			icon: <BookUser size={18} strokeWidth={2} />,
		},
		{
			title: '故事',
			href: '/stories',
			icon: <CircleFadingPlus size={18} strokeWidth={2} />,
		},
	],
	leftNavConfig: [
		{
			title: '帖子',
			href: '/',
			// href: '/my-posts',
			icon: <StickyNote size={20} strokeWidth={2} />,
		},
		{
			title: '活动',
			href: '/activity',
			icon: <BrickWallFire size={20} strokeWidth={2} />,
		},
		{
			title: '市场',
			href: '/marketplace',
			icon: <Warehouse size={20} strokeWidth={2} />,
		},
		{
			title: '相册',
			href: '/albums',
			icon: <BookImage size={20} strokeWidth={2} />,
		},
		{
			title: '视频',
			href: '/videos',
			icon: <FilePlay size={20} strokeWidth={2} />,
		},
		{
			title: '新闻',
			href: '/news',
			icon: <Newspaper size={20} strokeWidth={2} />,
		},
		{
			title: '课程',
			href: '/courses',
			icon: <BookText size={20} strokeWidth={2} />,
		},
		{
			title: '列表',
			href: '/lists',
			icon: <Rows3 size={20} strokeWidth={2} />,
		},
		{
			title: '设置',
			href: '/settings',
			icon: <CalendarCog size={20} strokeWidth={2} />,
		},
	],
}

export default siteConfig
