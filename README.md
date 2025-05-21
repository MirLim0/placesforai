> ℹ️ **AI 연동을 위한 API/MCP 서버 프로젝트를 찾고 계신가요?** → [placesfor-api 프로젝트로 이동하기](https://github.com/MirLim0/placesforapi)

> 우리가 설명하지 않으면, AI는 이 골목을 알 수 없습니다.
> **placesfor.ai는 사람들이 직접 현실의 장소 정보를 구조화하여,
> AI가 이해하고 활용할 수 있게 만드는 오픈 위키 프로젝트입니다.**

---

## 🔧 기술 스택

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Kit**: [shadcn/ui](https://ui.shadcn.com/)
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL + Auth)
- **Deployment**: Vercel

---

## ✨ 주요 기능

- 📝 누구나 장소 정보를 등록하고 수정할 수 있는 **기여 기반 위키 시스템**
- 📦 JSON-LD 기반의 **AI-Friendly 구조화된 장소 정보 스키마**
- 🤖 GPT Plugins / Claude MCP 등을 위한 **공식 API 대응**
- 📍 위치 기반 필터링, 태그, 리뷰, 가격표 등 현실 기반 정보 표현
- 🧭 모든 기여 내역은 히트맵, 레벨, 뱃지 시스템으로 시각화

---

## ⚙️ 개발 환경 세팅

### 1. 레포 클론 및 의존성 설치

```bash
git clone https://github.com/MirLim0/placesforai.git
cd placesforai
pnpm install
```

### 2. 환경 변수 설정

`.env.local` 파일 생성 후 아래 항목을 입력합니다.

```
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 3. 개발 서버 실행

```bash
pnpm dev
```

---

## 🧪 주요 디렉토리 구조

```
/
├─ app/                  # Next.js App Router
│  ├─ page.tsx           # 랜딩페이지
│  ├─ contribute/        # 장소 기여 폼 및 목록
│  └─ place/[id]/        # 장소 상세 페이지
├─ components/           # UI 및 기능 컴포넌트
│  ├─ ui/                # shadcn/ui 기반 버튼, 뱃지 등
│  └─ layout/            # 레이아웃 구성 요소
├─ lib/                  # Supabase 클라이언트, 유틸
│  └─ schema/            # JSON-LD 생성 로직 등
├─ types/                # TypeScript 타입 정의
└─ supabase/             # DB 스키마, 초기 쿼리 등
```

---

## 🧩 구조화 및 표준화: `schema.org` 기반 AI-Friendly 설계

> **placesfor.ai는 단순한 텍스트 저장소가 아닙니다.**
> 모든 장소 정보는 [schema.org/Place](https://schema.org/Place) 및 [JSON-LD](https://json-ld.org/) 사양에 따라 **AI가 바로 해석 가능한 방식으로 저장**됩니다.

### ✅ 우리가 따르는 구조화 표준

- `@type`: Place / LocalBusiness / CafeOrCoffeeShop 등
- `address`, `geo`, `openingHours`, `priceRange`, `menu` 등 핵심 속성
- `review` 객체 포함
- `contributor`, `dateModified` 등 메타 정보 추가

### ✅ 예시: JSON-LD 구조

```json
{
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "name": "소소 비건카페",
  "address": "서울시 마포구 성미산로 23",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.555,
    "longitude": 126.923
  },
  "menu": [
    {
      "@type": "MenuItem",
      "name": "오트라떼",
      "price": "5,500원"
    }
  ],
  "review": [
    {
      "@type": "Review",
      "author": "@mir_ai",
      "reviewBody": "조용하고 반려견 동반 가능해요!",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 4.7
      }
    }
  ],
  "contributor": "@mir_ai",
  "dateModified": "2025-05-21"
}
```

### 🗃️ 데이터 저장 방식

- Supabase의 `places` 테이블에는 실제 구조화 데이터를 **`raw_semantic` (JSONB)** 필드로 저장합니다.
- 모든 구조는 schema.org + JSON-LD 스펙을 따르므로:

  - **Google, OpenAI, Claude 등 LLM에서 직접 파싱 가능**
  - **검색엔진 인덱싱 및 추론에도 활용 가능**

### 🎯 목적

- 🧠 AI가 "이 장소가 어디고, 무슨 특징이 있는지"를 **질문 없이** 이해하게 만듭니다
- 🤖 GPT Plugin / Claude MCP에서 placesfor.ai 데이터를 직접 호출해 **현실적인 응답 품질을 끌어올립니다**
- 🌐 검색엔진 및 외부 시스템이 **구조화된 현실 정보에 접근**할 수 있도록 개방합니다

---

## 🚀 배포

- 기본 배포 환경: **Vercel**
- GitHub 연동 후 자동 프리뷰
- 환경 변수는 Vercel Dashboard에서 설정 필요

---

## 🤝 기여 가이드

1. 이 저장소를 `fork` 합니다.
2. 새로운 브랜치를 생성하고 (`feat/my-feature`)
3. 코드 작성 후 `PR`을 생성합니다.
4. 코드에는 반드시 타입 선언과 UI 상의 최소한의 미려함을 유지해주세요.
5. 기여자는 `contributors.json` 또는 Supabase 테이블에도 자동 기록됩니다.

> ✅ [placesfor.ai/contribute](https://placesfor.ai/contribute) 페이지에서도 실제 장소 기여 가능

---

## 🔗 연계 프로젝트

본 프론트엔드에서 수집된 구조화된 장소 데이터는 별도의 **AI 통합 백엔드 프로젝트**로도 연결됩니다.

- 📦 **API 서버**: 외부 개발자 및 플랫폼이 placesfor.ai의 데이터를 호출할 수 있는 REST API 제공
- 🤖 **MCP 서버**: Claude, GPT 등에서 바로 placesfor.ai 데이터를 응답에 사용할 수 있도록 하는 AI 통합 인터페이스
- 🔌 **플러그인 & 래퍼 SDK**: 다양한 Answer Engine에서 손쉽게 연결될 수 있는 확장 패키지 개발 예정

> 👉 관련 저장소: [github.com/your-org/nomi-api](https://github.com/your-org/nomi-api) _(공개 예정)_

---

## 📚 참고 리소스

- [schema.org/Place](https://schema.org/Place)
- [JSON-LD 공식 사양](https://json-ld.org/spec/latest/json-ld/)
- [Google Structured Data Guide](https://developers.google.com/search/docs/appearance/structured-data/intro)
- [shadcn/ui 문서](https://ui.shadcn.com/docs)
- [Supabase Docs](https://supabase.com/docs)

---

## 📄 라이선스

```
MIT License
Copyright (c) 2025 placesfor.ai
```

---

> 이 프로젝트는 모두가 AI에게 현실을 가르쳐주는 **공공 위키 플랫폼**입니다.
> 누구나 기여할 수 있고, 누구나 사용할 수 있습니다.
> **당신이 아는 그 장소부터**, 함께 시작해 주세요.
