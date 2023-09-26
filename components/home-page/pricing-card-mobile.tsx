import { cn } from "@/lib/utils";
import { useState } from "react";
import CheckFilledIcon from "../icons/check-filled";
import { pricePlan } from "./text";

type TabIndex = 1 | 2;

const PricingCardMobile = ({ className }: { className?: string }) => {
  const [tab, setTab] = useState<TabIndex>(1);
  return (
    <div className={cn(className, "flex flex-col w-[66%] bg-[#D9D9D9]")}>
      <div className="w-full flex">
        <button
          className={cn(
            "w-1/2 flex py-4 flex-col items-center justify-center text-xs font-bold",
            tab === 1
              ? "bg-[#34D2CC] text-white"
              : "text-[#D9D9D9] bg-[#06053a]"
          )}
          onClick={() => setTab(1)}
        >
          <p>Guide Bot </p>
          <p>パッケージ版</p>
        </button>
        <button
          className={cn(
            "w-1/2 flex py-4 flex-col items-center justify-center text-xs font-bold",
            tab === 2
              ? "bg-[#34D2CC] text-white"
              : "text-[#D9D9D9] bg-[#06053a]"
          )}
          onClick={() => setTab(2)}
        >
          <p>Guide Bot</p>
          <p>API</p>
        </button>
      </div>
      {tab === 2 && (
        <div className="text-xs font-bold bg-transparent aspect-square flex flex-col justify-center items-center gap-8">
          <p>販売内容等</p>
          <p>記載情報確定次第</p>
          <p>ここに情報を入力</p>
        </div>
      )}
      {tab === 1 && (
        <div className="flex flex-col p-8 gap-8">
          {pricePlan.map((item) => (
            <div
              className="bg-white w-full p-8 rounded-xl flex flex-col items-center justify-center shadow-lg"
              key={item.name}
            >
              <div className="flex gap-2 self-start">
                <div className="rounded-xl bg-[#C9FBEC] p-3 flex aspect-square">
                  <div className="w-[10px] h-[20px] bg-[#006682] rounded-l-full"></div>
                  <div className="w-[10px] h-[20px] bg-[#5DE8D7] rounded-r-full"></div>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-[#6F6C90]">
                    ～XX人向け
                  </p>
                  <p className="text-xs text-[#170F49] font-bold">
                    {item.name}
                  </p>
                </div>
              </div>
              <div className="text-[#6F6C90] text-xs my-4">
                <p>{item.desc}</p>
              </div>
              <div className="flex items-end">
                <p className="text-[#170F49] text-3xl font-bold">
                  {item.price}万円
                </p>
                <p className="text-[#6F6C90] font-medium text-xs">{"/月"}</p>
              </div>
              <p className="text-[#170F49] text-xs font-bold my-4">
                含まれるサービス内容
              </p>
              <div className="flex">
                <CheckFilledIcon className="mr-2" />
                <p className="text-[#170F49] text-xs">
                  最大{item.amount}件の質問数
                </p>
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-4">
            <p className="text-xs text-[#06053A] font-medium text-center">
              ※ご契約の質問量を超えた際は
            </p>
            <div className="flex items-end justify-center">
              <p className="text-[#06053A] font-bold text-2xl">1,000件</p>
              <p className="text-[#06053A] font-medium text-xs">単位ごと</p>
              <p className="text-[#06053A] font-bold text-2xl">1万円</p>
              <p className="text-[#06053A] font-medium text-xs"> （税別）</p>
            </div>
            <p className="text-xs text-[#06053A] font-medium text-center">
              の従量課金となります
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingCardMobile;
