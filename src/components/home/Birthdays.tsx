import type { FC } from 'react'
import { memo } from 'react'
import Image from 'next/image'

const Birthdays: FC = () => {
	return (
		<section className='card flex flex-col gap-4  '>
			<div className='flex items-center gap-4 '>
				<h1 className='title'>生日提醒</h1>
			</div>
			<div>
				<BirthdaysList />
			</div>
			<div className='flex gap-4 p-4 bg-base-200 rounded-lg items-center cursor-pointer'>
				<Image src='/liwu.png' alt='friend1' width={50} height={50} className='rounded-full w-12 h-12 object-cover' />
				<div className='text-gray-500'>
					<p>即将到来的生日</p>
					<p>查看其它 16 个即将到来的生日</p>
				</div>
			</div>
		</section>
	)
}

export default memo(Birthdays)

const BirthdaysList: FC = () => {
	return (
		<main className='flex gap-4  items-center '>
			<Image
				src='https://images.pexels.com/photos/34206555/pexels-photo-34206555.jpeg'
				alt='friend1'
				width={50}
				height={50}
				className='rounded-full w-12 h-12 object-cover'
			/>
			<p className='font-black text-base w-fit'>张三</p>
			<div className='flex gap-4 flex-1 justify-end'>
				<button className='btn btn-primary btn-md  h-10 '>🎉 祝贺</button>
			</div>
		</main>
	)
}

export { BirthdaysList }
