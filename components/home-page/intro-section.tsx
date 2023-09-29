'use client'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Image from 'next/image'
import React, { useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'
import { RxHamburgerMenu } from 'react-icons/rx'

function IntroSection() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div>
      <div className='intro-bg w-full h-[490px] md:h-[537px]'>
        <div className='container mx-auto pt-0 md:pt-10 relative'>
          <nav className='hidden md:flex bg-white bg-opacity-[68%] rounded-[30px] items-center px-12 justify-between'>
            <p className='font-bold text-lg'>Guide Bot logo</p>
            <div className='flex'>
              <div className='flex'>
                <a
                  className='px-4 py-[24px] hover:bg-white text-[14px]'
                  href='#about'
                >
                  Guide Botとは
                </a>
                <a
                  className='px-4 py-[24px] hover:bg-white text-[14px]'
                  href='#features'
                >
                  特長
                </a>
                <a
                  className='px-4 py-[24px] hover:bg-white text-[14px]'
                  href='#usecase'
                >
                  活用シーン
                </a>
                <a
                  className='px-4 py-[24px] hover:bg-white text-[14px]'
                  href='#casestudy'
                >
                  導入事例
                </a>
                <a
                  className='px-4 py-[24px] hover:bg-white text-[14px]'
                  href='#price'
                >
                  料金プラン
                </a>
              </div>
              <div className='ml-5 flex items-center'>
                <button className='transition ease-out hover:-translate-y-1 hover:scale-105 duration-300 rounded-[16px] px-6 py-[11px] text-[14px] font-bold bg-teal text-white mr-3'>
                  資料ダウンロード
                </button>
                <button className='transition ease-out hover:-translate-y-1 hover:scale-105  duration-300 bg-[#354077] rounded-[16px] px-[38px] py-[11px] text-[14px] font-bold text-white'>
                  お問い合わせ
                </button>
              </div>
            </div>
          </nav>
          <nav className='flex md:hidden bg-white items-center px-4 justify-between py-[11px]'>
            <p className='font-bold text-lg'>Guide Bot </p>
            <button
              onClick={() => setShowMenu(true)}
              className='rounded-lg bg-[#00ADB5] p-3 font-bold'
            >
              <RxHamburgerMenu />
            </button>
          </nav>
          <div
            className={`md:hidden w-[222px] bg-[#06053A] px-4 pb-5 top-0 absolute transition-all z-50 ${
              showMenu ? 'right-0' : '-right-[222px]'
            }`}
          >
            <div className='flex bg-[#06053A] items-center justify-between py-[11px] '>
              <p className='font-bold text-lg text-white'>Guide Bot </p>
              <button
                onClick={() => setShowMenu(false)}
                className='rounded-lg bg-[#00ADB5] p-3 font-bold'
              >
                <CgClose />
              </button>
            </div>
            <div className='flex flex-col w-full gap-5 items-center justify-center mt-5'>
              <div className='w-full border-b-[1px] border-white group-hover:border-[#34D2CC] pb-1 flex items-center justify-between'>
                <a
                  onClick={() => setShowMenu(false)}
                  className='font-medium text-white text-sm group-hover:text-[#34D2CC]'
                  href='#about'
                >
                  Guide Botとは
                </a>
              </div>
              <div className='w-full border-b-[1px] border-white group-hover:border-[#34D2CC] pb-1 flex items-center justify-between'>
                <a
                  onClick={() => setShowMenu(false)}
                  className='font-medium text-white text-sm group-hover:text-[#34D2CC]'
                  href='#features'
                >
                  特長
                </a>
              </div>
              <div className='w-full border-b-[1px] border-white group-hover:border-[#34D2CC] pb-1 flex items-center justify-between'>
                <a
                  onClick={() => setShowMenu(false)}
                  className='font-medium text-white text-sm group-hover:text-[#34D2CC]'
                  href='#usecase'
                >
                  活用シーン
                </a>
              </div>
              <div className='w-full border-b-[1px] border-white group-hover:border-[#34D2CC] pb-1 flex items-center justify-between'>
                <a
                  onClick={() => setShowMenu(false)}
                  className='font-medium text-white text-sm group-hover:text-[#34D2CC]'
                  href='#casestudy'
                >
                  導入事例
                </a>
              </div>
              <div className='w-full border-b-[1px] border-white group-hover:border-[#34D2CC] pb-1 flex items-center justify-between'>
                <a
                  onClick={() => setShowMenu(false)}
                  className='font-medium text-white text-sm group-hover:text-[#34D2CC]'
                  href='#price'
                >
                  料金プラン
                </a>
              </div>
            </div>
            <div className='flex items-center gap-3 mt-4'>
              <p className='text-white font-normal text-[10px]'>
                Follow on social service
              </p>
              <Image src={'/fb.svg'} height={15} width={15} alt='fb' />
            </div>
          </div>
          <div className='hidden md:block text-white mt-[5rem]'>
            <h2 className='text-4xl font-bold leading-[60px]'>
              バックオフィスの
            </h2>
            <h2 className='text-4xl font-bold leading-[60px]'>
              業務効率を向上させる
            </h2>
            <h2 className='text-4xl font-bold leading-[60px]'>DXツール</h2>
          </div>
          <div className='block md:hidden pl-4 text-white mt-[5rem]'>
            <h2 className='text-[26px] font-bold leading-[30px]'>
              バックオフィスを
            </h2>
            <h2 className='text-[26px] font-bold leading-[30px]'>
              効率化するChatGPT
            </h2>
          </div>
          <div className=' pl-4 md:hidden flex flex-col gap-6 mt-[20%]'>
            <button className='border-gradient py-3 text-white text-sm font-bold'>
              資料ダウンロード
            </button>
            <button className='border-[3px] w-[15rem] border-white py-3 text-white text-sm font-bold'>
              お問い合わせはコチラ
            </button>
          </div>

          <div className='bg-white rounded-xl px-12 py-[1.5rem] hidden md:flex justify-between -bottom-[55%] absolute shadow-lg left-0 right-0'>
            <a
              className='px-6 py-[10px] text-[14px] font-normal bg-[#F5F5F5]'
              href='#'
            >
              導入企業ロゴ
            </a>
            <a
              className='px-6 py-[10px] text-[14px] font-normal bg-[#F5F5F5]'
              href='#'
            >
              導入企業ロゴ
            </a>
            <a
              className='px-6 py-[10px] text-[14px] font-normal bg-[#F5F5F5]'
              href='#'
            >
              導入企業ロゴ
            </a>
            <a
              className='px-6 py-[10px] text-[14px] font-normal bg-[#F5F5F5]'
              href='#'
            >
              導入企業ロゴ
            </a>
            <a
              className='px-6 py-[10px] text-[14px] font-normal bg-[#F5F5F5]'
              href='#'
            >
              導入企業ロゴ
            </a>
            <a
              className='px-6 py-[10px] text-[14px] font-normal bg-[#F5F5F5]'
              href='#'
            >
              導入企業ロゴ
            </a>
          </div>
        </div>
      </div>
      <div className='bg-white px-4 py-[1.5rem] flex md:hidden justify-between shadow-md '>
        <a
          className='px-3 py-[10px] text-[14px] font-normal bg-[#F5F5F5]'
          href='#'
        >
          導入企業ロゴ
        </a>
        <a
          className='px-3 py-[10px] text-[14px] font-normal bg-[#F5F5F5]'
          href='#'
        >
          導入企業ロゴ
        </a>
        <a
          className='px-3 py-[10px] text-[14px] font-normal bg-[#F5F5F5]'
          href='#'
        >
          導入企業ロゴ
        </a>
      </div>
    </div>
  )
}

export default IntroSection
