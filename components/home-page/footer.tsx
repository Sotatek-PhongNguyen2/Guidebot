const inter = Inter({ subsets: ['latin'] })
import React from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { BiChevronRight } from 'react-icons/bi'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
function Footer() {
  return (
    <footer className='bg-[#1B273D]'>
      <div className='flex flex-col px-4 md:flex-row md:px-0 container py-8  gap-4'>
        <div className='flex flex-col gap-5  w-[30%]'>
          <p className={`${inter.className} text-white text-[20px] font-bold`}>
            GuideBot
          </p>
          <div className='hidden md:block'>
            <Sheet>
              <SheetTrigger asChild>
                <p className='text-white font-normal mb-3 hover:text-[#34D2CC] cursor-pointer'>
                  Terms of use
                </p>
              </SheetTrigger>
              <SheetContent
                className='h-[90%] bg-white container overflow-y-scroll'
                side={'bottom'}
              >
                <SheetHeader>
                  <SheetTitle className='text-[1.5rem] md:text-[2rem] text-center'>
                    利用規約に関して
                  </SheetTitle>
                </SheetHeader>
                <ContentOfTerms />
              </SheetContent>
            </Sheet>
            <p className='text-white font-normal '>Follow on social service</p>

            <Image src={'/fb.svg'} height={25} width={25} alt='fb' />
          </div>
        </div>
        <div className='flex justify-center flex-col gap-7 w-full md:w-[70%]'>
          <div className='flex flex-col md:flex-row w-full gap-10'>
            <a className='group w-full' href=''>
              <div className='w-full border-b-[1.5px] border-white group-hover:border-[#34D2CC] pb-3 flex items-center justify-between'>
                <p className='font-medium text-white group-hover:text-[#34D2CC]'>
                  運用会社
                </p>
                <span className='text-[1.4rem] group-hover:text-[#34D2CC] text-white'>
                  <BiChevronRight />
                </span>
              </div>
            </a>
            <a className='group w-full' href=''>
              <div className='w-full border-b-[1.5px] border-white group-hover:border-[#34D2CC] pb-3 flex items-center justify-between'>
                <p className='font-medium text-white group-hover:text-[#34D2CC]'>
                  個人情報保護方針
                </p>
                <span className='text-[1.4rem] group-hover:text-[#34D2CC] text-white'>
                  <BiChevronRight />
                </span>
              </div>
            </a>
            <a className='group w-full' href=''>
              <div className='w-full border-b-[1.5px] border-white group-hover:border-[#34D2CC] pb-3 flex items-center justify-between'>
                <p className='font-medium text-white group-hover:text-[#34D2CC]'>
                  お問い合わせ
                </p>
                <span className='text-[1.4rem] group-hover:text-[#34D2CC] text-white'>
                  <BiChevronRight />
                </span>
              </div>
            </a>
          </div>
          <div></div>
          <p className='hidden md:block text-white text-[13px] text-right'>
            Copyright 2023@ all right
          </p>
        </div>
      </div>
      <div className='block md:hidden bg-black text-center py-2'>
        <Sheet>
          <SheetTrigger asChild>
            <p className='text-white font-normal mb-1 hover:text-[#34D2CC] cursor-pointer text-sm'>
              Terms of use
            </p>
          </SheetTrigger>
          <SheetContent
            className='h-[90%] bg-white container overflow-y-scroll'
            side={'bottom'}
          >
            <SheetHeader>
              <SheetTitle className='text-[1.5rem] md:text-[2rem] text-center'>
                利用規約に関して
              </SheetTitle>
            </SheetHeader>
            <ContentOfTerms />
          </SheetContent>
        </Sheet>
        <p className=' text-white text-[13px] text-center'>
          Copyright 2023@ all right
        </p>
      </div>
    </footer>
  )
}

