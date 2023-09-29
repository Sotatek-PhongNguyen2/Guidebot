'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
function CaseStudySection() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1.5,
      spacing: 15,
      origin: 'center',
    },
    initial: 1,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })
  return (
    <div
      id='casestudy'
      className='container flex justify-center pb-[4rem] pt-[1rem] flex-col'
    >
      <div className='text-center flex justify-center flex-col items-center'>
        <h4 className='text-[20px] font-bold text-[#00ADB5] bg-red pb-1  max-w-fit mx-auto tracking-5 uppercase'>
          CASE STUDY
        </h4>
        <div className='h-[3px] w-[100px] rounded-full bg-[#00ADB5]'></div>
      </div>
      <div className='mt-5'>
        <h5 className='text-[#06053A] text-center text-[32px] font-bold leading-[40px]'>
          導入事例
        </h5>
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
        <div className='block md:hidden'>
          <div ref={sliderRef} className='keen-slider'>
            <div className='keen-slider__slide py-3 shadow-xl'>
              <div className='rounded-xl px-4 py-6 shadow-lg flex flex-col justify-between'>
                <Image
                  src={'/casestudy1.png'}
                  alt='case1'
                  height={180}
                  width={700}
                />
                <p className='text-[#190D30] text-xs font-bold mt-5'>
                  ヘルプセンターでのGuide Bot導入後、顧客満足度が向上！
                </p>
                <p className='text-[#6A6B6C] mt-5 text-[10px] font-medium'>
                  Guide
                  Bot導入後、迅速・正確なサポートが提供され、顧客満足度が向上しました
                </p>
                <div className='mt-5 flex items-center justify-between'>
                  <div className='flex items-center'>
                    <div className='w-[28px] h-[28px] bg-[#D9D9D9] rounded-full border border-[#3D246C] mr-2'></div>
                    <div>
                      <p className='text-[#190D330] text-[10px] font-medium'>
                        企業名スペース
                      </p>
                      <p className='text-[#6A6B6C] text-[7px] font-medium'>
                        企業名スペース
                      </p>
                    </div>
                  </div>
                  <button className='bg-[#00ADB5] text-white rounded-lg py-2 px-4 font-semibold  border-[2px] border-white hover:bg-transparent hover:text-black hover:border-[#534D5E] text-[11px]'>
                    ライトプラン
                  </button>
                </div>
              </div>
            </div>
            <div className='keen-slider__slide py-3 shadow-xl'>
              <div className='rounded-xl px-4 py-6 shadow-lg flex flex-col justify-between'>
                <Image
                  src={'/casestudy2.png'}
                  alt='case1'
                  height={180}
                  width={700}
                />
                <p className='text-[#190D30] text-xs font-bold mt-5'>
                  社内の問い合わせ対応にGuideBotを活用し、業務効率が向上！
                </p>
                <p className='text-[#6A6B6C] mt-5 text-[10px] font-medium'>
                  導入により社内問い合わせ対応の効率が向上し、人的リソースを大幅に削減することができました
                </p>
                <div className='mt-5 flex items-center justify-between'>
                  <div className='flex items-center'>
                    <div className='w-[28px] h-[28px] bg-[#D9D9D9] rounded-full border border-[#3D246C] mr-2'></div>
                    <div>
                      <p className='text-[#190D330] text-[10px] font-medium'>
                        企業名スペース
                      </p>
                      <p className='text-[#6A6B6C] text-[7px] font-medium'>
                        企業名スペース
                      </p>
                    </div>
                  </div>
                  <button className='bg-[#00ADB5] text-white rounded-lg py-2 px-4 font-semibold  border-[2px] border-white hover:bg-transparent hover:text-black hover:border-[#534D5E] text-[11px]'>
                    ライトプラン
                  </button>
                </div>
              </div>
            </div>
            <div className='keen-slider__slide py-3 shadow-xl'>
              <div className='rounded-xl px-4 py-6 shadow-lg flex flex-col justify-between'>
                <Image
                  src={'/casestudy3.png'}
                  alt='case1'
                  height={180}
                  width={700}
                />
                <p className='text-[#190D30] text-xs font-bold mt-5'>
                  教育機関でのGuide
                  Bot採用後、関連性の高い情報の検索時間を大幅短縮！
                </p>
                <p className='text-[#6A6B6C] mt-5 text-[10px] font-medium'>
                  教育機関が当製品を採用し、関連情報の迅速な検索が可能になりました
                </p>
                <div className='mt-5 flex items-center justify-between'>
                  <div className='flex items-center'>
                    <div className='w-[28px] h-[28px] bg-[#D9D9D9] rounded-full border border-[#3D246C] mr-2'></div>
                    <div>
                      <p className='text-[#190D330] text-[10px] font-medium'>
                        企業名スペース
                      </p>
                      <p className='text-[#6A6B6C] text-[7px] font-medium'>
                        企業名スペース
                      </p>
                    </div>
                  </div>
                  <button className='bg-[#00ADB5] text-white rounded-lg py-2 px-4 font-semibold border-[2px] border-white hover:bg-transparent hover:text-black hover:border-[#534D5E] text-[11px]'>
                    ライトプラン
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center gap-6 mt-6'>
            {[0, 1, 2].map((idx) => {
              return (
                <div
                  key={idx}
                  className='rotate-[30deg] w-7 h-7 rounded-full p-[2px] flex justify-center items-center bg-gradient-to-r from-[#e2e8f0] via-[#A6ABBD] to-[#e2e8f0]'
                >
                  <button
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx)
                      setCurrentSlide(idx)
                    }}
                    className={
                      'w-[95%] h-[95%] rounded-full bg-white' +
                      (currentSlide === idx ? ' bg-teal' : '')
                    }
                  ></button>
                </div>
              )
            })}
          </div>
        </div>
        <div className='hidden md:flex gap-6 justify-center mt-5'>
          <div className='w-[25%] rounded-xl px-4 py-8 shadow-lg'>
            <Image
              src={'/casestudy1.png'}
              alt='case1'
              height={180}
              width={700}
            />
            <p className='text-[#190D30] text-sm font-bold mt-5'>
              ヘルプセンターでのGuide Bot導入後、顧客満足度が向上！
            </p>
            <p className='text-[#6A6B6C] mt-5 text-[10px] font-medium'>
              Guide
              Bot導入後、迅速・正確なサポートが提供され、顧客満足度が向上しました
            </p>
            <div className='mt-5 flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='w-[28px] h-[28px] bg-[#D9D9D9] rounded-full border border-[#3D246C] mr-2'></div>
                <div>
                  <p className='text-[#190D330] text-[10px] font-medium'>
                    企業名スペース
                  </p>
                  <p className='text-[#6A6B6C] text-[7px] font-medium'>
                    企業名スペース
                  </p>
                </div>
              </div>
              <button className='bg-[#00ADB5] border-[2px] border-white hover:bg-transparent hover:text-black hover:border-[#534D5E] text-white rounded-lg py-2 px-4 font-semibold text-[11px]'>
                ライトプラン
              </button>
            </div>
          </div>
          <div className='w-[25%] rounded-xl px-4 py-8 shadow-lg'>
            <Image
              src={'/casestudy2.png'}
              alt='case1'
              height={180}
              width={700}
            />
            <p className='text-[#190D30] text-sm font-bold mt-5'>
              社内の問い合わせ対応にGuideBotを活用し、業務効率が向上！
            </p>
            <p className='text-[#6A6B6C] mt-5 text-[10px] font-medium'>
              導入により社内問い合わせ対応の効率が向上し、人的リソースを大幅に削減することができました
            </p>
            <div className='mt-5 flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='w-[28px] h-[28px] bg-[#D9D9D9] rounded-full border border-[#3D246C] mr-2'></div>
                <div>
                  <p className='text-[#190D330] text-[10px] font-medium'>
                    企業名スペース
                  </p>
                  <p className='text-[#6A6B6C] text-[7px] font-medium'>
                    企業名スペース
                  </p>
                </div>
              </div>
              <button className='bg-[#00ADB5] border-[2px] border-white hover:bg-transparent hover:text-black hover:border-[#534D5E] text-white rounded-lg py-2 px-4 font-semibold text-[11px]'>
                ライトプラン
              </button>
            </div>
          </div>
          <div className='w-[25%] rounded-xl px-4 py-8 shadow-lg'>
            <Image
              src={'/casestudy3.png'}
              alt='case1'
              height={180}
              width={700}
            />
            <p className='text-[#190D30] text-sm font-bold mt-5'>
              教育機関でのGuide
              Bot採用後、関連性の高い情報の検索時間を大幅短縮！
            </p>
            <p className='text-[#6A6B6C] mt-5 text-[10px] font-medium'>
              教育機関が当製品を採用し、関連情報の迅速な検索が可能になりました
            </p>
            <div className='mt-5 flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='w-[28px] h-[28px] bg-[#D9D9D9] rounded-full border border-[#3D246C] mr-2'></div>
                <div>
                  <p className='text-[#190D330] text-[10px] font-medium'>
                    企業名スペース
                  </p>
                  <p className='text-[#6A6B6C] text-[7px] font-medium'>
                    企業名スペース
                  </p>
                </div>
              </div>
              <button className='bg-[#00ADB5] border-[2px] border-white hover:bg-transparent hover:text-black hover:border-[#534D5E] text-white rounded-lg py-2 px-4 font-semibold text-[11px]'>
                ライトプラン
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudySection
