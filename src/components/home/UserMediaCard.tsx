'use client'

import siteConfig from '@/config/sits'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'
import { memo } from 'react'

interface IProps {
  userId: string
}

const UserMediaCard: FC<IProps> = () => {
  const images = siteConfig.imageListConfig
  return (
    <section className="card flex flex-col gap-4  ">
      <div className="flex w-full justify-between">
        <h1 className="title">用户动态</h1>
        <Link href={'/'} className="next">
          查看所有
        </Link>
      </div>
      <div className={'grid grid-cols-4 gap-2'}>
        {images.map((item, index) => {
          return <ImageList key={index} src={item.src} title={item.title} />
        })}
      </div>
    </section>
  )
}

export default memo(UserMediaCard)

interface ImageListProps {
  src: string
  title: string
}

const ImageList: FC<ImageListProps> = props => {
  const { src, title } = props
  return (
    <Image
      width={500}
      height={500}
      src={src}
      alt={title}
      className="object-cover w-full h-40 rounded-md"
    />
  )
}

export { ImageList }
