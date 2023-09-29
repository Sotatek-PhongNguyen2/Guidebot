'use client'


import { FaRegEdit } from 'react-icons/fa'
import { HiOutlineChat } from 'react-icons/hi'

import IntroSection from '@/components/home-page/intro-section'
import AboutSection from '@/components/home-page/about-section'
import UserBenefitSection from '@/components/home-page/user-benefit-section'
import FeatureSection from '@/components/home-page/feature-section'
import UseCaseSection from '@/components/home-page/use-case-section'
import CaseStudySection from '@/components/home-page/case-study-section'
import PriceSection from '@/components/home-page/price-section'
import ContactSection from '@/components/home-page/contact-section'
import Footer from '@/components/home-page/footer'

export default function Home() {
  return (
    <main className='min-h-screen overflow-hidden'>
      <IntroSection />
      <AboutSection />
      <div className='bg-[#06053A] border-none'>
        <div className='relative container py-32 md:pt-11 md:py-11 px-8 flex flex-col md:flex-row justify-center items-center gap-14'>
          <div className='w-0 h-0 absolute top-0 md:hidden border-l-[10rem] border-l-transparent border-t-[4rem] border-t-white border-r-[10rem] border-r-transparent'></div>
          <div className='md:w-[38%] mb-9'>
            <p className='text-white font-bold text-[24px] leading-[36px] mb-8 mx-8 md:mx-0 text-center md:text-start'>
              書類管理業務の負担や人的リソース不足にお悩みではありませんか？
            </p>
            <div className='flex gap-10 items-center justify-center mb-8 md:hidden'>
              <div className='flex gap-16 flex-col'>
                <div className='relative w-[125px] h-[125px] bg-white rounded-full flex justify-center items-center px-3 '>
                  <p className='font-bold leading-[20px] text-center text-[#06053A] text-[10px]'>
                    書類管理作業の 負担が大きく 業務に影響する
                  </p>
                  <div className='-top-[13px] -left-[13px] absolute h-[50px] w-[50px] bg-teal rounded-full flex justify-center items-center'>
                    <span className='font-bold text-[2rem] text-white'>
                      <HiOutlineChat />
                    </span>
                  </div>
                </div>
                <div className='relative w-[125px] h-[125px] bg-white rounded-full flex justify-center items-center px-3 '>
                  <p className='font-bold leading-[20px] text-center text-[#06053A] text-[10px]'>
                    書類管理作業の 負担が大きく 業務に影響する
                  </p>
                  <div className='-top-[13px] -left-[13px] absolute h-[50px] w-[50px] bg-teal rounded-full flex justify-center items-center'>
                    <span className='font-bold text-[2rem] text-white'>
                      <HiOutlineChat />
                    </span>
                  </div>
                </div>
              </div>
              <div className='relative w-[125px] h-[125px] bg-white rounded-full flex justify-center items-center px-3 '>
                <p className='font-bold leading-[20px] text-center text-[#06053A] text-[10px]'>
                  書類管理作業の 負担が大きく 業務に影響する
                </p>
                <div className='-top-[13px] -left-[13px] absolute h-[50px] w-[50px] bg-teal rounded-full flex justify-center items-center'>
                  <span className='font-bold text-[2rem] text-white'>
                    <HiOutlineChat />
                  </span>
                </div>
              </div>
            </div>
            <div className='text-white text-[14px] leading-[40px] font-medium mx-8 md:mx-0'>
              <p>
                現代企業では常に、情報共有や問い合わせへの迅速な対応が求められます。
              </p>
              <p>
                電子書類の検索と情報収集のプロセスにおける課題として、媒体管理における従来の手段には限界があり、大量の文書から特定の情報を見つけるのに時間と労力がかかるという声が多くありました。
              </p>
            </div>
          </div>
          {/* 3 bubble, md screen visible */}
          <div className='md:flex gap-10 items-center hidden'>
            <div className='flex gap-16 flex-col'>
              <div className='relative w-[194px] h-[194px] bg-white rounded-full flex justify-center items-center px-10'>
                <p className='font-bold leading-[30px] text-[#06053A]'>
                  書類管理作業の 負担が大きく 業務に影響する
                </p>
                <div className='-top-[13px] -left-[13px] absolute h-[75px] w-[75px] bg-teal rounded-full flex justify-center items-center'>
                  <span className='font-bold text-[2.5rem] text-white'>
                    <HiOutlineChat />
                  </span>
                </div>
              </div>
              <div className='relative w-[194px] h-[194px] bg-white rounded-full flex justify-center items-center px-10'>
                <p className='font-bold leading-[30px] text-[#06053A]'>
                  書類管理作業の 負担が大きく 業務に影響する
                </p>
                <div className='-top-[13px] -left-[13px] absolute h-[75px] w-[75px] bg-teal rounded-full flex justify-center items-center'>
                  <span className='font-bold text-[2.5rem] text-white'>
                    <HiOutlineChat />
                  </span>
                </div>
              </div>
            </div>
            <div className='relative w-[194px] h-[194px] bg-white rounded-full flex justify-center items-center px-10'>
              <p className='font-bold leading-[30px] text-[#06053A]'>
                書類管理作業の 負担が大きく 業務に影響する
              </p>
              <div className='-top-[13px] -left-[13px] absolute h-[75px] w-[75px] bg-teal rounded-full flex justify-center items-center'>
                <span className='font-bold text-[2.5rem] text-white'>
                  <HiOutlineChat />
                </span>
              </div>
            </div>
          </div>
          <div className='absolute -bottom-[8rem] flex gap-8 flex-col'>
            <div className='flex'>
              <div className='w-[136px] h-[10px] bg-[#00ADB5] rounded-l-full rotate-[15deg] relative left-[7px]'></div>
              <div className='w-[136px] h-[10px] bg-[#00ADB5] rounded-r-full -rotate-[15deg] relative '></div>
            </div>
            <div className='flex'>
              <div className='w-[136px] h-[10px] bg-[#34D2CC] rounded-l-full rotate-[15deg] relative left-[7px]'></div>
              <div className='w-[136px] h-[10px] bg-[#34D2CC] rounded-r-full -rotate-[15deg] relative '></div>
            </div>
            <div className='flex'>
              <div className='w-[136px] h-[10px] bg-[#5DE8D7] rounded-l-full rotate-[15deg] relative left-[7px]'></div>
              <div className='w-[136px] h-[10px] bg-[#5DE8D7] rounded-r-full -rotate-[15deg] relative '></div>
            </div>
            <div className='flex'>
              <div className='w-[136px] h-[10px] bg-[#94F7E2] rounded-l-full rotate-[15deg] relative left-[7px]'></div>
              <div className='w-[136px] h-[10px] bg-[#94F7E2] rounded-r-full -rotate-[15deg] relative '></div>
            </div>
          </div>
        </div>
      </div>
      <UserBenefitSection />
      <div className='bg-[#06053A]'>
        <div className='relative container py-11 px-8 flex justify-center items-center gap-5  flex-col'>
          <div className='flex items-center justify-center md:justify-start'>
            <span className='text-[3rem] text-white mr-9 hidden md:block'>
              <FaRegEdit />
            </span>
            <h2
              className='text-[32px] font-bold text-white'
              style={{
                letterSpacing: '3.5px',
              }}
            >
              今なら
              <span
                className='text-[#5DE8D7] text-[40px]'
                style={{
                  letterSpacing: '4.4px',
                }}
              >
                2週間
              </span>
              の
              <span
                className='text-[#5DE8D7] text-[40px]'
                style={{
                  letterSpacing: '4.4px',
                }}
              >
                無料トライアル
              </span>
              実施中！
            </h2>
          </div>
          <div className='flex gap-6 flex-col md:flex-row'>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-sm text-white font-bold mb-3'>
                \「Guide bot」に関する /
              </p>
              <button className='transition ease-out hover:-translate-y-1 hover:scale-105 duration-300 bg-teal-bold rounded-full w-[22rem] text-white text-[20px] font-bold py-3 text-center'>
                資料ダウンロード
              </button>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-sm text-white font-bold mb-3'>
                \ 無料デモの体験はこちら /
              </p>
              <button className='transition ease-out hover:-translate-y-1 hover:scale-105 duration-300 bg-white rounded-full w-[22rem] text-black text-[20px] font-bold py-3 text-center'>
                導入相談・お問い合わせ
              </button>
            </div>
          </div>
        </div>
      </div>
      <FeatureSection />
      <UseCaseSection />
      <CaseStudySection />
      <PriceSection />
      <ContactSection />
     <Footer />
    </main>
  )
}
