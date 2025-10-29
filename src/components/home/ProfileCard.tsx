import Image from 'next/image'
import type { FC } from 'react'
import { memo } from 'react'

const ProfileCard: FC = () => {
  return (
    <section className="card">
      <div className="flex flex-col items-center gap-1">
        <Image
          src="https://images.pexels.com/photos/34355506/pexels-photo-34355506.jpeg"
          alt="User Avatar"
          width={600}
          height={100}
          className="rounded-lg object-cover w-full h-24 "
        />
        <Image
          src="https://images.pexels.com/photos/34341420/pexels-photo-34341420.jpeg"
          alt="User Avatar"
          width={48}
          height={48}
          className="rounded-full object-cover w-12 h-12 -mt-6 border-2 border-white/50  "
        />
        <p className="font-bold text-xl">DeMaster</p>
        <div className="pb-2">
          <p className="text-base-content text-xs">Ui设计师 | 开发菜鸟</p>
        </div>
        <button className="btn btn-primary btn-sm w-1/2 h-10 ">我的头像</button>
      </div>
    </section>
  )
}

export default memo(ProfileCard)
