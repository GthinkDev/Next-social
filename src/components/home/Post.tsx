import type { FC } from 'react'
import React, { memo } from 'react'
import Image from 'next/image'
import { Ellipsis, MessageCircleMore, Send, ThumbsUp } from 'lucide-react'
import Comments from './Comments'

const Post: FC = () => {
	return (
		<section className='flex flex-col gap-4 card'>
			{/* User */}
			<div className=' flex items-center  overflow-hidden gap-2'>
				<div className='w-10 h-10 '>
					<Image
						src='https://images.pexels.com/photos/34230675/pexels-photo-34230675.jpeg'
						alt=''
						width={40}
						height={40}
						className='rounded-full w-full h-full object-cover'
					/>
				</div>
				<span className='ml-2 font-medium flex-1 text-base-content'>用户名</span>
				<Ellipsis size={20} className='text-base-content' />
			</div>
			{/* Content */}
			<div className='flex flex-col gap-4'>
				<Image
					src='https://images.pexels.com/photos/34106777/pexels-photo-34106777.jpeg'
					alt='Post Image'
					width={600}
					height={400}
					className='w-full h-auto rounded-lg object-cover'
				/>
				<p className='text-base leading-[180%] text-base-content'>
					三、不同平台的输入方法 在手机上（iOS / Android）： 打开任意一个聊天或输入界面（如微信、短信）。
					调出键盘，找到键盘上方或下方的 “笑脸” 😊 或 “地球” 🌐 图标。 点击即可进入 emoji
					面板，左右滑动可以浏览不同分类（表情、动物、食物等）。 点击你想要的 emoji 即可输入。 在电脑上： Windows系统：
					在输入时按下 Win + .（句点） 或 Win + ;（分号）键。 macOS系统： 在输入时按下 Control + Command + 空格键。
					部分应用（如微信电脑版、钉钉）： 输入框旁边通常有一个直接的表情或 emoji 按钮。
				</p>
			</div>
			{/* Actions */}
			<div className='flex justify-between items-center gap-2 mt-4 w-full text-sm overflow-hidden'>
				<div className='bg-base-200 p-2 rounded-lg flex gap-8'>
					<div className='flex items-center gap-2'>
						<ThumbsUp size={16} />
						<div className='text-gray-500/50'>｜</div>
						<span className='font-medium '>2314 </span>
					</div>
					<div className='flex items-center gap-2'>
						<MessageCircleMore size={16} />
						<div className='text-gray-500/50'>｜</div>
						<span className='font-medium'>12</span>
					</div>
				</div>
				<div className='bg-base-200 p-2 rounded-lg flex items-center gap-2'>
					<Send size={16} />
					<div className='text-gray-500/50'>｜</div>
					<span className='font-medium'>2314</span>
				</div>
			</div>
			<Comments />
		</section>
	)
}

export default memo(Post)