const ContentOfTerms = () => {
  return (
    <div className='grid gap-4 py-4'>
      <div className='flex flex-col'>
        <h4 className='text-[#495057] font-bold text-[1rem] md:text-[1.5rem]'>1. 定義</h4>
        <p className='text-sm md:text-lg text-[#343a40]'>
          1.1.
          「コンテンツ」とは、文章、音声、音楽、画像、動画、アニメーション、ソフトウェア、プログラム、コードその他の情報のことをいいます。
        </p>
        <p className='text-sm md:text-lg text-[#343a40]'>
          1.2.
          「本コンテンツ」とは、本サービスを通じてアクセスすることができるコンテンツのことをいいます。
        </p>
        <p className='text-sm md:text-lg text-[#343a40]'>
          1.3.
          「個別利用規約」とは、本サービスに関して、本規約とは別に「規約」、「ガイドライン」、「ポリシー」などの名称で当社が配布または掲示している文書のことをいいます。
        </p>
      </div>
      <div className='flex flex-col'>
        <h4 className='text-[#495057] font-bold text-[1rem] md:text-[1.5rem]'>
          2. 規約への同意
        </h4>
        <p className='text-sm md:text-lg text-[#343a40]'>
          2.1
          ユーザは、本規約の定めに従って本サービスを利用しなければなりません。ユーザは、本規約に有効かつ取消不能な同意をしないかぎり本サービスを利用できません。
        </p>
        <p className='text-sm md:text-lg text-[#343a40]'>
          2.2.ユーザが未成年者である場合は、親権者など法定代理人の同意を得たうえで本サービスを利用してください。また、ユーザが本サービスを事業者のために利用する場合は、当該事業者も本規約に同意したうえで本サービスを利用してください。
        </p>
        <p className='text-sm md:text-lg text-[#343a40]'>
          2.3.ユーザは、本サービスを実際に利用することによって本規約に有効かつ取消不能な同意をしたものとみなされます。
        </p>
        <p className='text-sm md:text-lg text-[#343a40]'>
          2.4.
          本サービスにおいて個別利用規約がある場合、ユーザは、本規約のほか個別利用規約の定めにも従って本サービスを利用しなければなりません。
        </p>
      </div>
      <div className='flex flex-col'>
        <h4 className='text-[#495057] font-bold text-[1rem] md:text-[1.5rem]'>
          3. 規約の変更
        </h4>
        <p className='text-sm md:text-lg text-[#343a40]'>
          当社は、当社が必要と判断する場合、あらかじめユーザに通知することなく、いつでも、本規約および個別利用規約を変更できるものとします。変更後の本規約および個別利用規約は、当社が運営するウェブサイト内の適宜の場所に掲示された時点からその効力を生じるものとし、ユーザは本規約および個別利用規約の変更後も本サービスを使い続けることにより、変更後の本規約および適用のある個別利用規約に対する有効かつ取消不能な同意をしたものとみなされます。かかる変更の内容を個別に通知することはいたしかねますので、本サービスをご利用の際には、随時、最新の本規約および適用のある個別利用規約をご参照ください。
        </p>
      </div>
      <div className='flex flex-col'>
        <h4 className='text-[#495057] font-bold text-[1rem] md:text-[1.5rem]'>
          4. アカウント
        </h4>
        <p className='text-sm md:text-lg text-[#343a40]'>
          4.1.
          ユーザは、本サービスの利用に際してユーザご自身に関する情報を登録する場合、真実、正確かつ完全な情報を提供しなければならず、常に最新の情報となるよう修正しなければなりません。
        </p>
        <p className='text-sm md:text-lg text-[#343a40]'>
          4.2.
          本サービスに登録したユーザは、いつでもアカウントを削除して退会することができます。
        </p>
        <p className='text-sm md:text-lg text-[#343a40]'>
          4.3当社は、ユーザが本規約に違反しまたは違反するおそれがあると認めた場合、あらかじめユーザに通知することなく、アカウントを停止または削除することができます。
        </p>
        <p className='text-sm md:text-lg text-[#343a40]'>
          4.4.
          当社は、最終のアクセスから１年間以上経過しているアカウントを、あらかじめユーザに通知することなく削除することができます。
        </p>
        <p className='text-sm md:text-lg text-[#343a40]'>
          4.5.
          ユーザの本サービスにおけるすべての利用権は、理由を問わず、アカウントが削除された時点で消滅します。ユーザが誤ってアカウントを削除した場合であっても、アカウントの復旧はできませんのでご注意ください。
        </p>
        <p className='text-sm md:text-lg text-[#343a40]'>
          4.6.
          本サービスのアカウントは、ユーザに一身専属的に帰属します。ユーザの本サービスにおけるすべての利用権は、第三者に譲渡、貸与または相続させることはできません。
        </p>
      </div>
      <div className='flex flex-col'>
        <h4 className='text-[#495057] font-bold text-[1rem] md:text-[1.5rem]'>
          5.　プライバシー
        </h4>
        <p className='text-sm md:text-lg text-[#343a40]'>
          5.1. 当社は、ユーザのプライバシーを尊重しています。
        </p>
        <p className='text-sm md:text-lg text-[#343a40]'>
          5.2. 当社は、ユーザのプライバシー情報と個人情報を、SELF
          プライバシーポリシーに従って適切に取り扱います。
        </p>
        <p className='text-sm md:text-lg text-[#343a40]'>
          5.3.当社は、ユーザから収集した情報を安全に管理するため、セキュリティに最大限の注意を払っています。
        </p>
      </div>
    </div>
  )
}

export default Footer
