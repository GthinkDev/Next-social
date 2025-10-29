'use client'

import {
  BriefcaseBusiness,
  CalendarDays,
  Link as LinkIcon,
  MapPinHouse,
  School,
} from 'lucide-react'
import Link from 'next/link'
import { FC, memo } from 'react'

interface IProps {
  userId: string
}

const UserInfoCard: FC<IProps> = () => {
  return (
    <section className="card flex flex-col gap-6  ">
      <div className="flex w-full justify-between">
        <h1 className="title">用户信息</h1>
        <Link href={'/'} className="next">
          查看所有
        </Link>
      </div>
      <div className={'flex flex-col gap-6'}>
        {/* <UserInfoCardItem /> */}
        {/*     用户头像*/}
        <div className={'flex gap-2 items-center'}>
          <span className={'text-base-content text-xl'}>DeMaster</span>
          <span className={'text-sm text-base-content/80'}>
            @gthinkdesign520
          </span>
        </div>
        {/*介绍*/}
        <p className={'text-base text-gray-500'}>
          .fig 文件是 Figma 的专属项目文件格式，就像 Photoshop 的 .psd
          文件一样。它包含了设计文件的所有图层、组件、样式、注释等完整信息。你通常不需要“导出”它，而是“保存”或“获得”它。
        </p>
        {/*地址*/}
        <div className={'flex gap-2 text-base-content '}>
          <MapPinHouse size={20} />
          <span>
            城市: <b>湖北省 襄阳市 襄城区</b>
          </span>
        </div>
        {/*学校*/}
        <div className={'flex gap-2 text-base-content'}>
          <School size={20} />
          <span>
            学校: <b>江西省师范大学</b>
          </span>
        </div>
        {/*工作*/}
        <div className={'flex gap-2 text-base-content'}>
          <BriefcaseBusiness size={20} />
          <span>
            工作: <b>互联网产品经理</b>
          </span>
        </div>
        <div className={'flex image-full justify-between items-center'}>
          <Link
            href={'/'}
            className={
              ' gap-2 flex image-full justify-between items-center text-primary'
            }
          >
            <LinkIcon size={18} />
            <span className={'text-base'}>GthinkDev</span>
          </Link>
          <div className={'flex gap-2 items-center text-neutral-content'}>
            <CalendarDays size={18} />
            <span className={'text-base '}>2025年10月加入</span>
          </div>
        </div>
        <button className={'btn btn-primary btn-sm text-base w-full'}>
          关注
        </button>
        <span className={'w-full text-end text-sm text-gray-400'}>
          受限的用户
        </span>
      </div>
    </section>
  )
}

export default memo(UserInfoCard)
