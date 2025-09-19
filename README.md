# 다채움 활용 수업 모델 웹페이지

2022 개정 교육과정과 AI·디지털 전환 시대에 맞는 다채움 플랫폼 활용 수업 모델을 소개하는 반응형 웹페이지입니다.

## 🚀 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화
- **다크/라이트 모드**: 사용자 선호에 따른 테마 전환
- **인터랙티브 애니메이션**: Framer Motion을 활용한 부드러운 애니메이션
- **컴포넌트 기반 구조**: 유지보수와 확장이 쉬운 모듈화된 구조

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── globals.css          # 글로벌 스타일
│   ├── layout.tsx          # 루트 레이아웃
│   └── page.tsx            # 메인 페이지
├── components/
│   ├── Header.tsx          # 상단 헤더
│   ├── HeroSection.tsx     # 메인 히어로 섹션
│   ├── OverviewSection.tsx # 개요 섹션
│   ├── SchoolCasesSection.tsx # 학교별 활용 사례
│   ├── ImprovementAreasSection.tsx # 실천 방안
│   ├── UXImprovementsSection.tsx # UX 개선 제언
│   ├── FutureDirectionSection.tsx # 미래 발전 방향
│   ├── Footer.tsx          # 하단 푸터
│   └── ThemeToggle.tsx     # 테마 토글
```

## 🛠️ 기술 스택

- **Next.js 15**: App Router, 정적 사이트 생성
- **TypeScript**: 타입 안전성
- **Tailwind CSS 4**: 유틸리티 우선 CSS 프레임워크
- **Framer Motion**: 애니메이션 라이브러리
- **Lucide React**: 아이콘 라이브러리

## 🚀 로컬 개발

### 필수 요구사항
- Node.js 18+
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

개발 서버는 `http://localhost:3000`에서 실행됩니다.

## 📦 GitHub Pages 배포

### 자동 배포 설정

1. **GitHub 저장소 생성**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/dacheaum.git
   git push -u origin main
   ```

2. **GitHub Pages 활성화**
   - 저장소 Settings → Pages
   - Source: GitHub Actions 선택

3. **자동 배포**
   - `main` 브랜치에 푸시하면 자동으로 배포됩니다
   - 배포된 사이트: `https://username.github.io/dacheaum`

### 수동 배포

```bash
# 정적 사이트 빌드
npm run build

# out 폴더가 생성되며, 이 폴더의 내용을 GitHub Pages에 업로드
```

## 🎨 커스터마이징

### 섹션 수정
각 섹션은 독립적인 컴포넌트로 구성되어 있어 쉽게 수정할 수 있습니다:

```typescript
// 예: 학교 사례 추가
// src/components/SchoolCasesSection.tsx
const schoolCases = [
  {
    name: "새로운 학교",
    description: "새로운 활용 사례",
    features: ["기능1", "기능2"],
    achievements: ["성과1", "성과2"],
    icon: "🏫"
  }
  // ... 기존 학교들
];
```

### 스타일 수정
Tailwind CSS 클래스를 사용하여 스타일을 쉽게 수정할 수 있습니다:

```typescript
// 배경색 변경
className="bg-blue-50 dark:bg-gray-900"

// 텍스트 색상 변경
className="text-gray-900 dark:text-white"
```

## 📱 반응형 디자인

- **모바일**: 320px ~ 768px
- **태블릿**: 768px ~ 1024px
- **데스크톱**: 1024px+

## 🌙 다크 모드

- 시스템 테마 자동 감지
- 사용자 선택 테마 기억
- 부드러운 전환 애니메이션

## 📄 라이선스

이 프로젝트는 교육 목적으로 제작되었습니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

충청북도교육청 다채움 플랫폼 관련 문의사항이 있으시면 연락해주세요.