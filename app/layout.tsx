import NavBar from "components/NavBar";
import { ThemeProvider } from "components/ThemeProvider";
import type { Metadata } from "next";
import { Inter, Noto_Sans_KR, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ["latin"], // 또는 preload: false
  weight: ["400"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

export const metadata: Metadata = {
  title: "Tami Kim",
  description: "Tami Kim's Dev Blog",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      {/* title */}
      <head>
        <title>Tami Kim</title>
        {/* will add meta tag */}
      </head>
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${notoSansKr.className}`}
      >
        {/* wrap with ThemeProvider */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4 selection:bg-slate-300 dark:selection:bg-slate-800 ">
            <header>
              <NavBar />
            </header>

            {/* children will be all the pages */}
            <main className="my-5">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
