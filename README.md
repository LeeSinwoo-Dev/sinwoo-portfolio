# sinwoo-portfolio remaster

네온 블루 포인트 기반의 다크 테마 포트폴리오 리마스터 버전입니다.

## 실행 방법

```bash
npm install
npm run dev
```

### 프로덕션 빌드

```bash
npm run build
npm run start
```

### 배포

Vercel 기준:

```bash
vercel --prod
```

## 구조

- `app/page.tsx`: 전체 섹션 조합(Hero → Projects → Skills → Experience → GitHub → Contact).
- `app/components/*`: 공통 UI 컴포넌트(`SectionHeader`, `Card`, `Badge`, `Button`, `IconRow`, `Timeline`).
- `app/data/content.ts`: 섹션별 데이터(프로젝트/스킬/경험/연락처)를 data-driven 방식으로 분리.
