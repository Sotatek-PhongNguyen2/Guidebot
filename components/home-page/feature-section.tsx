import FeatureCardMobile from '@/components/home-page/feature-card-mobile'
import { features } from '@/components/home-page/text'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
function FeatureSection() {
  return (
    <div
      id='features'
      className='container flex justify-center pb-[6rem] pt-[4rem] flex-col'
    >
      <div className='text-center flex justify-center flex-col items-center'>
        <h4 className='text-[20px] font-bold text-[#00ADB5] bg-red pb-1  max-w-fit mx-auto tracking-5 uppercase'>
          FEATURE
        </h4>
        <div className='h-[3px] w-[100px] rounded-full bg-[#00ADB5]'></div>
      </div>
      <div className='mt-5 hidden md:block'>
        <h5 className='text-[#06053A] text-center text-[32px] font-bold leading-[40px]'>
          Guide Botの特長
        </h5>
        <div className='flex gap-3 justify-center mt-10'>
          <div className='w-[24%] gap-2 flex flex-col justify-center items-center bg-[#34D2CC] rounded-xl px-8 py-5'>
            <p className='text-[4.125rem] text-[#44D6D0] font-bold text-stroke leading-none'>
              01
            </p>
            <p
              className={`text-[#06053A] text-[20px] ${inter.className} font-bold leading-[40px]`}
            >
              自然な会話で
            </p>
            <p
              className={`text-[#06053A] text-[20px] ${inter.className} font-bold leading-[40px]`}
            >
              電子文書を検出
            </p>
            <p className='text-[#06053A] text-[12px] leading-[18px]'>
              対話型インターフェースを備え、ユーザーは自然な会話形式で質問を入力できます。ユーザーが自然な会話形式で問合せ検索を入力できることで、従来のキーワードベースの検索に比べて柔軟性があります。
            </p>
            <p className='text-[#06053A] text-[12px] leading-[18px]'>
              また、追加の質問や対話にも対応することで、ユーザーとの対話型の体験を提供し、より具体的な情報を提供できます。
            </p>
          </div>
          <div className='w-[24%] gap-2 flex flex-col justify-center items-center bg-[#34D2CC] rounded-xl px-8 py-5 relative top-11 '>
            <p className='text-[4.125rem] text-[#44D6D0] font-bold text-stroke leading-none'>
              02
            </p>
            <p
              className={`text-[#06053A] text-[20px] ${inter.className} font-bold leading-[40px]`}
            >
              高速な情報抽出で
            </p>
            <p
              className={`text-[#06053A] text-[20px] ${inter.className} font-bold leading-[40px]`}
            >
              電子文書を検出
            </p>
            <p className='text-[#06053A] text-[12px] leading-[18px]'>
              リアルタイム回答機能により迅速・正確な回答を提供するため、一般的なチャットボットよりも優れた検索結果を提供します。
            </p>
            <p className='text-[#06053A] text-[12px] leading-[18px]'>
              高度な自然言語処理機能により、ユーザーの複雑な質問入力にも対応し、正確な検索結果を提供します。
            </p>
          </div>
          <div className='w-[24%] gap-2 flex flex-col justify-between items-center bg-[#34D2CC] rounded-xl px-8 py-5'>
            <p className='text-[4.125rem] text-[#44D6D0] font-bold text-stroke leading-none'>
              03
            </p>
            <p
              className={`text-[#06053A] text-[20px] ${inter.className} font-bold leading-[40px]`}
            >
              高いカスタマイズ性
            </p>

            <div>
              <p className='text-[#06053A] text-[12px] leading-[18px]'>
                カスタマイズ性が高く、ユーザーは検索のパラメータや挙動を柔軟に設定できます。管理者がカスタマイズ可能なデータを「Guide
                Bot」に学習させることで、独自の検索データベースを構築できます。
              </p>
              <p className='text-[#06053A] text-[12px] leading-[18px]'>
                今後はユーザーのニーズに応じて、新たな機能の追加・アップデートを予定しています。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center mt-[10rem] hidden md:block'>
        <button className='transition ease-out hover:-translate-y-1 hover:scale-105 duration-300 bg-teal text-[20px] py-2 px-4 text-white font-semibold rounded-lg drop-shadow-md shadow-md shadow-[#9CA4AB]'>
          無料トライアル受付中
        </button>
      </div>

      {/* feature section on mobile */}
      <div className='mt-5 md:hidden'>
        <h5 className='text-[#06053A] text-center text-base font-bold leading-[20px]'>
          Guide Botの特長
        </h5>
        <div className='flex flex-col gap-4'>
          {features.map((feature, index) => (
            <FeatureCardMobile
              index={index + 1}
              feature={feature}
              key={feature.title}
              className='mt-10'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeatureSection
