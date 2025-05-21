"use client";

import { HighlightText } from "@/components/animation/highlight-text";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Map, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const features = [
  {
    name: "지역 기반 정보 아카이브",
    description:
      "전국 모든 동네의 매장 정보를 구조화하여 AI가 이해할 수 있도록 변환합니다.",
    icon: Map,
    image: "/sample.png",
  },
  {
    name: "기여자 중심 커뮤니티",
    description:
      "누구나 기여하고 수정할 수 있는 오픈 위키형 구조. 히트맵, 뱃지, 레벨 시스템 제공.",
    icon: Users,
    image: "/sample2.png",
  },
  {
    name: "GPT/Claude 연동",
    description:
      "AI가 바로 사용할 수 있는 JSON API, Plugin, MCP 명세를 제공합니다.",
    icon: Zap,
    image: "/sample3.png",
  },
];

export default function Home() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <div className="flex flex-col gap-32 w-full px-8 md:px-16">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto py-24 border-b border-neutral-200">
        <HighlightText>nomi.place</HighlightText>
        <h1 className="text-3xl md:text-4xl font-bold leading-snug mt-4">
          AI는 아직 <HighlightText>당신의 동네</HighlightText>를 모릅니다.
        </h1>
        <p className="mt-4 text-base text-neutral-700">
          우리가 사는 지역을 AI가 이해할 수 있도록 함께 정보를 정리하는 오픈
          프로젝트입니다.
        </p>
        <div className="flex gap-4 mt-6">
          <Button className="bg-black text-white rounded-none text-sm px-6">
            <Link href="/contribute">📍 장소 등록하기</Link>
          </Button>
          <Button
            variant="outline"
            className="border-black text-black rounded-none text-sm px-6"
          >
            <Link href="/about">📖 프로젝트 소개</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-3xl mx-auto border-b border-neutral-200 pb-24">
        <HighlightText>우리가 만드는 것</HighlightText>
        <div className="mt-4 mb-8">
          <Image
            src={features[current].image}
            alt="archive"
            width={1000}
            height={600}
            className="rounded-md"
          />
        </div>
        <Carousel setApi={setApi}>
          <CarouselContent>
            {features.map((feature, index) => (
              <CarouselItem key={index}>
                <div className="flex items-center gap-4 p-4 justify-center">
                  <div className="hidden md:flex h-10 w-10 items-center justify-center border border-neutral-200 bg-white text-neutral-600">
                    <feature.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{feature.name}</p>
                    <p className="text-xs text-neutral-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="ghost" />
          <CarouselNext variant="ghost" />
        </Carousel>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-3xl mx-auto border-b border-neutral-200 pb-24">
        <HighlightText>프로젝트 철학</HighlightText>
        <h2 className="text-2xl font-bold leading-relaxed mt-4">
          🧭 이곳은 상업 서비스가 아니라, <br />
          내가 아는 동네를 AI에게 알려주는 <strong>조용한 위키 공간</strong>
          입니다.
        </h2>
        <p className="mt-6 text-base text-neutral-700 leading-loose">
          AI는 구조화된 데이터만 이해할 수 있어요.
          <br />
          그래서 우리는 이 플랫폼에 이름, 설명, 위치, 메뉴 같은 정보를 구조화해
          기여합니다.
        </p>
      </section>

      {/* AI Integration Section */}
      <section className="max-w-3xl mx-auto pb-24">
        <HighlightText>AI 통합</HighlightText>
        <div className="flex gap-3 my-6 flex-wrap">
          <span className="bg-gray-100 text-sm rounded-full px-3 py-1">
            GPTs Plugin
          </span>
          <span className="bg-gray-100 text-sm rounded-full px-3 py-1">
            Claude MCP
          </span>
          <span className="bg-gray-100 text-sm rounded-full px-3 py-1">
            JSON-LD
          </span>
          <span className="bg-gray-100 text-sm rounded-full px-3 py-1">
            API Ready
          </span>
        </div>
        <p className="text-base text-neutral-700">
          기여된 정보는 AI에게 제공되며, ChatGPT GPTs, Claude와 연동되어 실시간
          응답에 사용됩니다.
        </p>
        <p className="mt-4 text-base text-neutral-700">
          개인의 정보 조회 및 GPTs/MCP 사용은 <strong>누구에게나 무료</strong>로
          제공되며,
          <br />
          비즈니스를 위한 API 및 광고는 별도 B2B 채널에서 수익화됩니다.
        </p>
        <div className="mt-6 flex gap-4">
          <Button className="bg-black text-white rounded-none text-sm px-6">
            <Link href="/api">API 문서</Link>
          </Button>
          <Button
            variant="outline"
            className="border-black text-black rounded-none text-sm px-6"
          >
            <Link href="/about">AI 통합 가이드</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
