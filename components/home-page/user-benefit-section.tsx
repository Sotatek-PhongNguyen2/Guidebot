function UserBenefitSection() {
  return (
    <div className='container flex justify-center pt-[12rem] pb-[6rem] flex-col px-4'>
      <div className='text-center flex justify-center flex-col items-center'>
        <h4 className='text-[20px] font-bold text-[#00ADB5] bg-red pb-1  max-w-fit mx-auto tracking-5 uppercase'>
          USER BENEFIT
        </h4>
        <div className='h-[3px] w-[100px] rounded-full bg-[#00ADB5]'></div>
      </div>
      <div className='mt-5 flex flex-col gap-9'>
        <h5 className='text-[#000] text-center text-[24px] font-bold leading-[30px]'>
          業務効率向上の鍵は、コミュニケーションや情報共有方法の改善
        </h5>
        <div>
          <p className='text-[#000] text-center '>
            Guide
            Botの目的は、ユーザーが膨大な電子書類の中から必要な情報を迅速かつ正確に見つけることです。
          </p>
          <p className='text-[#000] text-center'>
            情報収集の効率化や作業時間の短縮を実現し、ユーザーの業務効率と生産性の向上を支援します。
          </p>
        </div>
        <div className=' md:w-[60%] mx-auto text-center gap-9 flex flex-col'>
          <p className='h-[87px] md:h-[50px] text-[14px] font-bold bg-[#F0F2F3] px-[2rem] md:px-[5rem] flex items-center  justify-center rounded-2xl'>
            効率的な問い合わせ対応や情報共有の実現による
            社員の業務効率・生産性向上
          </p>
          <p className='h-[87px] md:h-[50px] text-[14px] font-bold bg-[#F0F2F3] px-[2rem] md:px-[5rem] flex items-center  justify-center rounded-2xl'>
            自動化された回答やFAQ機能の活用により、社員の負担を軽減。
            貴重な人的リソースを他の重要な業務に割り当てることができる
          </p>
          <p className='h-[87px] md:h-[50px] text-[14px] font-bold bg-[#F0F2F3] px-[2rem] md:px-[5rem] flex items-center  justify-center rounded-2xl'>
            人件費やコミュニケーションツールのコスト削減
          </p>
          <p className='h-[87px] md:h-[50px] text-[14px] font-bold bg-[#F0F2F3] px-[2rem] md:px-[5rem] flex items-center  justify-center rounded-2xl'>
            一貫した回答の提供による
            正確な情報の共有や、顧客サービスの向上につながる
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserBenefitSection
