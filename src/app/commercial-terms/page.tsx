import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "상업적 이용 라이선스/이용약관 | placesfor.ai",
  description:
    "placesfor.ai 데이터베이스의 상업적 이용을 위한 별도 라이선스 및 이용약관 안내.",
};

export default function CommercialTermsPage() {
  return (
    <main className="container mx-auto max-w-2xl py-16 px-4">
      <h1 className="text-2xl font-bold mb-6">상업적 이용 라이선스/이용약관</h1>
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">1. 상업적 이용의 정의</h2>
        <ul className="list-disc pl-5 text-base text-neutral-700 space-y-2">
          <li>기업, 단체, 기관, 스타트업 등 법인 또는 단체의 데이터 활용</li>
          <li>유료 서비스, 재판매, 데이터 가공 후 상업적 제공</li>
          <li>대규모 API 호출, 대량 데이터 다운로드, 자동화된 상업적 활용</li>
          <li>기타 영리 목적의 데이터 이용 일체</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">2. 라이선스 및 이용 정책</h2>
        <ul className="list-disc pl-5 text-base text-neutral-700 space-y-2">
          <li>
            상업적 이용자는 placesfor.ai와 별도의 라이선스 계약 또는 유료
            이용약관에 따라 데이터를 이용해야 합니다.
          </li>
          <li>
            계약 체결 전 무단 상업적 이용, 대량 수집, 재판매 등은 엄격히
            금지됩니다.
          </li>
          <li>
            계약 조건(이용 범위, 요금, 데이터 갱신 주기, API 한도 등)은 협의 후
            개별적으로 결정됩니다.
          </li>
          <li>
            상업적 이용 시에도 데이터의 출처(placesfor.ai 및 기여자)를 명시해야
            합니다.
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">3. 주요 조항</h2>
        <ul className="list-disc pl-5 text-base text-neutral-700 space-y-2">
          <li>
            계약 위반 시 데이터 이용이 즉시 제한되며, 법적 책임이 발생할 수
            있습니다.
          </li>
          <li>
            데이터의 정확성, 완전성, 신뢰성에 대한 보증은 제공되지 않습니다.
          </li>
          <li>
            placesfor.ai는 사전 고지 없이 정책을 변경할 수 있으며, 변경 시 즉시
            적용됩니다.
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">4. 문의 및 계약 절차</h2>
        <p className="text-base text-neutral-700">
          상업적 이용, 라이선스 계약, 요금, API 한도 등 자세한 문의 및 계약
          상담은{" "}
          <a href="mailto:contact@placesfor.ai" className="underline font-bold">
            contact@placesfor.ai
          </a>
          로 연락해 주세요.
        </p>
      </section>
    </main>
  );
}
