"use client";
import FeatureCardMobile from "@/components/home-page/feature-card-mobile";
import { features } from "@/components/home-page/feature-text";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { BiSolidCheckCircle } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineChat } from "react-icons/hi";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const [tab, setTab] = useState("1");
  return (
    <main className=" min-h-screen">
      {/* TODO: remove hidden class later */}
      <div className="intro-bg w-full h-[537px] hidden">
        <div className="container mx-auto pt-10 relative">
          <nav className="flex bg-white bg-opacity-[68%] rounded-[30px] items-center px-12 justify-between">
            <p className="font-bold text-lg">Guide Bot logo</p>
            <div className="flex ">
              <div className="flex">
                <a
                  className="px-4 py-[24px] hover:bg-white text-[14px]"
                  href="#"
                >
                  Guide Botとは
                </a>
                <a
                  className="px-4 py-[24px] hover:bg-white text-[14px]"
                  href="#"
                >
                  特長
                </a>
                <a
                  className="px-4 py-[24px] hover:bg-white text-[14px]"
                  href="#"
                >
                  活用シーン
                </a>
                <a
                  className="px-4 py-[24px] hover:bg-white text-[14px]"
                  href="#"
                >
                  導入事例
                </a>
                <a
                  className="px-4 py-[24px] hover:bg-white text-[14px]"
                  href="#"
                >
                  料金プラン
                </a>
              </div>
              <div className="ml-5 flex items-center">
                <button className="bg-[#F5F5F5] rounded-[16px] px-6 py-[11px] text-[14px] font-bold bg-teal text-white mr-3">
                  資料ダウンロード
                </button>
                <button className=" bg-[#1B2559] rounded-[16px] px-[38px] py-[11px] text-[14px] font-bold text-white">
                  お問い合わせ
                </button>
              </div>
            </div>
          </nav>
          <div className="text-white mt-[5rem]">
            <h2 className="text-4xl font-bold leading-[60px]">
              バックオフィスの
            </h2>
            <h2 className="text-4xl font-bold leading-[60px]">
              業務効率を向上させる
            </h2>
            <h2 className="text-4xl font-bold leading-[60px]">DXツール</h2>
          </div>
          <div className="bg-white rounded-xl px-12 py-[1.5rem] flex justify-between -bottom-[55%] absolute shadow-lg left-0 right-0">
            <a
              className="px-6 py-[10px] text-[14px] font-normal bg-[#F5F5F5]"
              href="#"
            >
              導入企業ロゴ
            </a>
            <a
              className="px-6 py-[10px] text-[14px] font-normal bg-[#F5F5F5]"
              href="#"
            >
              導入企業ロゴ
            </a>
            <a
              className="px-6 py-[10px] text-[14px] font-normal bg-[#F5F5F5]"
              href="#"
            >
              導入企業ロゴ
            </a>
            <a
              className="px-6 py-[10px] text-[14px] font-normal bg-[#F5F5F5]"
              href="#"
            >
              導入企業ロゴ
            </a>
            <a
              className="px-6 py-[10px] text-[14px] font-normal bg-[#F5F5F5]"
              href="#"
            >
              導入企業ロゴ
            </a>
            <a
              className="px-6 py-[10px] text-[14px] font-normal bg-[#F5F5F5]"
              href="#"
            >
              導入企業ロゴ
            </a>
          </div>
        </div>
      </div>
      {/* ============Aboutsiu=================== */}
      <div className="container flex justify-center py-[8rem] flex-col ">
        <div className="text-center flex justify-center flex-col items-center">
          <h4 className="text-[20px] font-bold text-[#00ADB5] bg-red pb-1  max-w-fit mx-auto tracking-5 uppercase">
            ABOUT
          </h4>
          <div className="h-[3px] w-[100px] rounded-full bg-[#00ADB5]"></div>
        </div>
        <div className="mt-5">
          <h5 className="text-[#06053A] text-center text-[32px] font-bold leading-[40px]">
            Guide Botとは？
          </h5>
          <div className="flex flex-col md:flex-row items-center justify-center md:items-end">
            <Image src="/laptop1.png" alt="laptop" width={477} height={340} />
            <div className="md:w-[37%] md:mb-9 ml-4 ">
              <div className="whitespace-nowrap itext-[#06053A] font-bold text-[27px] leading-[40px] mb-4 flex flex-col items-center lg:flex-row md:gap-2">
                <p>Guide Botで</p>
                <p>電子文書検索が簡単に！</p>
              </div>
              <div className="px-16 md:px-0 text-[#06053A] text-[16px] leading-[30px] font-normal">
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
      {/* =================Cdgsiu================= */}
      <div className="bg-[#06053A] border-none">
        <div className="relative container py-32 md:pt-11 md:py-11 px-8 flex flex-col md:flex-row justify-center items-center gap-14">
          <div className="w-0 h-0 absolute top-0 md:hidden border-l-[10rem] border-l-transparent border-t-[4rem] border-t-white border-r-[10rem] border-r-transparent"></div>
          <div className="md:w-[38%] mb-9">
            <p className="text-white font-bold text-[24px] leading-[36px] mb-8 mx-8 md:mx-0 text-center md:text-start">
              書類管理業務の負担や人的リソース不足にお悩みではありませんか？
            </p>
            {/* 3 bubble, md:hidden */}
            <div className="flex gap-10 items-center justify-center mb-8 md:hidden">
              <div className="flex gap-16 flex-col">
                <div className="relative w-[194px] h-[194px] bg-white rounded-full flex justify-center items-center px-10">
                  <p className="font-bold leading-[30px] text-[#06053A]">
                    書類管理作業の 負担が大きく 業務に影響する
                  </p>
                  <div className="-top-[13px] -left-[13px] absolute h-[75px] w-[75px] bg-teal rounded-full flex justify-center items-center">
                    <span className="font-bold text-[2.5rem] text-white">
                      <HiOutlineChat />
                    </span>
                  </div>
                </div>
                <div className="relative w-[194px] h-[194px] bg-white rounded-full flex justify-center items-center px-10">
                  <p className="font-bold leading-[30px] text-[#06053A]">
                    書類管理作業の 負担が大きく 業務に影響する
                  </p>
                  <div className="-top-[13px] -left-[13px] absolute h-[75px] w-[75px] bg-teal rounded-full flex justify-center items-center">
                    <span className="font-bold text-[2.5rem] text-white">
                      <HiOutlineChat />
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative w-[194px] h-[194px] bg-white rounded-full flex justify-center items-center px-10">
                <p className="font-bold leading-[30px] text-[#06053A]">
                  書類管理作業の 負担が大きく 業務に影響する
                </p>
                <div className="-top-[13px] -left-[13px] absolute h-[75px] w-[75px] bg-teal rounded-full flex justify-center items-center">
                  <span className="font-bold text-[2.5rem] text-white">
                    <HiOutlineChat />
                  </span>
                </div>
              </div>
            </div>
            <div className="text-white text-[14px] leading-[40px] font-medium mx-8 md:mx-0">
              <p>
                現代企業では常に、情報共有や問い合わせへの迅速な対応が求められます。
              </p>
              <p>
                電子書類の検索と情報収集のプロセスにおける課題として、媒体管理における従来の手段には限界があり、大量の文書から特定の情報を見つけるのに時間と労力がかかるという声が多くありました。
              </p>
            </div>
          </div>
          {/* 3 bubble, md screen visible */}
          <div className="md:flex gap-10 items-center hidden">
            <div className="flex gap-16 flex-col">
              <div className="relative w-[194px] h-[194px] bg-white rounded-full flex justify-center items-center px-10">
                <p className="font-bold leading-[30px] text-[#06053A]">
                  書類管理作業の 負担が大きく 業務に影響する
                </p>
                <div className="-top-[13px] -left-[13px] absolute h-[75px] w-[75px] bg-teal rounded-full flex justify-center items-center">
                  <span className="font-bold text-[2.5rem] text-white">
                    <HiOutlineChat />
                  </span>
                </div>
              </div>
              <div className="relative w-[194px] h-[194px] bg-white rounded-full flex justify-center items-center px-10">
                <p className="font-bold leading-[30px] text-[#06053A]">
                  書類管理作業の 負担が大きく 業務に影響する
                </p>
                <div className="-top-[13px] -left-[13px] absolute h-[75px] w-[75px] bg-teal rounded-full flex justify-center items-center">
                  <span className="font-bold text-[2.5rem] text-white">
                    <HiOutlineChat />
                  </span>
                </div>
              </div>
            </div>
            <div className="relative w-[194px] h-[194px] bg-white rounded-full flex justify-center items-center px-10">
              <p className="font-bold leading-[30px] text-[#06053A]">
                書類管理作業の 負担が大きく 業務に影響する
              </p>
              <div className="-top-[13px] -left-[13px] absolute h-[75px] w-[75px] bg-teal rounded-full flex justify-center items-center">
                <span className="font-bold text-[2.5rem] text-white">
                  <HiOutlineChat />
                </span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-[8rem] flex gap-8 flex-col">
            <div className="flex">
              <div className="w-[136px] h-[10px] bg-[#00ADB5] rounded-l-full rotate-[15deg] relative left-[7px]"></div>
              <div className="w-[136px] h-[10px] bg-[#00ADB5] rounded-r-full -rotate-[15deg] relative "></div>
            </div>
            <div className="flex">
              <div className="w-[136px] h-[10px] bg-[#34D2CC] rounded-l-full rotate-[15deg] relative left-[7px]"></div>
              <div className="w-[136px] h-[10px] bg-[#34D2CC] rounded-r-full -rotate-[15deg] relative "></div>
            </div>
            <div className="flex">
              <div className="w-[136px] h-[10px] bg-[#5DE8D7] rounded-l-full rotate-[15deg] relative left-[7px]"></div>
              <div className="w-[136px] h-[10px] bg-[#5DE8D7] rounded-r-full -rotate-[15deg] relative "></div>
            </div>
            <div className="flex">
              <div className="w-[136px] h-[10px] bg-[#94F7E2] rounded-l-full rotate-[15deg] relative left-[7px]"></div>
              <div className="w-[136px] h-[10px] bg-[#94F7E2] rounded-r-full -rotate-[15deg] relative "></div>
            </div>
          </div>
        </div>
      </div>

      {/* =============Userbenefitsiu================== */}
      <div className="container flex justify-center pt-[12rem] pb-[6rem] flex-col px-4">
        <div className="text-center flex justify-center flex-col items-center">
          <h4 className="text-[20px] font-bold text-[#00ADB5] bg-red pb-1  max-w-fit mx-auto tracking-5 uppercase">
            USER BENEFIT
          </h4>
          <div className="h-[3px] w-[100px] rounded-full bg-[#00ADB5]"></div>
        </div>
        <div className="mt-5 flex flex-col gap-9">
          <h5 className="text-[#000] text-center text-[24px] font-bold leading-[30px]">
            業務効率向上の鍵は、コミュニケーションや情報共有方法の改善
          </h5>
          <div>
            <p className="text-[#000] text-center ">
              Guide
              Botの目的は、ユーザーが膨大な電子書類の中から必要な情報を迅速かつ正確に見つけることです。
            </p>
            <p className="text-[#000] text-center">
              情報収集の効率化や作業時間の短縮を実現し、ユーザーの業務効率と生産性の向上を支援します。
            </p>
          </div>
          <div className=" md:w-[60%] mx-auto text-center gap-9 flex flex-col">
            <p className="h-[87px] md:h-[50px] text-[14px] font-bold bg-[#F0F2F3] px-[5rem] flex items-center  justify-center rounded-2xl">
              効率的な問い合わせ対応や情報共有の実現による
              社員の業務効率・生産性向上
            </p>
            <p className="h-[87px] md:h-[50px] text-[14px] font-bold bg-[#F0F2F3] px-[5rem] flex items-center  justify-center rounded-2xl">
              自動化された回答やFAQ機能の活用により、社員の負担を軽減。
              貴重な人的リソースを他の重要な業務に割り当てることができる
            </p>
            <p className="h-[87px] md:h-[50px] text-[14px] font-bold bg-[#F0F2F3] px-[5rem] flex items-center  justify-center rounded-2xl">
              人件費やコミュニケーションツールのコスト削減
            </p>
            <p className="h-[87px] md:h-[50px] text-[14px] font-bold bg-[#F0F2F3] px-[5rem] flex items-center  justify-center rounded-2xl">
              一貫した回答の提供による
              正確な情報の共有や、顧客サービスの向上につながる
            </p>
          </div>
        </div>
      </div>
      {/* =============================== */}
      <div className="bg-[#06053A]">
        <div className="relative container py-11 px-8 flex justify-center items-center gap-5  flex-col">
          <div className="flex items-center justify-center md:justify-start">
            <span className="text-[3rem] text-white mr-9 hidden md:block">
              <FaRegEdit />
            </span>
            <h2
              className="text-[32px] font-bold text-white"
              style={{
                letterSpacing: "3.5px",
              }}
            >
              今なら
              <span
                className="text-[#5DE8D7] text-[40px]"
                style={{
                  letterSpacing: "4.4px",
                }}
              >
                2週間
              </span>
              の
              <span
                className="text-[#5DE8D7] text-[40px]"
                style={{
                  letterSpacing: "4.4px",
                }}
              >
                無料トライアル
              </span>
              実施中！
            </h2>
          </div>
          <div className="flex gap-6 flex-col md:flex-row">
            <div className="flex flex-col justify-center items-center">
              <p className="text-sm text-white font-bold mb-3">
                \「Guide bot」に関する /
              </p>
              <button className="bg-teal-bold rounded-full w-[22rem] text-white text-[20px] font-bold py-3 text-center">
                資料ダウンロード
              </button>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-sm text-white font-bold mb-3">
                \ 無料デモの体験はこちら /
              </p>
              <button className="bg-white rounded-full w-[22rem] text-black text-[20px] font-bold py-3 text-center">
                導入相談・お問い合わせ
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ==============featuresiu================= */}
      <div className="container flex justify-center pb-[6rem] pt-[4rem] flex-col">
        <div className="text-center flex justify-center flex-col items-center">
          <h4 className="text-[20px] font-bold text-[#00ADB5] bg-red pb-1  max-w-fit mx-auto tracking-5 uppercase">
            FEATURE
          </h4>
          <div className="h-[3px] w-[100px] rounded-full bg-[#00ADB5]"></div>
        </div>
        <div className="mt-5 hidden md:block">
          <h5 className="text-[#06053A] text-center text-[32px] font-bold leading-[40px]">
            Guide Botの特長
          </h5>
          <div className="flex gap-3 justify-center mt-10">
            <div className="w-[24%] gap-2 flex flex-col justify-center items-center bg-[#34D2CC] rounded-xl px-8 py-5">
              <p className="text-[4.125rem] text-[#44D6D0] font-bold text-stroke leading-none">
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
              <p className="text-[#06053A] text-[12px] leading-[18px]">
                対話型インターフェースを備え、ユーザーは自然な会話形式で質問を入力できます。ユーザーが自然な会話形式で問合せ検索を入力できることで、従来のキーワードベースの検索に比べて柔軟性があります。
              </p>
              <p className="text-[#06053A] text-[12px] leading-[18px]">
                また、追加の質問や対話にも対応することで、ユーザーとの対話型の体験を提供し、より具体的な情報を提供できます。
              </p>
            </div>
            <div className="w-[24%] gap-2 flex flex-col justify-center items-center bg-[#34D2CC] rounded-xl px-8 py-5 relative top-11 ">
              <p className="text-[4.125rem] text-[#44D6D0] font-bold text-stroke leading-none">
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
              <p className="text-[#06053A] text-[12px] leading-[18px]">
                リアルタイム回答機能により迅速・正確な回答を提供するため、一般的なチャットボットよりも優れた検索結果を提供します。
              </p>
              <p className="text-[#06053A] text-[12px] leading-[18px]">
                高度な自然言語処理機能により、ユーザーの複雑な質問入力にも対応し、正確な検索結果を提供します。
              </p>
            </div>
            <div className="w-[24%] gap-2 flex flex-col justify-between items-center bg-[#34D2CC] rounded-xl px-8 py-5">
              <p className="text-[4.125rem] text-[#44D6D0] font-bold text-stroke leading-none">
                03
              </p>
              <p
                className={`text-[#06053A] text-[20px] ${inter.className} font-bold leading-[40px]`}
              >
                高いカスタマイズ性
              </p>

              <div>
                <p className="text-[#06053A] text-[12px] leading-[18px]">
                  カスタマイズ性が高く、ユーザーは検索のパラメータや挙動を柔軟に設定できます。管理者がカスタマイズ可能なデータを「Guide
                  Bot」に学習させることで、独自の検索データベースを構築できます。
                </p>
                <p className="text-[#06053A] text-[12px] leading-[18px]">
                  今後はユーザーのニーズに応じて、新たな機能の追加・アップデートを予定しています。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-[10rem] hidden md:block">
          <button className="bg-teal text-[20px] py-2 px-4 text-white font-semibold rounded-lg drop-shadow-md shadow-md shadow-[#9CA4AB]">
            無料トライアル受付中
          </button>
        </div>

        {/* feature section on mobile */}
        <div className="mt-5 md:hidden">
          <h5 className="text-[#06053A] text-center text-base font-bold leading-[20px]">
            Guide Botの特長
          </h5>
          <div className="flex flex-col gap-4">
            {features.map((feature, index) => (
              <FeatureCardMobile
                index={index + 1}
                feature={feature}
                key={feature.title}
                className="mt-10"
              />
            ))}
          </div>
        </div>
      </div>
      {/* ==============usecasesiu================= */}
      <div className="container flex justify-center pb-[10rem] pt-[1rem] flex-col">
        <div className="text-center flex justify-center flex-col items-center">
          <h4 className="text-[20px] font-bold text-[#00ADB5] bg-red pb-1  max-w-fit mx-auto tracking-5 uppercase">
            USE CASE
          </h4>
          <div className="h-[3px] w-[100px] rounded-full bg-[#00ADB5]"></div>
        </div>
        <div className="mt-5">
          <h5 className="text-[#06053A] text-center text-[32px] font-bold leading-[40px]">
            活用シーン
          </h5>
          <div className="flex gap-10 justify-center items-center mt-10">
            <button
              onClick={() => setTab("1")}
              className={`hover:bg-teal-gradient hover:text-white text-[#534D5E] border-[2px] border-[#534D5E] hover:border-none hover:py-[0.6rem] rounded-lg w-[8rem] py-2 font-semibold drop-shadow-md shadow-md shadow-[#9CA4AB] ${
                tab === "1" &&
                "bg-teal-gradient text-white border-none py-[0.6rem] drop-shadow-md shadow-md shadow-[#9CA4AB]"
              }`}
            >
              検索・要約
            </button>
            <button
              onClick={() => setTab("2")}
              className={`hover:bg-teal-gradient hover:text-white text-[#534D5E] border-[2px] border-[#534D5E] hover:border-none hover:py-[0.6rem] rounded-lg w-[8rem] py-2 font-semibold drop-shadow-md shadow-md shadow-[#9CA4AB] ${
                tab === "2" &&
                "bg-teal-gradient text-white border-none py-[0.6rem] drop-shadow-md shadow-md shadow-[#9CA4AB]"
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => setTab("3")}
              className={`hover:bg-teal-gradient hover:text-white text-[#534D5E] border-[2px] border-[#534D5E] hover:border-none hover:py-[0.6rem] rounded-lg w-[8rem] py-2 font-semibold drop-shadow-md shadow-md shadow-[#9CA4AB] ${
                tab === "3" &&
                "bg-teal-gradient text-white border-none py-[0.6rem] drop-shadow-md shadow-md shadow-[#9CA4AB]"
              }`}
            >
              緊急対応
            </button>
            <button
              onClick={() => setTab("4")}
              className={`hover:bg-teal-gradient hover:text-white text-[#534D5E] border-[2px] border-[#534D5E] hover:border-none hover:py-[0.6rem] rounded-lg w-[8rem] py-2 font-semibold drop-shadow-md shadow-md shadow-[#9CA4AB] ${
                tab === "4" &&
                "bg-teal-gradient text-white border-none py-[0.6rem] drop-shadow-md shadow-md shadow-[#9CA4AB]"
              }`}
            >
              取扱説明書
            </button>
            <button
              onClick={() => setTab("5")}
              className={`hover:bg-teal-gradient hover:text-white text-[#534D5E] border-[2px] border-[#534D5E] hover:border-none hover:py-[0.6rem] rounded-lg w-[8rem] py-2 font-semibold drop-shadow-md shadow-md shadow-[#9CA4AB] ${
                tab === "5" &&
                "bg-teal-gradient text-white border-none py-[0.6rem] drop-shadow-md shadow-md shadow-[#9CA4AB]"
              }`}
            >
              法令対応
            </button>
          </div>
          {tab === "1" && (
            <div className="flex justify-center mt-9">
              <div className="relative flex justify-center">
                <div className="shadow-[#78828A_4px_5px_13px_0px] rounded-xl ">
                  <Image
                    src={"/usecase1-1.png"}
                    alt="usecase1.1"
                    height={280}
                    width={280}
                  />
                </div>
                <div className="shadow-[#78828A_4px_5px_13px_0px] rounded-xl relative -bottom-[7.5rem] right-[8rem]">
                  <Image
                    src={"/usecase1-2.png"}
                    alt="usecase1.1"
                    height={280}
                    width={280}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col w-[30%] relative top-14">
                <p
                  className="text-black text-[24px] font-bold"
                  style={{
                    letterSpacing: "2.4px",
                  }}
                >
                  書類の検索と要約
                </p>
                <p className="text-sm mt-4">
                  電子書類の中から特定の情報や文書を効率的に検索し、要約された結果を提供します。例えば、契約書や報告書などの特定のキーワードや文脈に基づく検索が可能です。
                </p>
                <button className="drop-shadow-md shadow-md shadow-[#9CA4AB] rounded-lg bg-[#00ADB5] text-white text-[20px] font-semibold py-2 px-6 mt-10">
                  無料トライアル
                </button>
              </div>
            </div>
          )}
          {tab === "2" && (
            <div className="flex justify-center mt-9">
              <div className="relative flex justify-center">
                <div className="shadow-[#78828A_4px_5px_13px_0px] rounded-xl ">
                  <Image
                    src={"/usecase2-1.png"}
                    alt="usecase2.1"
                    height={280}
                    width={280}
                  />
                </div>
                <div className="shadow-[#78828A_4px_5px_13px_0px] rounded-xl relative -bottom-[7.5rem] right-[8rem]">
                  <Image
                    src={"/usecase2-2.png"}
                    alt="usecase1.1"
                    height={280}
                    width={280}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col w-[30%] relative top-14">
                <p
                  className={`text-black text-[24px] font-bold ${inter.className}`}
                  style={{
                    letterSpacing: "2.4px",
                  }}
                >
                  FAQ（よくある質問）の 検索と回答
                </p>
                <p className="text-sm mt-4">
                  カスタマーセンターやサポートチームが保有するFAQ情報を検索し、迅速かつ正確な回答を提供します。ユーザーが質問を入力すると、Guide
                  Botが適切な回答を提供することができます。
                </p>
                <button className="drop-shadow-md shadow-md shadow-[#9CA4AB] rounded-lg bg-[#00ADB5] text-white text-[20px] font-semibold py-2 px-6 mt-10">
                  無料トライアル
                </button>
              </div>
            </div>
          )}
          {tab === "3" && (
            <div className="flex justify-center mt-9">
              <div className="relative flex justify-center">
                <div className="shadow-[#78828A_4px_5px_13px_0px] rounded-xl ">
                  <Image
                    src={"/usecase3-1.png"}
                    alt="usecase2.1"
                    height={280}
                    width={280}
                  />
                </div>
                <div className="shadow-[#78828A_4px_5px_13px_0px] rounded-xl relative -bottom-[7.5rem] right-[8rem]">
                  <Image
                    src={"/usecase3-2.png"}
                    alt="usecase1.1"
                    height={280}
                    width={280}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col w-[30%] relative top-14">
                <p
                  className={`text-black text-[24px] font-bold ${inter.className}`}
                  style={{
                    letterSpacing: "2.4px",
                  }}
                >
                  緊急事態対応マニュアル
                </p>
                <p className="text-sm mt-4">
                  災害や緊急事態などの状況下で、従業員が緊急時の手順や対応方法を素早く検索できるマニュアルを作成することができます。Guide
                  Botを使用することで、従業員は自然な会話形式で必要な情報を簡単に入手できます。
                </p>
                <button className="drop-shadow-md shadow-md shadow-[#9CA4AB] rounded-lg bg-[#00ADB5] text-white text-[20px] font-semibold py-2 px-6 mt-10">
                  無料トライアル
                </button>
              </div>
            </div>
          )}
          {tab === "4" && (
            <div className="flex justify-center mt-9">
              <div className="relative flex justify-center">
                <div className="shadow-[#78828A_4px_5px_13px_0px] rounded-xl ">
                  <Image
                    src={"/usecase4-1.png"}
                    alt="usecase2.1"
                    height={280}
                    width={280}
                  />
                </div>
                <div className="shadow-[#78828A_4px_5px_13px_0px] rounded-xl relative -bottom-[7.5rem] right-[8rem]">
                  <Image
                    src={"/usecase4-2.png"}
                    alt="usecase1.1"
                    height={280}
                    width={280}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col w-[30%] relative top-14">
                <p
                  className={`text-black text-[24px] font-bold ${inter.className}`}
                  style={{
                    letterSpacing: "2.4px",
                  }}
                >
                  取扱説明書
                </p>
                <p className="text-sm mt-4">
                  製品やサービスの取扱説明書を「Guide
                  Bot」の学習データとして追加することで、顧客やユーザーが製品の使い方やトラブルシューティングに関する情報を簡単に検索できるようになります。
                </p>
                <button className="drop-shadow-md shadow-md shadow-[#9CA4AB] rounded-lg bg-[#00ADB5] text-white text-[20px] font-semibold py-2 px-6 mt-10">
                  無料トライアル
                </button>
              </div>
            </div>
          )}
          {tab === "5" && (
            <div className="flex justify-center mt-9">
              <div className="relative flex justify-center">
                <div className="shadow-[#78828A_4px_5px_13px_0px] rounded-xl ">
                  <Image
                    src={"/usecase5-1.png"}
                    alt="usecase2.1"
                    height={280}
                    width={280}
                  />
                </div>
                <div className="shadow-[#78828A_4px_5px_13px_0px] rounded-xl relative -bottom-[7.5rem] right-[8rem]">
                  <Image
                    src={"/usecase5-2.png"}
                    alt="usecase1.1"
                    height={280}
                    width={280}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col w-[30%] relative top-14">
                <p
                  className={`text-black text-[24px] font-bold ${inter.className}`}
                  style={{
                    letterSpacing: "2.4px",
                  }}
                >
                  規制・法令対応の情報提供
                </p>
                <p className="text-sm mt-4">
                  特定の業界や組織が遵守すべき規制や法令に関する情報をGuide
                  Botで検索できるようにすることが可能です。従業員は関連するキーワードや質問を入力し、正確な情報と遵守すべき手順を取得できます。
                </p>
                <button className="drop-shadow-md shadow-md shadow-[#9CA4AB] rounded-lg bg-[#00ADB5] text-white text-[20px] font-semibold py-2 px-6 mt-10">
                  無料トライアル
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* ==============casestudysiu================= */}
      <div className="container flex justify-center pb-[4rem] pt-[1rem] flex-col">
        <div className="text-center flex justify-center flex-col items-center">
          <h4 className="text-[20px] font-bold text-[#00ADB5] bg-red pb-1  max-w-fit mx-auto tracking-5 uppercase">
            CASE STUDY
          </h4>
          <div className="h-[3px] w-[100px] rounded-full bg-[#00ADB5]"></div>
        </div>
        <div className="mt-5">
          <h5 className="text-[#06053A] text-center text-[32px] font-bold leading-[40px]">
            導入事例
          </h5>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="flex flex-col justify-center items-center">
              <p className="text-[#6A6B6C] text-xs font-medium">
                使用規模に合わせたプランをご用意しております
              </p>
              <p className="text-[#6A6B6C] text-xs font-medium">
                ご不明点やプランのご相談は
                <span className="text-[#006682] font-black">コチラ</span>
                よりお問い合わせください
              </p>
            </div>
          </div>
          <div className="flex gap-6 justify-center mt-5">
            <div className="w-[25%] rounded-xl px-4 py-8 shadow-lg">
              <Image
                src={"/casestudy1.png"}
                alt="case1"
                height={180}
                width={700}
              />
              <p className="text-[#190D30] text-sm font-bold mt-5">
                ヘルプセンターでのGuide Bot導入後、顧客満足度が向上！
              </p>
              <p className="text-[#6A6B6C] mt-5 text-[10px] font-medium">
                Guide
                Bot導入後、迅速・正確なサポートが提供され、顧客満足度が向上しました
              </p>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-[28px] h-[28px] bg-[#D9D9D9] rounded-full border border-[#3D246C] mr-2"></div>
                  <div>
                    <p className="text-[#190D330] text-[10px] font-medium">
                      企業名スペース
                    </p>
                    <p className="text-[#6A6B6C] text-[7px] font-medium">
                      企業名スペース
                    </p>
                  </div>
                </div>
                <button className="bg-[#00ADB5] text-white rounded-lg py-2 px-4 font-semibold text-[11px]">
                  ライトプラン
                </button>
              </div>
            </div>
            <div className="w-[25%] rounded-xl px-4 py-8 shadow-lg">
              <Image
                src={"/casestudy2.png"}
                alt="case1"
                height={180}
                width={700}
              />
              <p className="text-[#190D30] text-sm font-bold mt-5">
                社内の問い合わせ対応にGuideBotを活用し、業務効率が向上！
              </p>
              <p className="text-[#6A6B6C] mt-5 text-[10px] font-medium">
                導入により社内問い合わせ対応の効率が向上し、人的リソースを大幅に削減することができました
              </p>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-[28px] h-[28px] bg-[#D9D9D9] rounded-full border border-[#3D246C] mr-2"></div>
                  <div>
                    <p className="text-[#190D330] text-[10px] font-medium">
                      企業名スペース
                    </p>
                    <p className="text-[#6A6B6C] text-[7px] font-medium">
                      企業名スペース
                    </p>
                  </div>
                </div>
                <button className="bg-[#00ADB5] text-white rounded-lg py-2 px-4 font-semibold text-[11px]">
                  ライトプラン
                </button>
              </div>
            </div>
            <div className="w-[25%] rounded-xl px-4 py-8 shadow-lg">
              <Image
                src={"/casestudy3.png"}
                alt="case1"
                height={180}
                width={700}
              />
              <p className="text-[#190D30] text-sm font-bold mt-5">
                教育機関でのGuide
                Bot採用後、関連性の高い情報の検索時間を大幅短縮！
              </p>
              <p className="text-[#6A6B6C] mt-5 text-[10px] font-medium">
                教育機関が当製品を採用し、関連情報の迅速な検索が可能になりました
              </p>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-[28px] h-[28px] bg-[#D9D9D9] rounded-full border border-[#3D246C] mr-2"></div>
                  <div>
                    <p className="text-[#190D330] text-[10px] font-medium">
                      企業名スペース
                    </p>
                    <p className="text-[#6A6B6C] text-[7px] font-medium">
                      企業名スペース
                    </p>
                  </div>
                </div>
                <button className="bg-[#00ADB5] text-white rounded-lg py-2 px-4 font-semibold text-[11px]">
                  ライトプラン
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==============pricesiu================= */}
      <div className="container flex justify-center pb-[8rem] pt-[1rem] flex-col">
        <div className="text-center flex justify-center flex-col items-center">
          <h4 className="text-[20px] font-bold text-[#00ADB5] bg-red pb-1  max-w-fit mx-auto tracking-5 uppercase">
            PRICE
          </h4>
          <div className="h-[3px] w-[100px] rounded-full bg-[#00ADB5]"></div>
        </div>
        <div className="mt-5">
          <h5 className="text-[#06053A] text-center text-[32px] font-bold leading-[40px]">
            料金プラン
          </h5>
          <div className="flex flex-col mt-10 gap-20 pl-24">
            <div className="flex items-center">
              <div className="-rotate-[90deg] flex gap-4 flex-col">
                <div className="flex">
                  <div className="w-[19px] h-[4px] bg-[#00ADB5] rounded-l-full rotate-[45deg] relative left-[7px]"></div>
                  <div className="w-[19px] h-[4px] bg-[#00ADB5] rounded-r-full -rotate-[45deg] relative "></div>
                </div>
                <div className="flex">
                  <div className="w-[19px] h-[4px] bg-[#34D2CC] rounded-l-full rotate-[45deg] relative left-[7px]"></div>
                  <div className="w-[19px] h-[4px] bg-[#34D2CC] rounded-r-full -rotate-[45deg] relative "></div>
                </div>
                <div className="flex">
                  <div className="w-[19px] h-[4px] bg-[#5DE8D7] rounded-l-full rotate-[45deg] relative left-[7px]"></div>
                  <div className="w-[19px] h-[4px] bg-[#5DE8D7] rounded-r-full -rotate-[45deg] relative "></div>
                </div>
                <div className="flex">
                  <div className="w-[19px] h-[4px] bg-[#94F7E2] rounded-l-full rotate-[45deg] relative left-[7px]"></div>
                  <div className="w-[19px] h-[4px] bg-[#94F7E2] rounded-r-full -rotate-[45deg] relative "></div>
                </div>
              </div>
              <p className="text-[#06053A] text-[24px] font-bold ml-10 pb-2">
                Guide Bot パッケージ版 初期費用
              </p>
            </div>
            <div className="flex items-center">
              <div className="-rotate-[90deg] flex gap-4 flex-col">
                <div className="flex">
                  <div className="w-[19px] h-[4px] bg-[#00ADB5] rounded-l-full rotate-[45deg] relative left-[7px]"></div>
                  <div className="w-[19px] h-[4px] bg-[#00ADB5] rounded-r-full -rotate-[45deg] relative "></div>
                </div>
                <div className="flex">
                  <div className="w-[19px] h-[4px] bg-[#34D2CC] rounded-l-full rotate-[45deg] relative left-[7px]"></div>
                  <div className="w-[19px] h-[4px] bg-[#34D2CC] rounded-r-full -rotate-[45deg] relative "></div>
                </div>
                <div className="flex">
                  <div className="w-[19px] h-[4px] bg-[#5DE8D7] rounded-l-full rotate-[45deg] relative left-[7px]"></div>
                  <div className="w-[19px] h-[4px] bg-[#5DE8D7] rounded-r-full -rotate-[45deg] relative "></div>
                </div>
                <div className="flex">
                  <div className="w-[19px] h-[4px] bg-[#94F7E2] rounded-l-full rotate-[45deg] relative left-[7px]"></div>
                  <div className="w-[19px] h-[4px] bg-[#94F7E2] rounded-r-full -rotate-[45deg] relative "></div>
                </div>
              </div>
              <p className="text-[#06053A] text-[24px] font-bold ml-10 pb-2">
                Guide Bot パッケージ版 初期費用
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="text-[#06053A] font-bold text-[24px]">
              使い方に合わせて選べる質問量
            </p>
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="flex flex-col justify-center items-center">
                <p className="text-[#6A6B6C] text-xs font-medium">
                  使用規模に合わせたプランをご用意しております
                </p>
                <p className="text-[#6A6B6C] text-xs font-medium">
                  ご不明点やプランのご相談は
                  <span className="text-[#006682] font-black">コチラ</span>
                  よりお問い合わせください
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-9 items-end justify-center">
            <div className="w-[20%] px-6 py-9 flex flex-col h-fit items-center justify- shadow-[#D1D8DD_0px_2px_9px_0px] rounded-2xl">
              <div className="flex gap-3 items-center">
                <div className="rounded-xl bg-[#C9FBEC] p-3 flex">
                  <div className="w-[16px] h-[32px] bg-[#006682] rounded-l-full"></div>
                  <div className="w-[16px] h-[32px] bg-[#5DE8D7] rounded-r-full"></div>
                </div>
                <div>
                  <p className="text-[12px] font-medium text-[#6F6C90]">
                    ～XX人向け
                  </p>
                  <p className="text-sm font-bold text-[#170F49] mt-1">
                    エントリープラン
                  </p>
                </div>
              </div>
              <p className="text-[11px] text-[#6F6C90] mt-6 w-[80%]">
                ～10アカウント作成等エントリープランの説明が入ります
              </p>
              <p className="mt-6 text-[33px] text-[#170F49] font-bold">
                5万円{" "}
                <span className="text-[#6F6C90] text-[12px] font-medium">
                  / 月
                </span>
              </p>
              <p className="text-[#170F49] text-[11px] font-bold mt-5">
                含まれるサービス内容
              </p>
              <div className="flex items-center mt-4">
                <p className="text-[18px] text-[#34D2CC]">
                  <BiSolidCheckCircle />
                </p>
                <p className="text-[#170F49] text-[18px] ml-2">
                  最大4,000件の質問数
                </p>
              </div>
            </div>
            <div className="w-[20%] ">
              <div className="px-6 py-9 flex flex-col items-center justify-center shadow-[#D1D8DD_0px_2px_9px_0px] rounded-t-2xl">
                <div className="flex gap-3 items-center">
                  <div className="rounded-xl bg-[#C9FBEC] p-3 flex">
                    <div className="w-[16px] h-[32px] bg-[#006682] rounded-l-full"></div>
                    <div className="w-[16px] h-[32px] bg-[#5DE8D7] rounded-r-full"></div>
                  </div>
                  <div>
                    <p className="text-[12px] font-medium text-[#6F6C90]">
                      ～XX人向け
                    </p>
                    <p className="text-sm font-bold text-[#170F49] mt-1">
                      ライトプラン
                    </p>
                  </div>
                </div>
                <p className="text-[11px] text-[#6F6C90] mt-6 w-[80%]">
                  ～10アカウント作成等ライトプランの説明が入ります
                </p>
                <p className="mt-6 text-[33px] text-[#170F49] font-bold">
                  10万円
                  <span className="text-[#6F6C90] text-[12px] font-medium">
                    / 月
                  </span>
                </p>
                <p className="text-[#170F49] text-[11px] font-bold mt-5">
                  含まれるサービス内容
                </p>
                <div className="flex items-center mt-4">
                  <p className="text-[18px] text-[#34D2CC]">
                    <BiSolidCheckCircle />
                  </p>
                  <p className="text-[#170F49] text-[18px] ml-2">
                    最大9,000件の質問数
                  </p>
                </div>
              </div>
              <div className="bg-[#34D2CC] rounded-b-2xl w-full h-[4rem]"></div>
            </div>
            <div className="w-[20%] ">
              <div className="px-6 py-9 flex flex-col items-center justify-center shadow-[#D1D8DD_0px_2px_9px_0px] rounded-t-2xl">
                <div className="flex gap-3 items-center">
                  <div className="rounded-xl bg-[#C9FBEC] p-3 flex">
                    <div className="w-[16px] h-[32px] bg-[#006682] rounded-l-full"></div>
                    <div className="w-[16px] h-[32px] bg-[#5DE8D7] rounded-r-full"></div>
                  </div>
                  <div>
                    <p className="text-[12px] font-medium text-[#6F6C90]">
                      ～XX人向け
                    </p>
                    <p className="text-sm font-bold text-[#170F49] mt-1">
                      スタンダードプラン
                    </p>
                  </div>
                </div>
                <p className="text-[11px] text-[#6F6C90] mt-6 w-[80%]">
                  ～10アカウント作成等ライトプランの説明が入ります
                </p>
                <p className="mt-6 text-[33px] text-[#170F49] font-bold">
                  20万円
                  <span className="text-[#6F6C90] text-[12px] font-medium">
                    / 月
                  </span>
                </p>
                <p className="text-[#170F49] text-[11px] font-bold mt-5">
                  含まれるサービス内容
                </p>
                <div className="flex items-center mt-4">
                  <p className="text-[18px] text-[#34D2CC]">
                    <BiSolidCheckCircle />
                  </p>
                  <p className="text-[#170F49] text-[18px] ml-2">
                    最大19,000件の質問数
                  </p>
                </div>
              </div>
              <div className="bg-[#5DE8D7] w-full h-[4rem]"></div>
              <div className="bg-[#34D2CC] rounded-b-2xl w-full h-[4rem]"></div>
            </div>
            <div className="w-[20%] ">
              <div className="px-6 py-9 flex flex-col items-center justify-center shadow-[#D1D8DD_0px_2px_9px_0px] rounded-t-2xl">
                <div className="flex gap-3 items-center">
                  <div className="rounded-xl bg-[#C9FBEC] p-3 flex">
                    <div className="w-[16px] h-[32px] bg-[#006682] rounded-l-full"></div>
                    <div className="w-[16px] h-[32px] bg-[#5DE8D7] rounded-r-full"></div>
                  </div>
                  <div>
                    <p className="text-[12px] font-medium text-[#6F6C90]">
                      ～XX人向け
                    </p>
                    <p className="text-sm font-bold text-[#170F49] mt-1">
                      スタンダードプラン
                    </p>
                  </div>
                </div>
                <p className="text-[11px] text-[#6F6C90] mt-6 w-[80%]">
                  ～10アカウント作成等ライトプランの説明が入ります
                </p>
                <p className="mt-6 text-[33px] text-[#170F49] font-bold">
                  20万円
                  <span className="text-[#6F6C90] text-[12px] font-medium">
                    / 月
                  </span>
                </p>
                <p className="text-[#170F49] text-[11px] font-bold mt-5">
                  含まれるサービス内容
                </p>
                <div className="flex items-center mt-4">
                  <p className="text-[18px] text-[#34D2CC]">
                    <BiSolidCheckCircle />
                  </p>
                  <p className="text-[#170F49] text-[18px] ml-2">
                    最大30,000件の質問数
                  </p>
                </div>
              </div>
              <div className="bg-[#94F7E2] w-full h-[4rem]"></div>
              <div className="bg-[#5DE8D7] w-full h-[4rem]"></div>
              <div className="bg-[#34D2CC] rounded-b-2xl w-full h-[4rem]"></div>
            </div>
          </div>
          <p className="text-[18px] text-[#06053A] font-bold text-center mt-8">
            ※ご契約の質問量を超えた際は{" "}
            <span className="text-[32px]">1,000件</span> 単位ごとに
            <span className="text-[32px]">1万円</span>
            （税別）の従量課金となります
          </p>
          <div className="flex flex-col mt-[6rem] gap-20 pl-24">
            <div className="flex items-center">
              <div className="-rotate-[90deg] flex gap-4 flex-col">
                <div className="flex">
                  <div className="w-[19px] h-[4px] bg-[#00ADB5] rounded-l-full rotate-[45deg] relative left-[7px]"></div>
                  <div className="w-[19px] h-[4px] bg-[#00ADB5] rounded-r-full -rotate-[45deg] relative "></div>
                </div>
                <div className="flex">
                  <div className="w-[19px] h-[4px] bg-[#34D2CC] rounded-l-full rotate-[45deg] relative left-[7px]"></div>
                  <div className="w-[19px] h-[4px] bg-[#34D2CC] rounded-r-full -rotate-[45deg] relative "></div>
                </div>
                <div className="flex">
                  <div className="w-[19px] h-[4px] bg-[#5DE8D7] rounded-l-full rotate-[45deg] relative left-[7px]"></div>
                  <div className="w-[19px] h-[4px] bg-[#5DE8D7] rounded-r-full -rotate-[45deg] relative "></div>
                </div>
                <div className="flex">
                  <div className="w-[19px] h-[4px] bg-[#94F7E2] rounded-l-full rotate-[45deg] relative left-[7px]"></div>
                  <div className="w-[19px] h-[4px] bg-[#94F7E2] rounded-r-full -rotate-[45deg] relative "></div>
                </div>
              </div>
              <p className="text-[#06053A] text-[24px] font-bold ml-10 pb-2">
                Guide Bot API
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <p className="text-[#06053A] font-bold text-[24px]">API販売</p>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="flex flex-col justify-center items-center">
              <p className="text-[#6A6B6C] text-xs font-medium">
                使用規模に合わせたプランをご用意しております
              </p>
              <p className="text-[#6A6B6C] text-xs font-medium">
                ご不明点やプランのご相談は
                <span className="text-[#006682] font-black">コチラ</span>
                よりお問い合わせください
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ==============contactsiu================= */}
      <div className="bg-[#D0D0D0]">
        <div className="container flex justify-center pb-[5rem] pt-[4rem] flex-col">
          <div className="text-center flex justify-center flex-col items-center">
            <h4 className="text-[20px] font-bold text-[#00ADB5] bg-red pb-1  max-w-fit mx-auto tracking-5 uppercase">
              CONTACT
            </h4>
            <div className="h-[3px] w-[100px] rounded-full bg-[#00ADB5]"></div>
          </div>
          <div className="mt-5">
            <h5 className="text-[#06053A] text-center text-[32px] font-bold leading-[40px]">
              お問い合わせ
            </h5>
            <div className="mt-8 flex flex-col gap-6 items-center">
              <div className="grid w-full max-w-xl items-center gap-1.5">
                <Label
                  className="text-[#06053A] text-[12px] font-bold"
                  htmlFor="email"
                >
                  貴社名
                </Label>
                <Input
                  className="rounded-sm"
                  type="email"
                  id="email"
                  placeholder="貴社名を入力してください"
                />
              </div>
              <div className="grid w-full max-w-xl items-center gap-1.5">
                <Label
                  className="text-[#06053A] text-[12px] font-bold"
                  htmlFor="email"
                >
                  担当者名
                </Label>
                <Input
                  className="rounded-sm"
                  type="email"
                  id="email"
                  placeholder="担当者名を入力してください"
                />
              </div>
              <div className="grid w-full max-w-xl items-center gap-1.5">
                <Label
                  className="text-[#06053A] text-[12px] font-bold"
                  htmlFor="email"
                >
                  電話番号
                </Label>
                <Input
                  className="rounded-sm"
                  type="email"
                  id="email"
                  placeholder="電話番号を入力してください"
                />
              </div>
              <div className="grid w-full max-w-xl items-center gap-1.5">
                <Label
                  className="text-[#06053A] text-[12px] font-bold"
                  htmlFor="email"
                >
                  メールアドレス
                </Label>
                <Input
                  className="rounded-sm"
                  type="email"
                  id="email"
                  placeholder="メールアドレスを入力してください"
                />
              </div>
              <div className="grid w-full max-w-xl items-center gap-1.5">
                <Label
                  className="text-[#06053A] text-[12px] font-bold"
                  htmlFor="email"
                >
                  電話番号
                </Label>
                <Select>
                  <SelectTrigger className="max-w-xl bg-white text-[#AAA]">
                    <SelectValue placeholder="情報収集" />
                  </SelectTrigger>
                  <SelectContent className=" bg-white text-[#AAA]">
                    <SelectGroup>
                      <SelectLabel>情報収集</SelectLabel>
                      <SelectItem value="test">情報収集</SelectItem>
                      <SelectItem value="test1">情報収集</SelectItem>
                      <SelectItem value="test2">情報収集</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <Checkbox id="terms" className="text-black border-black" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  プライバシーポリシーに同意する
                </label>
              </div>
              <button className="mt-4 bg-teal rounded-sm py-2 px-20 text-sm text-white font-bold">
                資料ダウンロード
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#1B273D]">
        <div className="container py-8 flex gap-4">
          <div className="flex flex-col gap-5  w-[30%]">
            <p
              className={`${inter.className} text-white text-[20px] font-bold`}
            >
              GuideBot
            </p>
            <div>
              <p className="text-white font-normal mb-2">
                Follow on social service
              </p>
              <Image src={"/fb.svg"} height={25} width={25} alt="fb" />
            </div>
          </div>
          <div className="flex justify-center flex-col gap-7 w-[70%]">
            <div className="flex w-full gap-10">
              <Select>
                <SelectTrigger className="max-w-xl outline-0 text-[#FFF] border-b-1 border-x-0 border-t-0 rounded-none">
                  <SelectValue placeholder="情報収集" />
                </SelectTrigger>
                <SelectContent className=" bg-white text-[#AAA]">
                  <SelectGroup>
                    <SelectLabel>情報収集</SelectLabel>
                    <SelectItem value="test">情報収集</SelectItem>
                    <SelectItem value="test1">情報収集</SelectItem>
                    <SelectItem value="test2">情報収集</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="max-w-xl text-[#FFF] outline-0 border-b-1 border-x-0 border-t-0 rounded-none">
                  <SelectValue placeholder="情報収集" />
                </SelectTrigger>
                <SelectContent className=" bg-white text-[#AAA]">
                  <SelectGroup>
                    <SelectLabel>情報収集</SelectLabel>
                    <SelectItem value="test">情報収集</SelectItem>
                    <SelectItem value="test1">情報収集</SelectItem>
                    <SelectItem value="test2">情報収集</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="max-w-xl outline-0 text-[#FFF] border-b-1 border-x-0 border-t-0 rounded-none">
                  <SelectValue placeholder="情報収集" />
                </SelectTrigger>
                <SelectContent className=" bg-white text-[#AAA]">
                  <SelectGroup>
                    <SelectLabel>情報収集</SelectLabel>
                    <SelectItem value="test">情報収集</SelectItem>
                    <SelectItem value="test1">情報収集</SelectItem>
                    <SelectItem value="test2">情報収集</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <p className="text-white text-[13px] text-right">
              Copyright 2023@ all right
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
