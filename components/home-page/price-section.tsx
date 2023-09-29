import PricingCardMobile from '@/components/home-page/pricing-card-mobile'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import React, { useState } from 'react'
import { BiSolidCheckCircle } from 'react-icons/bi'
const inter = Inter({ subsets: ['latin'] })
function PriceSection() {
  return (
    <div id='price' className='container flex justify-center pb-[8rem] pt-[1rem] flex-col items-center'>
      <div className='text-center flex justify-center flex-col items-center'>
        <h4 className='text-[20px] font-bold text-[#00ADB5] bg-red pb-1  max-w-fit mx-auto tracking-5 uppercase'>
          PRICE
        </h4>
        <div className='h-[3px] w-[100px] rounded-full bg-[#00ADB5]'></div>
      </div>
      <div className='mt-5 hidden md:block'>
        <h5 className='text-[#06053A] text-center text-[32px] font-bold leading-[40px]'>
          料金プラン
        </h5>
        <div className='flex flex-col mt-10 gap-20 pl-24'>
          <div className='flex items-center'>
            <div className='-rotate-[90deg] flex gap-4 flex-col'>
              <div className='flex'>
                <div className='w-[19px] h-[4px] bg-[#00ADB5] rounded-l-full rotate-[45deg] relative left-[7px]'></div>
                <div className='w-[19px] h-[4px] bg-[#00ADB5] rounded-r-full -rotate-[45deg] relative '></div>
              </div>
              <div className='flex'>
                <div className='w-[19px] h-[4px] bg-[#34D2CC] rounded-l-full rotate-[45deg] relative left-[7px]'></div>
                <div className='w-[19px] h-[4px] bg-[#34D2CC] rounded-r-full -rotate-[45deg] relative '></div>
              </div>
              <div className='flex'>
                <div className='w-[19px] h-[4px] bg-[#5DE8D7] rounded-l-full rotate-[45deg] relative left-[7px]'></div>
                <div className='w-[19px] h-[4px] bg-[#5DE8D7] rounded-r-full -rotate-[45deg] relative '></div>
              </div>
              <div className='flex'>
                <div className='w-[19px] h-[4px] bg-[#94F7E2] rounded-l-full rotate-[45deg] relative left-[7px]'></div>
                <div className='w-[19px] h-[4px] bg-[#94F7E2] rounded-r-full -rotate-[45deg] relative '></div>
              </div>
            </div>
            <p className='text-[#06053A] text-[24px] font-bold ml-10 pb-2'>
              Guide Bot パッケージ版 初期費用
            </p>
          </div>
          <div className='flex items-center'>
            <div className='-rotate-[90deg] flex gap-4 flex-col'>
              <div className='flex'>
                <div className='w-[19px] h-[4px] bg-[#00ADB5] rounded-l-full rotate-[45deg] relative left-[7px]'></div>
                <div className='w-[19px] h-[4px] bg-[#00ADB5] rounded-r-full -rotate-[45deg] relative '></div>
              </div>
              <div className='flex'>
                <div className='w-[19px] h-[4px] bg-[#34D2CC] rounded-l-full rotate-[45deg] relative left-[7px]'></div>
                <div className='w-[19px] h-[4px] bg-[#34D2CC] rounded-r-full -rotate-[45deg] relative '></div>
              </div>
              <div className='flex'>
                <div className='w-[19px] h-[4px] bg-[#5DE8D7] rounded-l-full rotate-[45deg] relative left-[7px]'></div>
                <div className='w-[19px] h-[4px] bg-[#5DE8D7] rounded-r-full -rotate-[45deg] relative '></div>
              </div>
              <div className='flex'>
                <div className='w-[19px] h-[4px] bg-[#94F7E2] rounded-l-full rotate-[45deg] relative left-[7px]'></div>
                <div className='w-[19px] h-[4px] bg-[#94F7E2] rounded-r-full -rotate-[45deg] relative '></div>
              </div>
            </div>
            <p className='text-[#06053A] text-[24px] font-bold ml-10 pb-2'>
              Guide Bot パッケージ版 初期費用
            </p>
          </div>
        </div>
        <div className='mt-10 text-center'>
          <p className='text-[#06053A] font-bold text-[24px]'>
            使い方に合わせて選べる質問量
          </p>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-[#6A6B6C] text-xs font-medium'>
                使用規模に合わせたプランをご用意しております
              </p>
              <p className='text-[#6A6B6C] text-xs font-medium'>
                ご不明点やプランのご相談は
                <span className='text-[#006682] font-black'>コチラ</span>
                よりお問い合わせください
              </p>
            </div>
          </div>
        </div>
        <div className='flex gap-5 mt-9 items-end justify-center'>
          <div className='w-[20%] px-6 py-9 flex flex-col h-fit items-center justify- shadow-[#D1D8DD_0px_2px_9px_0px] rounded-2xl'>
            <div className='flex gap-3 items-center'>
              <div className='rounded-xl bg-[#C9FBEC] p-3 flex'>
                <div className='w-[16px] h-[32px] bg-[#006682] rounded-l-full'></div>
                <div className='w-[16px] h-[32px] bg-[#5DE8D7] rounded-r-full'></div>
              </div>
              <div>
                <p className='text-[12px] font-medium text-[#6F6C90]'>
                  ～XX人向け
                </p>
                <p className='text-sm font-bold text-[#170F49] mt-1'>
                  エントリープラン
                </p>
              </div>
            </div>
            <p className='text-[11px] text-[#6F6C90] mt-6 w-[80%]'>
              ～10アカウント作成等エントリープランの説明が入ります
            </p>
            <p className='mt-6 text-[33px] text-[#170F49] font-bold'>
              5万円{' '}
              <span className='text-[#6F6C90] text-[12px] font-medium'>
                / 月
              </span>
            </p>
            <p className='text-[#170F49] text-[11px] font-bold mt-5'>
              含まれるサービス内容
            </p>
            <div className='flex items-center mt-4'>
              <p className='text-[18px] text-[#34D2CC]'>
                <BiSolidCheckCircle />
              </p>
              <p className='text-[#170F49] text-[18px] ml-2'>
                最大4,000件の質問数
              </p>
            </div>
          </div>
          <div className='w-[20%] '>
            <div className='px-6 py-9 flex flex-col items-center justify-center shadow-[#D1D8DD_0px_2px_9px_0px] rounded-t-2xl'>
              <div className='flex gap-3 items-center'>
                <div className='rounded-xl bg-[#C9FBEC] p-3 flex'>
                  <div className='w-[16px] h-[32px] bg-[#006682] rounded-l-full'></div>
                  <div className='w-[16px] h-[32px] bg-[#5DE8D7] rounded-r-full'></div>
                </div>
                <div>
                  <p className='text-[12px] font-medium text-[#6F6C90]'>
                    ～XX人向け
                  </p>
                  <p className='text-sm font-bold text-[#170F49] mt-1'>
                    ライトプラン
                  </p>
                </div>
              </div>
              <p className='text-[11px] text-[#6F6C90] mt-6 w-[80%]'>
                ～10アカウント作成等ライトプランの説明が入ります
              </p>
              <p className='mt-6 text-[33px] text-[#170F49] font-bold'>
                10万円
                <span className='text-[#6F6C90] text-[12px] font-medium'>
                  / 月
                </span>
              </p>
              <p className='text-[#170F49] text-[11px] font-bold mt-5'>
                含まれるサービス内容
              </p>
              <div className='flex items-center mt-4'>
                <p className='text-[18px] text-[#34D2CC]'>
                  <BiSolidCheckCircle />
                </p>
                <p className='text-[#170F49] text-[18px] ml-2'>
                  最大9,000件の質問数
                </p>
              </div>
            </div>
            <div className='bg-[#34D2CC] rounded-b-2xl w-full h-[4rem]'></div>
          </div>
          <div className='w-[20%] '>
            <div className='px-6 py-9 flex flex-col items-center justify-center shadow-[#D1D8DD_0px_2px_9px_0px] rounded-t-2xl'>
              <div className='flex gap-3 items-center'>
                <div className='rounded-xl bg-[#C9FBEC] p-3 flex'>
                  <div className='w-[16px] h-[32px] bg-[#006682] rounded-l-full'></div>
                  <div className='w-[16px] h-[32px] bg-[#5DE8D7] rounded-r-full'></div>
                </div>
                <div>
                  <p className='text-[12px] font-medium text-[#6F6C90]'>
                    ～XX人向け
                  </p>
                  <p className='text-sm font-bold text-[#170F49] mt-1'>
                    スタンダードプラン
                  </p>
                </div>
              </div>
              <p className='text-[11px] text-[#6F6C90] mt-6 w-[80%]'>
                ～10アカウント作成等ライトプランの説明が入ります
              </p>
              <p className='mt-6 text-[33px] text-[#170F49] font-bold'>
                20万円
                <span className='text-[#6F6C90] text-[12px] font-medium'>
                  / 月
                </span>
              </p>
              <p className='text-[#170F49] text-[11px] font-bold mt-5'>
                含まれるサービス内容
              </p>
              <div className='flex items-center mt-4'>
                <p className='text-[18px] text-[#34D2CC]'>
                  <BiSolidCheckCircle />
                </p>
                <p className='text-[#170F49] text-[18px] ml-2'>
                  最大19,000件の質問数
                </p>
              </div>
            </div>
            <div className='bg-[#5DE8D7] w-full h-[4rem]'></div>
            <div className='bg-[#34D2CC] rounded-b-2xl w-full h-[4rem]'></div>
          </div>
          <div className='w-[20%] '>
            <div className='px-6 py-9 flex flex-col items-center justify-center shadow-[#D1D8DD_0px_2px_9px_0px] rounded-t-2xl'>
              <div className='flex gap-3 items-center'>
                <div className='rounded-xl bg-[#C9FBEC] p-3 flex'>
                  <div className='w-[16px] h-[32px] bg-[#006682] rounded-l-full'></div>
                  <div className='w-[16px] h-[32px] bg-[#5DE8D7] rounded-r-full'></div>
                </div>
                <div>
                  <p className='text-[12px] font-medium text-[#6F6C90]'>
                    ～XX人向け
                  </p>
                  <p className='text-sm font-bold text-[#170F49] mt-1'>
                    スタンダードプラン
                  </p>
                </div>
              </div>
              <p className='text-[11px] text-[#6F6C90] mt-6 w-[80%]'>
                ～10アカウント作成等ライトプランの説明が入ります
              </p>
              <p className='mt-6 text-[33px] text-[#170F49] font-bold'>
                20万円
                <span className='text-[#6F6C90] text-[12px] font-medium'>
                  / 月
                </span>
              </p>
              <p className='text-[#170F49] text-[11px] font-bold mt-5'>
                含まれるサービス内容
              </p>
              <div className='flex items-center mt-4'>
                <p className='text-[18px] text-[#34D2CC]'>
                  <BiSolidCheckCircle />
                </p>
                <p className='text-[#170F49] text-[18px] ml-2'>
                  最大30,000件の質問数
                </p>
              </div>
            </div>
            <div className='bg-[#94F7E2] w-full h-[4rem]'></div>
            <div className='bg-[#5DE8D7] w-full h-[4rem]'></div>
            <div className='bg-[#34D2CC] rounded-b-2xl w-full h-[4rem]'></div>
          </div>
        </div>
        <p className='text-[18px] text-[#06053A] font-bold text-center mt-8'>
          ※ご契約の質問量を超えた際は{' '}
          <span className='text-[32px]'>1,000件</span> 単位ごとに
          <span className='text-[32px]'>1万円</span>
          （税別）の従量課金となります
        </p>
        <div className='flex flex-col mt-[6rem] gap-20 pl-24'>
          <div className='flex items-center'>
            <div className='-rotate-[90deg] flex gap-4 flex-col'>
              <div className='flex'>
                <div className='w-[19px] h-[4px] bg-[#00ADB5] rounded-l-full rotate-[45deg] relative left-[7px]'></div>
                <div className='w-[19px] h-[4px] bg-[#00ADB5] rounded-r-full -rotate-[45deg] relative '></div>
              </div>
              <div className='flex'>
                <div className='w-[19px] h-[4px] bg-[#34D2CC] rounded-l-full rotate-[45deg] relative left-[7px]'></div>
                <div className='w-[19px] h-[4px] bg-[#34D2CC] rounded-r-full -rotate-[45deg] relative '></div>
              </div>
              <div className='flex'>
                <div className='w-[19px] h-[4px] bg-[#5DE8D7] rounded-l-full rotate-[45deg] relative left-[7px]'></div>
                <div className='w-[19px] h-[4px] bg-[#5DE8D7] rounded-r-full -rotate-[45deg] relative '></div>
              </div>
              <div className='flex'>
                <div className='w-[19px] h-[4px] bg-[#94F7E2] rounded-l-full rotate-[45deg] relative left-[7px]'></div>
                <div className='w-[19px] h-[4px] bg-[#94F7E2] rounded-r-full -rotate-[45deg] relative '></div>
              </div>
            </div>
            <p className='text-[#06053A] text-[24px] font-bold ml-10 pb-2'>
              Guide Bot API
            </p>
          </div>
        </div>
      </div>
      <div className='mt-10 text-center hidden md:block'>
        <p className='text-[#06053A] font-bold text-[24px]'>API販売</p>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='flex flex-col justify-center items-center'>
            <p className='text-[#6A6B6C] text-xs font-medium'>
              使用規模に合わせたプランをご用意しております
            </p>
            <p className='text-[#6A6B6C] text-xs font-medium'>
              ご不明点やプランのご相談は
              <span className='text-[#006682] font-black'>コチラ</span>
              よりお問い合わせください
            </p>
          </div>
        </div>
      </div>
      {/* Pricing section on mobile */}
      <p className='text-[#06053A] text-base font-bold mt-6'>料金プラン</p>
      <PricingCardMobile className='mt-8 md:hidden' />
    </div>
  )
}

export default PriceSection
