import Image from 'next/image'
import type { FC } from 'react'
import { memo } from 'react'

const UserCard: FC = () => {
  return (
    <section className="card">
      <div className="flex flex-col items-center gap-1">
        <Image
          src="https://images.pexels.com/photos/34355506/pexels-photo-34355506.jpeg"
          alt="User Avatar"
          width={600}
          height={100}
          className="rounded-lg object-cover w-full h-24"
        />
        <Image
          src="https://images.pexels.com/photos/34341420/pexels-photo-34341420.jpeg"
          alt="User Avatar"
          width={48}
          height={48}
          className="rounded-full object-cover w-16 h-16 -mt-9 border-2 border-white/50 dark:border-gray-800 self-center"
        />
        <p className="font-bold text-xl">DeMaster</p>
        <div className="pb-2">
          <p className="text-base-content text-xs">前端开发工程师 | 技术博主</p>
        </div>
        <button className="btn btn-primary btn-sm  h-10 ">我的头像</button>
      </div>
    </section>
  )
}

export default memo(UserCard)
