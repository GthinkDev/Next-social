'use client'

import { CalendarDays, Clapperboard, ImageUp, PencilRuler } from 'lucide-react'
import Image from 'next/image'
import type { FC } from 'react'
import { memo } from 'react'

const AddPost: FC = () => {
  return (
    <section className="card  ">
      <div className="flex gap-4 w-full">
        <div className="w-12 h-12 rounded-full border-2 border-gray-600/50 overflow-hidden bg-base-300">
          <Image
            src="https://images.pexels.com/photos/34106777/pexels-photo-34106777.jpeg"
            alt="User Avatar"
            width={50}
            height={50}
            className="w-full h-full object-cover"
            unoptimized={true}
          />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex gap-2 items-end">
            <textarea
              className="flex-1 h-24 textarea textarea-ghost bg-base-200"
              placeholder="你在想什么?"
            />
            <span className="text-xl ml-2 cursor-pointer">😊</span>
          </div>
          <div className="flex gap-4 items-center flex-wrap text-gray-400">
            <div className="flex gap-2 items-center cursor-pointer">
              <ImageUp size={18} />
              <p>图片</p>
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <Clapperboard size={18} />
              <p>视频</p>
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <PencilRuler size={18} />
              <p>文字</p>
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <CalendarDays size={18} />
              <p>事件</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(AddPost)
