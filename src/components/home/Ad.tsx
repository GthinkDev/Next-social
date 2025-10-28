import { Ellipsis } from 'lucide-react'
import type { FC } from 'react'
import { memo } from 'react'
import Image from 'next/image'

interface IProps {
	size?: 'sm' | 'md' | 'lg'
}
const Ad: FC<IProps> = (props) => {
	const { size } = props
	return (
		<section className='card flex flex-col gap-4  '>
			<div className='flex justify-between items-center'>
				<h1 className='title'>赞助广告</h1>
				<Ellipsis size={20} className='text-base-content cursor-pointer' />
			</div>
			<Image
				src='https://images.pexels.com/photos/34454122/pexels-photo-34454122.jpeg'
				alt='Post Image'
				width={400}
				height={200}
				className='w-full h-auto rounded-lg object-cover'
			/>
			<div className='flex gap-4 w-full items-center text-primary'>
				<Image
					src='https://images.pexels.com/photos/34206555/pexels-photo-34206555.jpeg'
					alt='friend1'
					width={50}
					height={50}
					className='rounded-full w-8 h-8 object-cover'
				/>
				<p className='font-medium text-lg  flex-1'>DeMaster </p>
			</div>
			<p
				className={`text-base text-base-content ${size === 'sm' ? 'text-sm' : size === 'md' ? 'text-base' : 'text-lg'}`}
			>
				三、不同平台的输入方法 在手机上（iOS / Android）： 打开任意一个聊天或输入界面（如微信、短信）。
				调出键盘，找到键盘上方或下方的 “笑脸” 😊 或 “地球” 🌐 图标。
			</p>
			<div>
				<button className='btn btn-default btn-md px-8 h-10 w-full '>了解更多</button>
			</div>
		</section>
	)
}

export default memo(Ad)
