import { Github, HeartHandshake } from "lucide-react";
import Link from "next/link";
import { HighlightText } from "../animation/highlight-text";
import { Button } from "../ui/button";

export default function FinalCall() {
  return (
    <section className="container mx-auto pb-20 flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <HighlightText>함께 만드는 동네의 미래</HighlightText>
        <h3 className="font-semibold text-xl pt-2">🔍 발견</h3>
        <p className="text-base text-neutral-700 leading-loose">
          <strong>
            오래된 분식집의 이름, 새로 생긴 서점의 운영 시간, 반려동물을 데려갈
            수 있는 조용한 카페.
          </strong>
          <br />
          당신이 아는 작은 장소, 사소한 정보가 누군가에게는 큰 의미가 됩니다.
          <br />
          동네의 숨은 이야기를 AI에게 들려주세요.
        </p>
        <h3 className="font-semibold text-xl">📝 기록</h3>
        <p className="text-base text-neutral-700 leading-loose">
          기억 속에만 있던 공간을 남겨보세요.
          <br />
          당신의 경험이 쌓여, 모두가 더 잘 찾고 이해할 수 있는 세상이
          만들어집니다.
        </p>
        <h3 className="font-semibold text-xl">🔗 연결</h3>
        <p className="text-base text-neutral-700 leading-loose">
          한 사람의 정보가 또 다른 사람의 맥락과 연결될 때,
          <br />
          AI는 우리 동네를 더 깊이 이해하게 됩니다.
        </p>
        <h3 className="font-semibold text-xl">🤝 함께</h3>
        <p className="text-base text-neutral-700 leading-loose">
          이 프로젝트는 완벽하지 않아도 괜찮아요.
          <br />
          중요한 건, 우리가 함께 만든다는 사실입니다.
        </p>
      </div>
      <div className="flex gap-4">
        <Button className="text-sm px-6" variant="outline">
          <Link
            href="/contribute"
            className="w-full h-full flex flex-row gap-2 items-center"
          >
            <HeartHandshake className="w-4 h-4" /> 기여하기
          </Link>
        </Button>
        <Button className="text-sm px-6" variant="outline">
          <Link
            target="_blank"
            href="https://github.com/MirLim0/placesforai"
            className="w-full h-full flex flex-row gap-2 items-center"
          >
            <Github className="w-4 h-4" /> GitHub 저장소
          </Link>
        </Button>
      </div>
    </section>
  );
}
