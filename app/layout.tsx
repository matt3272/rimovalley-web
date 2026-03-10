import type { Metadata } from "next";
import { Montserrat, Noto_Sans_KR, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "리모밸리 주식회사 | RimoValley",
  description:
    "앱·웹 개발부터 페이먼트 시스템 구축까지, 비즈니스의 디지털 전환을 설계하고 실현합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${montserrat.variable} ${notoSansKR.variable} ${jetbrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
