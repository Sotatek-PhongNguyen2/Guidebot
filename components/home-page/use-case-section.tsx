'use client'

import { Inter } from 'next/font/google'
import Image from 'next/image'
import React, { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })
function UseCaseSection() {
   const [tab, setTab] = useState('1')
  return (
    <div id='usecase' className='hidden md:flex container justify-center pb-[10rem] pt-[1rem] flex-col'>
      <div className='text-center flex justify-center flex-col items-center'>
        <h4 className='text-[20px] font-bold text-[#00ADB5] bg-red pb-1  max-w-fit mx-auto tracking-5 uppercase'>
          USE CASE
        </h4>
        <div className='h-[3px] w-[100px] rounded-full bg-[#00ADB5]'></div>
      </div>
      <div className='mt-5'>
        <h5 className='text-[#06053A] text-center text-[32px] font-bold leading-[40px]'>
          活用シーン
        </h5>
        <div className='flex gap-10 justify-center items-center mt-10'>
          <button
            onClick={() => setTab('1')}
            className={`hover:bg-teal-gradient hover:text-white text-[#534D5E] border-[2px] border-[#534D5E] hover:border-none hover:py-[0.6rem] rounded-lg w-[8rem] py-2 font-semibold drop-shadow-md shadow-md shadow-[#9CA4AB] ${
              tab === '1' &&
              'bg-teal-gradient text-white border-none py-[0.6rem] drop-shadow-md shadow-md shadow-[#9CA4AB]'
            }`}
          >
            検索・要約
          </button>
          <button
            onClick={() => setTab('2')}
            className={`hover:bg-teal-gradient hover:text-white text-[#534D5E] border-[2px] border-[#534D5E] hover:border-none hover:py-[0.6rem] rounded-lg w-[8rem] py-2 font-semibold drop-shadow-md shadow-md shadow-[#9CA4AB] ${
              tab === '2' &&
              'bg-teal-gradient text-white border-none py-[0.6rem] drop-shadow-md shadow-md shadow-[#9CA4AB]'
            }`}
          >
            FAQ
          </button>
          <button
            onClick={() => setTab('3')}
            className={`hover:bg-teal-gradient hover:text-white text-[#534D5E] border-[2px] border-[#534D5E] hover:border-none hover:py-[0.6rem] rounded-lg w-[8rem] py-2 font-semibold drop-shadow-md shadow-md shadow-[#9CA4AB] ${
              tab === '3' &&
              'bg-teal-gradient text-white border-none py-[0.6rem] drop-shadow-md shadow-md shadow-[#9CA4AB]'
            }`}
          >
            緊急対応
          </button>
          <button
            onClick={() => setTab('4')}
            className={`hover:bg-teal-gradient hover:text-white text-[#534D5E] border-[2px] border-[#534D5E] hover:border-none hover:py-[0.6rem] rounded-lg w-[8rem] py-2 font-semibold drop-shadow-md shadow-md shadow-[#9CA4AB] ${
              tab === '4' &&
              'bg-teal-gradient text-white border-none py-[0.6rem] drop-shadow-md shadow-md shadow-[#9CA4AB]'
            }`}
          >
            取扱説明書
          </button>
          <button
            onClick={() => setTab('5')}
            className={`hover:bg-teal-gradient hover:text-white text-[#534D5E] border-[2px] border-[#534D5E] hover:border-none hover:py-[0.6rem] rounded-lg w-[8rem] py-2 font-semibold drop-shadow-md shadow-md shadow-[#9CA4AB] ${
              tab === '5' &&
              'bg-teal-gradient text-white border-none py-[0.6rem] drop-shadow-md shadow-md shadow-[#9CA4AB]'
            }`}
          >
            法令対応
          </button>
        </div>
        {tab === '1' && (
          <div className='flex justify-center mt-9'>
            <div className='relative flex justify-center'>
              <div className='shadow-[#78828A_4px_5px_13px_0px] rounded-xl '>
                <Image
                  src={'/usecase1-1.png'}
                  alt='usecase1.1'
                  height={280}
                  width={280}
                />
              </div>
              <div className='shadow-[#78828A_4px_5px_13px_0px] rounded-xl relative -bottom-[7.5rem] right-[8rem]'>
                <Image
                  src={'/usecase1-2.png'}
                  alt='usecase1.1'
                  height={280}
                  width={280}
                />
              </div>
            </div>
            <div className='flex justify-center items-center flex-col w-[30%] relative top-14'>
              <p
                className='text-black text-[24px] font-bold'
                style={{
                  letterSpacing: '2.4px',
                }}
              >
                書類の検索と要約
              </p>
              <p className='text-sm mt-4'>
                電子書類の中から特定の情報や文書を効率的に検索し、要約された結果を提供します。例えば、契約書や報告書などの特定のキーワードや文脈に基づく検索が可能です。
              </p>
              <button className='transition ease-out hover:-translate-y-1 hover:scale-105 duration-300 drop-shadow-md shadow-md shadow-[#9CA4AB] rounded-lg bg-[#00ADB5] text-white text-[20px] font-semibold py-2 px-6 mt-10'>
                無料トライアル
              </button>
            </div>
          </div>
        )}
        {tab === '2' && (
          <div className='flex justify-center mt-9'>
            <div className='relative flex justify-center'>
              <div className='shadow-[#78828A_4px_5px_13px_0px] rounded-xl '>
                <Image
                  src={'/usecase2-1.png'}
                  alt='usecase2.1'
                  height={280}
                  width={280}
                />
              </div>
              <div className='shadow-[#78828A_4px_5px_13px_0px] rounded-xl relative -bottom-[7.5rem] right-[8rem]'>
                <Image
                  src={'/usecase2-2.png'}
                  alt='usecase1.1'
                  height={280}
                  width={280}
                />
              </div>
            </div>
            <div className='flex justify-center items-center flex-col w-[30%] relative top-14'>
              <p
                className={`text-black text-[24px] font-bold ${inter.className}`}
                style={{
                  letterSpacing: '2.4px',
                }}
              >
                FAQ（よくある質問）の 検索と回答
              </p>
              <p className='text-sm mt-4'>
                カスタマーセンターやサポートチームが保有するFAQ情報を検索し、迅速かつ正確な回答を提供します。ユーザーが質問を入力すると、Guide
                Botが適切な回答を提供することができます。
              </p>
              <button className='transition ease-out hover:-translate-y-1 hover:scale-105 duration-300 drop-shadow-md shadow-md shadow-[#9CA4AB] rounded-lg bg-[#00ADB5] text-white text-[20px] font-semibold py-2 px-6 mt-10'>
                無料トライアル
              </button>
            </div>
          </div>
        )}
        {tab === '3' && (
          <div className='flex justify-center mt-9'>
            <div className='relative flex justify-center'>
              <div className='shadow-[#78828A_4px_5px_13px_0px] rounded-xl '>
                <Image
                  src={'/usecase3-1.png'}
                  alt='usecase2.1'
                  height={280}
                  width={280}
                />
              </div>
              <div className='shadow-[#78828A_4px_5px_13px_0px] rounded-xl relative -bottom-[7.5rem] right-[8rem]'>
                <Image
                  src={'/usecase3-2.png'}
                  alt='usecase1.1'
                  height={280}
                  width={280}
                />
              </div>
            </div>
            <div className='flex justify-center items-center flex-col w-[30%] relative top-14'>
              <p
                className={`text-black text-[24px] font-bold ${inter.className}`}
                style={{
                  letterSpacing: '2.4px',
                }}
              >
                緊急事態対応マニュアル
              </p>
              <p className='text-sm mt-4'>
                災害や緊急事態などの状況下で、従業員が緊急時の手順や対応方法を素早く検索できるマニュアルを作成することができます。Guide
                Botを使用することで、従業員は自然な会話形式で必要な情報を簡単に入手できます。
              </p>
              <button className='transition ease-out hover:-translate-y-1 hover:scale-105 duration-300 drop-shadow-md shadow-md shadow-[#9CA4AB] rounded-lg bg-[#00ADB5] text-white text-[20px] font-semibold py-2 px-6 mt-10'>
                無料トライアル
              </button>
            </div>
          </div>
        )}
        {tab === '4' && (
          <div className='flex justify-center mt-9'>
            <div className='relative flex justify-center'>
              <div className='shadow-[#78828A_4px_5px_13px_0px] rounded-xl '>
                <Image
                  src={'/usecase4-1.png'}
                  alt='usecase2.1'
                  height={280}
                  width={280}
                />
              </div>
              <div className='shadow-[#78828A_4px_5px_13px_0px] rounded-xl relative -bottom-[7.5rem] right-[8rem]'>
                <Image
                  src={'/usecase4-2.png'}
                  alt='usecase1.1'
                  height={280}
                  width={280}
                />
              </div>
            </div>
            <div className='flex justify-center items-center flex-col w-[30%] relative top-14'>
              <p
                className={`text-black text-[24px] font-bold ${inter.className}`}
                style={{
                  letterSpacing: '2.4px',
                }}
              >
                取扱説明書
              </p>
              <p className='text-sm mt-4'>
                製品やサービスの取扱説明書を「Guide
                Bot」の学習データとして追加することで、顧客やユーザーが製品の使い方やトラブルシューティングに関する情報を簡単に検索できるようになります。
              </p>
              <button className='transition ease-out hover:-translate-y-1 hover:scale-105 duration-300 drop-shadow-md shadow-md shadow-[#9CA4AB] rounded-lg bg-[#00ADB5] text-white text-[20px] font-semibold py-2 px-6 mt-10'>
                無料トライアル
              </button>
            </div>
          </div>
        )}
        {tab === '5' && (
          <div className='flex justify-center mt-9'>
            <div className='relative flex justify-center'>
              <div className='shadow-[#78828A_4px_5px_13px_0px] rounded-xl '>
                <Image
                  src={'/usecase5-1.png'}
                  alt='usecase2.1'
                  height={280}
                  width={280}
                />
              </div>
              <div className='shadow-[#78828A_4px_5px_13px_0px] rounded-xl relative -bottom-[7.5rem] right-[8rem]'>
                <Image
                  src={'/usecase5-2.png'}
                  alt='usecase1.1'
                  height={280}
                  width={280}
                />
              </div>
            </div>
            <div className='flex justify-center items-center flex-col w-[30%] relative top-14'>
              <p
                className={`text-black text-[24px] font-bold ${inter.className}`}
                style={{
                  letterSpacing: '2.4px',
                }}
              >
                規制・法令対応の情報提供
              </p>
              <p className='text-sm mt-4'>
                特定の業界や組織が遵守すべき規制や法令に関する情報をGuide
                Botで検索できるようにすることが可能です。従業員は関連するキーワードや質問を入力し、正確な情報と遵守すべき手順を取得できます。
              </p>
              <button className='transition ease-out hover:-translate-y-1 hover:scale-105 duration-300 drop-shadow-md shadow-md shadow-[#9CA4AB] rounded-lg bg-[#00ADB5] text-white text-[20px] font-semibold py-2 px-6 mt-10'>
                無料トライアル
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default UseCaseSection
