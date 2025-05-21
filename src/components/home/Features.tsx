import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Map, Users, Zap } from "lucide-react";
import { useEffect, useState } from "react";

import { HighlightText } from "@/components/animation/highlight-text";
import Image from "next/image";

const features = [
  {
    name: "지역 기반 정보 아카이브",
    description:
      "지역/동네 정보를 구조화하여 AI가 이해할 수 있도록 변환합니다.",
    icon: Map,
    image: "/sample.png",
  },
  {
    name: "오픈 지식 기반",
    description:
      "기여자 중심으로 수정되고 토론되는 오픈 위키형 데이터베이스입니다.",
    icon: Users,
    image: "/sample2.png",
  },
  {
    name: "AI 응답 연동",
    description:
      "Claude, GPT, Perplexity에 직접 활용됩니다. 또는 API나 MCP 명세를 통해 직접 활용할 수 있습니다.",
    icon: Zap,
    image: "/sample3.png",
  },
];

export default function Features() {
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
    <section className="container mx-auto pb-20 border-b border-neutral-200 flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        <HighlightText>우리가 만드는 것</HighlightText>
        <Image
          src={features[current].image}
          alt="archive"
          width={1000}
          height={1000}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {features.map((feature, index) => (
            <CarouselItem key={index}>
              <div className=" flex items-center space-x-4 p-4 w-full justify-center">
                <div className="hidden md:flex h-10 w-10 items-center justify-center rounded-sm border border-neutral-200 text-neutral-600 bg-white">
                  <feature.icon className="h-4 w-4" aria-hidden="true" />
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
    </section>
  );
}
