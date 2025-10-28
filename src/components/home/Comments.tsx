import type { FC } from 'react'
import { memo } from 'react'
import Image from 'next/image'
import { Ellipsis, ThumbsUp } from 'lucide-react'

const Comments: FC = () => {
	return (
		<section>
			{/* Comments Section Placeholder */}
			<div className='flex items-center gap-4 py-8'>
				<Image
					src='https://images.pexels.com/photos/34299175/pexels-photo-34299175.jpeg'
					alt='missing'
					width={32}
					height={32}
					className='rounded-full w-8 h-8 object-cover border border-gray-600/50'
				/>
				<div className='flex-1'>
					<label htmlFor='' className='input input-sm input-ghost bg-base-200 w-full flex items-center gap-2'>
						<input type='text' placeholder='说点什么吧'></input>
						<span className='text-xl ml-2 cursor-pointer'>😊</span>
					</label>
				</div>
			</div>
			{/* Comments */}
			<div className='flex gap-4 '>
				{/* Avatar */}
				<Image
					src='https://images.pexels.com/photos/34230675/pexels-photo-34230675.jpeg'
					alt=''
					width={40}
					height={40}
					className='rounded-full w-10 h-10 object-fill shrink-0'
				/>

				<div className='flex flex-col gap-2 w-full'>
					{/* name */}
					<div className='flex gap-2 justify-between items-center flex-1 text-base font-medium text-base-content'>
						<span className='font-medium flex-1 text-base-content w-full'>用户名</span>
						<Ellipsis size={20} className='text-base-content' />
					</div>
					{/* des */}
					<div>
						<p className='text-sm leading-[180%] text-base-content/90'>
							三、不同平台的输入方法 在手机上（iOS / Android）： 打开任意一个聊天或输入界面（如微信、短信）。 Command +
							空格键。
						</p>
					</div>
					{/* action */}
					<div className='flex gap-4 w-fit items-center'>
						<div className='flex gap-2 items-center text-sm py-1.5 px-2  bg-base-200 rounded-lg cursor-pointer'>
							<ThumbsUp size={16} />
							<div className='text-gray-500/50'>｜</div>
							<span className='font-medium '>2314 </span>
						</div>
						<button className='btn btn-ghost text-sm text-gray-500 h-8'>重置</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default memo(Comments)
