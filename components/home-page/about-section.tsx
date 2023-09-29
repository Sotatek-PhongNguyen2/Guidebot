import Image from "next/image"

function AboutSection() {
  return (
    <div id="about" className='container flex justify-center py-[4rem] md:py-[8rem] flex-col '>
      <div className='text-center flex justify-center flex-col items-center'>
        <h4 className='text-[20px] font-bold text-[#00ADB5] bg-red pb-1  max-w-fit mx-auto tracking-5 uppercase'>
          ABOUT
        </h4>
        <div className='h-[3px] w-[100px] rounded-full bg-[#00ADB5]'></div>
      </div>
      <div className='mt-5'>
        <h5 className='text-[#06053A] text-center text-[32px] font-bold leading-[40px]'>
          Guide Botとは？
        </h5>
        <div className='flex flex-col md:flex-row items-center justify-center md:items-end'>
          <Image src='/laptop1.png' alt='laptop' width={477} height={340} />
          <div className='md:w-[37%] md:mb-9 ml-4 '>
            <div className='whitespace-nowrap itext-[#06053A] font-bold text-[27px] leading-[40px] mb-4 flex flex-col items-center lg:flex-row md:gap-2'>
              <p>Guide Botで</p>
              <p>電子文書検索が簡単に！</p>
            </div>
            <div className='px-16 md:px-0 text-[#06053A] text-[16px] leading-[30px] font-normal'>
              <p>
                当社はAzure
                OpenAIのAPIを活用した電子書類検索チャットボット「Guide
                Bot」を開発しました。
              </p>
              <p>
                この製品は、自然言語処理と機械学習の技術を組み合わせ、ユーザーが電子書類の中から特定の情報を効率的に検索できる革新的なソリューションです。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
