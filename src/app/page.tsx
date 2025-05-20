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
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="gap-[130px] flex flex-col m-0 p-0 border-none items-baseline box-border w-full">
      <div className="py-0 px-[65px] w-full">
        <div className="grid grid-cols-12 gap-[15px]">
          <div className="flex flex-col justify-center min-h-[calc(100dvh - 55px)] py-[35px] 2xl:col-start-5 2xl:col-span-4 md:col-start-3 md:col-span-8 col-span-12">
            <div className="flex flex-col gap-4 border-b border-gray pt-16 pb-20">
              <HighlightText>placesfor.ai?</HighlightText>
              <h2 className="text-xl md:text-2xl font-bold">
                AI는 아직 당신의 동네를 모릅니다.
              </h2>
              <p className="text-sm md:text-base">
                이곳은 우리가 사는 지역을 AI가 이해할 수 있도록 모두가 함께
                정보를 모으는 프로젝트입니다.
              </p>
              <p>
                매장 정보를 등록하고 수정하여 AI가 더 정확한 지역 정보를 제공할
                수 있게 도와주세요.
              </p>
              <div className="mt-6 flex items-center gap-6">
                <Button
                  asChild
                  className="bg-black hover:bg-neutral-800 text-white rounded-none px-4 md:px-6 text-xs md:text-sm"
                >
                  <Link href="/contribute">정보 기여하기</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-black text-black hover:bg-neutral-100 rounded-none px-4 md:px-6 text-xs md:text-sm"
                >
                  <Link href="/about">프로젝트 소개</Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-b border-gray pt-16 pb-20">
              <HighlightText>우리가 만드는 것</HighlightText>
              <div className="flex flex-col gap-4">
                <Image
                  src={features[current].image}
                  alt="archive"
                  width={1000}
                  height={1000}
                />
              </div>
              <Carousel setApi={setApi}>
                <CarouselContent>
                  {features.map((feature, index) => (
                    <CarouselItem key={index}>
                      <div className=" flex items-center space-x-4 p-4 w-full justify-center">
                        <div className="hidden md:flex h-10 w-10 items-center justify-center rounded-sm border border-neutral-200 text-neutral-600 bg-white">
                          <feature.icon
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-xs font-medium leading-none">
                            {feature.name}
                          </p>
                          <p className="text- text-xs text-muted-foreground">
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
            </div>
            <div className="flex flex-col gap-4 border-b border-gray pt-16 pb-20">
              <HighlightText>프로젝트 철학</HighlightText>
              <h2 className="text-xl md:text-2xl font-bold">
                이 곳은 상업 서비스가 아니라, 내가 아는 동네를 AI에게 알려주는
                조용한 위키 공간입니다.
              </h2>
              <p className="text-sm md:text-base">
                지역정보 아카이브는 오프라인 매장 혹은 장소 등의 지역 정보를
                수집하고 AI가 이해할 수 있는 구조로 변환, 전시하는 비영리
                플랫폼입니다. 우리는 상업적인 목적 없이, 집단지성의 힘을
                바탕으로 정보의 공공성을 추구합니다.
              </p>
              <p className="text-sm md:text-base">
                AI는 인터넷에 공개된 정보를 기반으로 학습하지만, 많은 지역
                정보들은 구조화되지 않거나 온라인에 존재하지 않습니다. 특히
                소규모 자영업체나 지역 특색이 담긴 공간들은 더욱 그렇습니다. 이
                프로젝트는 그런 정보들을 체계적으로 수집하고 AI가 활용할 수
                있도록 돕습니다.
              </p>
              <p className="text-sm md:text-base">
                우리는 이 플랫폼의 모든 사용자를 '기여자'로 여깁니다. 정보를
                등록하거나, 수정하거나, 검증하는 모든 활동이 가치 있는
                기여입니다. 이런 기여는 AI가 더 정확하고 풍부한 정보를 제공하는
                데 직접적인 도움이 됩니다.
              </p>
            </div>
            <div className="flex flex-col gap-4 pt-16 pb-20">
              <HighlightText>AI 통합</HighlightText>
              <div className="flex gap-8 my-8">
                <Link href="https://chatgpt.com/gpts">
                  <Image
                    src="/openai.svg"
                    alt="openai"
                    width={32}
                    height={32}
                  />
                </Link>
                <Link href="https://claude.ai/download">
                  <Image
                    src="/claude.svg"
                    alt="claude"
                    width={32}
                    height={32}
                  />
                </Link>
              </div>
              <p className="text-sm md:text-base">
                이 프로젝트의 모든 데이터는 구조화된 형태로 AI 모델에
                제공됩니다. 사용자가 기여한 정보는 AI가 로컬 정보를 더 정확하게
                이해하는 데 도움이 됩니다.
              </p>
              <p className="text-sm md:text-base">
                현재 ChatGPT GPTs, Claude MCP 등과의 통합을 지원하고 있으며,
                API를 통해 다양한 AI 서비스와 연동할 수 있습니다.
              </p>
              <p className="text-sm md:text-base">
                우리는 이 플랫폼의 모든 사용자를 '기여자'로 여깁니다. 정보를
                등록하거나, 수정하거나, 검증하는 모든 활동이 가치 있는
                기여입니다. 이런 기여는 AI가 더 정확하고 풍부한 정보를 제공하는
                데 직접적인 도움이 됩니다.
              </p>
              <p className="text-sm md:text-base">
                개인의 정보 조회 및 MCP, GPTs 사용은{" "}
                <strong>누구에게나 무료</strong>로 제공됩니다.
                <br />
                다만 <strong>비즈니스를 위한 API 및 광고</strong>는 별도 B2B
                채널에서 수익화됩니다.
              </p>
              <div className="mt-6 flex items-center gap-6">
                <Button
                  asChild
                  className="bg-black hover:bg-neutral-800 text-white rounded-none px-4 md:px-6 text-xs md:text-sm"
                >
                  <Link href="/contribute">API 문서</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-black text-black hover:bg-neutral-100 rounded-none px-4 md:px-6 text-xs md:text-sm"
                >
                  <Link href="/about">AI 통합 가이드</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
