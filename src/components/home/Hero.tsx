import { HighlightText } from "@/components/animation/highlight-text";
import { Button } from "@/components/ui/button";
import { HeartHandshake, Info } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container mx-auto pt-16 pb-20 border-b border-neutral-200 flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <HighlightText>placesfor.ai</HighlightText>
        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          AI는 아직 <span className="bg-primary px-1">당신의 동네</span>를
          모릅니다.
        </h1>
        <p className="text-base text-neutral-700">
          우리가 사는 지역을 AI가 이해할 수 있도록 함께 정보를 정리하는 오픈
          프로젝트입니다.
        </p>
      </div>
      <div className="flex gap-4">
        <Button className="text-sm px-6">
          <Link
            href="/contribute"
            className="w-full h-full flex flex-row gap-2 items-center"
          >
            <HeartHandshake className="w-4 h-4" /> 기여하기
          </Link>
        </Button>
        <Button variant="outline" className="text-sm px-6">
          <Link
            href="/about"
            className="w-full h-full flex flex-row gap-2 items-center"
          >
            <Info className="w-4 h-4" /> AI와 정보 활용하기
          </Link>
        </Button>
      </div>
    </section>
  );
}
