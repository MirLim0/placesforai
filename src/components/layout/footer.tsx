import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 mt-20">
      {/* 상단: 라이선스/저작권/책임 고지 */}
      <div className="container mx-auto md:max-w-3xl px-8 py-6 text-sm text-neutral-500 flex flex-col md:items-end gap-2">
        <div className="md:text-right font-bold">
          placesfor.ai의 데이터는 개인/비상업적 목적에 한해 자유롭게 활용할 수
          있습니다.
        </div>
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <Link href="/terms" className="underline">
            데이터 이용 정책 자세히 보기
          </Link>
          <Link href="/commercial-terms" className="underline">
            상업적 이용은 별도 라이선스/이용약관이 적용됩니다.
          </Link>
        </div>
        <div className="text-neutral-400 mt-4 md:text-right">
          placesfor.ai의 데이터는 완벽하게 검증되지 않았거나, 일부 오류가 있을
          수 있습니다.
          <br />
          누구나 직접 정보를 수정할 수 있으며, 의견이 다를 경우 새로운 기여를
          통해 개선할 수 있습니다.
        </div>
      </div>
      {/* 하단: 사이트 정보/링크/오픈소스 */}
      <div className="border-t border-neutral-200">
        <div className="container mx-auto md:max-w-3xl px-8 py-6 flex justify-between gap-2 text-xs text-neutral-600">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="logo" width={24} height={24} />
            <span>
              © 2024 placesfor.ai{"   "}|{"   "}
              <Link href="/privacy" className="underline hover:text-primary">
                Privacy
              </Link>
              {" · "}
              <Link href="/terms" className="underline hover:text-primary">
                이용 약관
              </Link>
              {" · "}
              <Link href="/terms" className="underline hover:text-primary">
                데이터 이용 정책
              </Link>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/MirLim0/placesforai"
              target="_blank"
              rel="noopener"
              className="text-neutral-500 hover:text-black"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <span className="hidden md:block">오픈소스 프로젝트</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
