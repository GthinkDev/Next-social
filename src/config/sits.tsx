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
      href: '/my-posts',
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
  imageListConfig: [
    {
      title: '图片1',
      src: 'https://images.unsplash.com/photo-1761578571404-f7e0fa2ff634?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500',
      width: 300,
      height: 200,
    },
    {
      title: '图片1',
      src: 'https://images.unsplash.com/photo-1761405378558-3688471ba000?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500',
      width: 300,
      height: 200,
    },
    {
      title: '图片1',
      src: 'https://images.unsplash.com/photo-1761604297459-c2a4a0b18b0b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500',
      width: 300,
      height: 200,
    },
    {
      title: '图片1',
      src: 'https://images.unsplash.com/photo-1761429944585-6b0e475499cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500',
      width: 300,
      height: 200,
    },
    {
      title: '图片1',
      src: 'https://images.unsplash.com/photo-1760994031808-08d199c9b68f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500',
      width: 300,
      height: 200,
    },
    {
      title: '图片1',
      src: 'https://plus.unsplash.com/premium_photo-1761582026248-cc158562a263?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500',
      width: 300,
      height: 200,
    },
    {
      title: '图片1',
      src: 'https://images.unsplash.com/photo-1761550653675-faeb615fa261?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500',
      width: 300,
      height: 200,
    },
    {
      title: '图片1',
      src: 'https://images.unsplash.com/photo-1761072195994-82158b4fc27d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500',
      width: 300,
      height: 200,
    },
  ],
}

export default siteConfig
