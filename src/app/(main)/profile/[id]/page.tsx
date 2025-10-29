'use client'

import Feed from '@/components/home/Feed'
import LeftMenu from '@/components/home/LeftMenu'
import RightMenu from '@/components/home/RightMenu'
import { fontPoppins } from '@/style/fonts'
import clsx from 'clsx'
import Image from 'next/image'
import type { FC } from 'react'
import { memo } from 'react'

const Page: FC = () => {
  return (
    <section
      className={' w-full pt-4 flex gap-2 justify-start items-start z-20'}
    >
      <div className={'hidden xl:block w-1/5 '}>
        <LeftMenu type={'home'} />
      </div>
      <div className={'w-full lg:w-[70%] xl:w-1/2 flex flex-col gap-2'}>
        <div className={'flex flex-col  gap-6 items-center card '}>
          <div className={' relative w-full'}>
            <Image
              src={
                'https://images.unsplash.com/photo-1761197698146-f5d09c08bab1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500'
              }
              alt={'missing'}
              width={1000}
              height={400}
              className={'object-cover w-full h-80 rounded-lg'}
            />
            <Image
              src={
                'https://images.unsplash.com/photo-1761197698146-f5d09c08bab1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500'
              }
              alt={'missing'}
              width={128}
              height={128}
              className={
                'object-cover w-32 h-32 rounded-full ring-2 absolute left-0 right-0 ring-neutral-content -bottom-16 mx-auto '
              }
            />
          </div>
          <div className={'mt-12'}>
            <p className={'font-black text-2xl text-base-content'}>
              DeMaster の 社交网站
            </p>
          </div>
          <div className={'flex gap-12 text-base-content'}>
            <div className={clsx('flex flex-col gap-0 items-center ')}>
              <span
                className={clsx(
                  'flex flex-col  text-lg items-center font-medium',
                  fontPoppins
                )}
              >
                234
              </span>
              <span className={'font-normal text-base'}>动态</span>
            </div>
            <div className={clsx('flex flex-col gap-0 items-center ')}>
              <span
                className={clsx(
                  'flex flex-col  text-lg  items-center font-medium',
                  fontPoppins
                )}
              >
                832
              </span>
              <span className={'font-normal text-base'}>点赞</span>
            </div>
            <div className={clsx('flex flex-col gap-0 items-center ')}>
              <span
                className={clsx(
                  'flex flex-col  text-lg font-medium  items-center ',
                  fontPoppins
                )}
              >
                1.8K
              </span>
              <span className={'font-normal text-base'}>评论</span>
            </div>
          </div>
        </div>
        <Feed />
      </div>
      <div className={'hidden lg:block w-1/3 '}>
        <RightMenu userId={'test'} />
      </div>
    </section>
  )
}

export default memo(Page)
