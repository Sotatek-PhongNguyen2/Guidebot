import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  title: string;
  paragraph1: string;
  paragraph2: string;
  image: ReactNode;
}
const FeatureCardMobile = ({
  feature,
  className,
  index,
}: {
  index: number;
  className?: string;
  feature: Props;
}) => {
  return (
    <div className={cn(className, "mx-4 rounded-sm shadow")}>
      {feature.image}
      <div className="flex flex-col gap-2 items-center">
        <p className="mt-4 text-black font-normal text-sm">{`0${index}`}</p>
        <p className="text-black font-bold text-base">{feature.title}</p>
        <div className="text-xs text-[#242424] p-4">
          <p>{feature.paragraph1}</p>
          <p>{feature.paragraph2}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCardMobile;
