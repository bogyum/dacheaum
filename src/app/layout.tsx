import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "다채움 활용 수업 모델 | 디지털 전환 시대의 교육 혁신",
  description: "2022 개정 교육과정과 AI·디지털 전환 시대에 맞는 다채움 플랫폼 활용 수업 모델. 학교 간 활용 격차 해소 및 표준 수업 모델을 통한 교육 혁신을 제시합니다.",
  keywords: [
    "다채움",
    "교육 플랫폼", 
    "디지털 전환",
    "AI 교육",
    "2022 개정 교육과정",
    "수업 모델",
    "교육 혁신",
    "충청북도교육청"
  ],
  authors: [{ name: "충청북도교육청" }],
  creator: "충청북도교육청",
  publisher: "충청북도교육청",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dcu.cbe.go.kr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "다채움 활용 수업 모델",
    description: "디지털 전환 시대의 교육 혁신을 위한 표준 수업 모델",
    url: 'https://dcu.cbe.go.kr',
    siteName: '다채움 플랫폼',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "다채움 활용 수업 모델",
    description: "디지털 전환 시대의 교육 혁신을 위한 표준 수업 모델",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#667eea" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const shouldBeDark = theme ? theme === 'dark' : systemTheme;
                  
                  if (shouldBeDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  // localStorage 접근 실패 시 기본값 사용
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}