import { HighlightText } from "../animation/highlight-text";

export default function Philosophy() {
  return (
    <section className="container mx-auto pb-20 border-b border-neutral-200 flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <HighlightText>프로젝트 철학</HighlightText>
        <h2 className="text-2xl font-medium leading-relaxed">
          🧭 AI는 아직 당신의 동네를 모릅니다.
        </h2>
        <p className="text-base text-neutral-700 leading-loose">
          현재의 AI는 웹에 남겨진 흔적만 봅니다.
          <br />
          직접적인 장소 정보, 지역 맥락, 현실의 움직임은 거의 이해하지 못합니다.
        </p>

        <p className="text-base text-neutral-700 leading-loose">
          게다가 이런 정보들은 대부분{" "}
          <strong>검색 플랫폼의 폐쇄된 데이터베이스</strong>에만 존재하죠.
          <br />
          우리는 이 현실을 모두가 함께 정리하고,{" "}
          <strong>AI가 실제로 활용할 수 있도록 구조화</strong>합니다.
        </p>

        <p className="text-base text-neutral-700 leading-loose">
          JSON-LD, RDF 같은 표준을 사용해 AI가 직접 읽을 수 있는 장소 데이터를
          만들고,
          <br />
          Claude MCP, GPT Plugin을 통해 <strong>실시간 응답에 반영</strong>
          되도록 설계합니다.
        </p>

        <p className="text-base text-neutral-700 leading-loose">
          이건 단순한 정보 수집이 아니라,{" "}
          <strong>AI에게 현실을 가르치는 일</strong>입니다.
          <br />
          그래서 당신의 장소 등록 한 줄, 설명 한 문장이 아주 중요합니다.
        </p>

        <p className="text-base text-neutral-700 leading-loose">
          우리는 이제 <em>현실의 구조를 만드는 사람들</em>입니다.
          <br />
          <strong>당신이 알고 있는 그 장소부터 시작해 주세요.</strong>
        </p>
      </div>
    </section>
  );
}
