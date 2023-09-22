import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <div className='bg-red intro-bg w-full min-h-[55vh]'>
        <div className='container mx-auto pt-10 relative'>
          <nav className='flex bg-white bg-opacity-[68%] rounded-[30px] items-center px-12 justify-between'>
            <p className='font-bold text-lg'>Guide Bot logo</p>
            <div className='flex '>
              <div className='flex'>
                <a
                  className='px-4 py-[24px] hover:bg-white text-[14px]'
                  href='#'
                >
                  Guide Botとは
                </a>
                <a
                  className='px-4 py-[24px] hover:bg-white text-[14px]'
                  href='#'
                >
                  特長
                </a>
                <a
                  className='px-4 py-[24px] hover:bg-white text-[14px]'
                  href='#'
                >
                  活用シーン
                </a>
                <a
                  className='px-4 py-[24px] hover:bg-white text-[14px]'
                  href='#'
                >
                  導入事例
                </a>
                <a
                  className='px-4 py-[24px] hover:bg-white text-[14px]'
                  href='#'
                >
                  料金プラン
                </a>
              </div>
              <div className='ml-5 flex items-center'>
                <button className='bg-[#F5F5F5] rounded-[16px] px-6 py-[11px] text-[14px] font-bold btn-teal text-white mr-3'>
                  資料ダウンロード
                </button>
                <button className=' bg-[#1B2559] rounded-[16px] px-[38px] py-[11px] text-[14px] font-bold text-white'>
                  お問い合わせ
                </button>
              </div>
            </div>
          </nav>
          <div className='text-white mt-[5rem]'>
            <h2 className='text-4xl font-bold leading-[60px]'>バックオフィスの</h2>
            <h2 className='text-4xl font-bold leading-[60px]'>業務効率を向上させる</h2>
            <h2 className='text-4xl font-bold leading-[60px]'>DXツール</h2>
          </div>
          <div className='bg-white rounded-xl px-12 flex justify-between -bottom-[13rem] absolute shadow-lg left-0 right-0'>
            <a className='px-6 py-[30px] text-[14px] font-normal' href='#'>導入企業ロゴ</a>
            <a className='px-6 py-[30px] text-[14px] font-normal' href='#'>導入企業ロゴ</a>
            <a className='px-6 py-[30px] text-[14px] font-normal' href='#'>導入企業ロゴ</a>
            <a className='px-6 py-[30px] text-[14px] font-normal' href='#'>導入企業ロゴ</a>
            <a className='px-6 py-[30px] text-[14px] font-normal' href='#'>導入企業ロゴ</a>
            <a className='px-6 py-[30px] text-[14px] font-normal' href='#'>導入企業ロゴ</a>
          </div>
        </div>
      </div>
    </main>
  )
}
