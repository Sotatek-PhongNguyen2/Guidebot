import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React from 'react'
function ContactSection() {
  return (
    <div className='bg-[#D0D0D0]'>
      <div className='container flex justify-center pb-[5rem] pt-[4rem] flex-col'>
        <div className='text-center flex justify-center flex-col items-center'>
          <h4 className='text-[20px] font-bold text-[#00ADB5] bg-red pb-1  max-w-fit mx-auto tracking-5 uppercase'>
            CONTACT
          </h4>
          <div className='h-[3px] w-[100px] rounded-full bg-[#00ADB5]'></div>
        </div>
        <div className='mt-5'>
          <h5 className='text-[#06053A] text-center text-[32px] font-bold leading-[40px]'>
            お問い合わせ
          </h5>
          <div className='mt-8 flex flex-col gap-6 items-center px-4 md:px-0'>
            <div className='grid w-full max-w-xl items-center gap-1.5'>
              <Label
                className='text-[#06053A] text-[12px] font-bold'
                htmlFor='email'
              >
                貴社名
              </Label>
              <Input
                className='rounded-sm'
                type='email'
                id='email'
                placeholder='貴社名を入力してください'
              />
            </div>
            <div className='grid w-full max-w-xl items-center gap-1.5'>
              <Label
                className='text-[#06053A] text-[12px] font-bold'
                htmlFor='email'
              >
                担当者名
              </Label>
              <Input
                className='rounded-sm'
                type='email'
                id='email'
                placeholder='担当者名を入力してください'
              />
            </div>
            <div className='grid w-full max-w-xl items-center gap-1.5'>
              <div className='flex items-center justify-between'>
                <Label
                  className='text-[#06053A] text-[12px] font-bold'
                  htmlFor='email'
                >
                  電話番号
                </Label>
                <p className='text-[#666666] text-xs'>ハイフンなし</p>
              </div>
              <Input
                className='rounded-sm'
                type='email'
                id='email'
                placeholder='電話番号を入力してください'
              />
            </div>
            <div className='grid w-full max-w-xl items-center gap-1.5'>
              <Label
                className='text-[#06053A] text-[12px] font-bold'
                htmlFor='email'
              >
                メールアドレス
              </Label>
              <Input
                className='rounded-sm'
                type='email'
                id='email'
                placeholder='メールアドレスを入力してください'
              />
            </div>
            <div className='grid w-full max-w-xl items-center gap-1.5'>
              <Label
                className='text-[#06053A] text-[12px] font-bold'
                htmlFor='email'
              >
                電話番号
              </Label>
              <Select>
                <SelectTrigger className='max-w-xl bg-white text-[#AAA]'>
                  <SelectValue placeholder='情報収集' />
                </SelectTrigger>
                <SelectContent className=' bg-white text-[#AAA]'>
                  <SelectGroup>
                    <SelectLabel>情報収集</SelectLabel>
                    <SelectItem value='test'>情報収集</SelectItem>
                    <SelectItem value='test1'>情報収集</SelectItem>
                    <SelectItem value='test2'>情報収集</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className='flex items-center space-x-2 mt-4'>
              <Checkbox id='terms' className='text-black border-black' />
              <label
                htmlFor='terms'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                プライバシーポリシーに同意する
              </label>
            </div>
            <button className='transition ease-out hover:-translate-y-1 hover:scale-105 duration-300 mt-4 bg-teal rounded-sm py-2 px-20 text-sm text-white font-bold'>
              資料ダウンロード
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
