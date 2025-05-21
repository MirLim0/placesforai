import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용 약관 | placesfor.ai",
  description: "placesfor.ai 서비스 및 데이터베이스 이용 약관",
};

export default function TermsPage() {
  return (
    <main className="container mx-auto max-w-2xl py-16 px-4">
      <h1 className="text-2xl font-bold mb-6">이용 약관 (Terms of Service)</h1>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">1. 서비스의 정의 및 범위</h2>
        <p className="text-base text-neutral-700">
          placesfor.ai(이하 "서비스")는 사용자가 지역 정보, 장소 데이터, 기타
          관련 콘텐츠(이하 "데이터")를 등록, 열람, 공유할 수 있도록 제공하는
          오픈 커뮤니티 기반 데이터베이스 서비스입니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">
          2. 이용 자격 및 연령 제한
        </h2>
        <ul className="list-disc pl-5 text-base text-neutral-700 space-y-2">
          <li>
            만 14세 미만은 서비스 이용이 제한됩니다. 미성년자는 법정대리인의
            동의가 필요할 수 있습니다.
          </li>
          <li>서비스 이용자는 본 약관에 동의함으로써 이용 자격을 갖습니다.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">
          3. 데이터 및 콘텐츠 이용 정책
        </h2>
        <ul className="list-disc pl-5 text-base text-neutral-700 space-y-2">
          <li>
            서비스 내 데이터는 <strong>개인적, 비상업적 목적</strong>(학습,
            연구, 개인 프로젝트, 비영리 서비스 등)에 한해 <strong>무료</strong>
            로 이용할 수 있습니다.
          </li>
          <li>
            <strong>기업, 단체, 또는 상업적 목적</strong>(유료 서비스, 재판매,
            대규모 API 활용 등)으로 데이터를 이용하려면 placesfor.ai와{" "}
            <strong>별도의 라이선스 계약 또는 유료 이용 약관</strong>에 따라야
            합니다.
          </li>
          <li>
            데이터 이용 시 반드시 출처(placesfor.ai 및 기여자)를 명시해야 하며,
            기여자 정보가 없는 경우 "placesfor.ai 커뮤니티"로 표기합니다.
          </li>
          <li>
            무단 크롤링, 대량 데이터 수집, 자동화된 접근(API, 스크래핑 등)은
            placesfor.ai의 사전 승인 없이 금지됩니다.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">4. 기여 및 게시물 정책</h2>
        <ul className="list-disc pl-5 text-base text-neutral-700 space-y-2">
          <li>
            사용자는 타인의 권리를 침해하지 않는 범위 내에서 자유롭게 데이터를
            기여할 수 있습니다.
          </li>
          <li>
            불법, 음란, 명예훼손, 저작권 침해, 개인정보 유출 등 법령 및
            공서양속에 반하는 게시물은 금지되며, 발견 시 사전 통지 없이 삭제될
            수 있습니다.
          </li>
          <li>
            기여자는 자신의 기여 데이터에 대해 placesfor.ai의 데이터베이스
            정책에 동의한 것으로 간주합니다.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">5. API 및 비즈니스 이용</h2>
        <ul className="list-disc pl-5 text-base text-neutral-700 space-y-2">
          <li>
            API, MCP 서버 등 자동화된 데이터 접근은 개인/비상업적 목적에 한해
            무료로 제공됩니다.
          </li>
          <li>
            상업적 이용(기업, 단체, 유료 서비스 등)은 별도 계약 및 승인이
            필요합니다.
          </li>
          <li>
            무단 대량 수집, abusive API 사용 등은 서비스 이용이 제한될 수
            있습니다.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">6. 면책 및 책임의 한계</h2>
        <ul className="list-disc pl-5 text-base text-neutral-700 space-y-2">
          <li>
            서비스 및 데이터는 "있는 그대로(AS IS)" 제공되며, 정확성, 완전성,
            신뢰성에 대해 어떠한 보증도 하지 않습니다.
          </li>
          <li>
            데이터 이용, 서비스 중단, 오류, 분쟁 등으로 인한 모든 손해에 대해
            placesfor.ai는 법적 책임을 지지 않습니다.
          </li>
          <li>
            이용자 간, 또는 제3자와의 분쟁 발생 시 placesfor.ai는 책임을 지지
            않으며, 당사자 간 해결을 원칙으로 합니다.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">7. 약관의 변경 및 고지</h2>
        <ul className="list-disc pl-5 text-base text-neutral-700 space-y-2">
          <li>
            본 약관은 서비스 내 공지 또는 이메일 등으로 사전 고지 후 변경될 수
            있습니다.
          </li>
          <li>
            변경된 약관은 공지 시점부터 효력이 발생하며, 계속 이용 시 동의한
            것으로 간주합니다.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">8. 분쟁 해결 및 준거법</h2>
        <ul className="list-disc pl-5 text-base text-neutral-700 space-y-2">
          <li>
            본 약관 및 서비스 이용과 관련된 분쟁은 대한민국 법률을 준거법으로
            하며, 서울중앙지방법원을 1심 관할 법원으로 합니다.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">
          9. 개인정보 및 프라이버시
        </h2>
        <p className="text-base text-neutral-700">
          개인정보 처리방침은 별도의{" "}
          <a href="/privacy" className="underline font-bold">
            개인정보처리방침
          </a>{" "}
          페이지를 참고해 주세요.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">10. 문의</h2>
        <p className="text-base text-neutral-700">
          약관, 데이터 이용, 상업적 라이선스, 기타 문의는{" "}
          <a href="mailto:contact@placesfor.ai" className="underline font-bold">
            contact@placesfor.ai
          </a>
          로 연락해 주세요.
        </p>
      </section>
    </main>
  );
}
