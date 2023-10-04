import type { Metadata } from "next";
import { Inter, Noto_Sans_KR, Roboto } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ModeToggle } from "components/ModeToggle";
import { ThemeProvider } from "components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ["latin"], // 또는 preload: false
  weight: ["100", "400", "700", "900"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
              <div className="flex items-center justify-between">
                {/* mode toggle */}
                <ModeToggle />
                <nav className="ml-auto text-sm font-medium space-x-6 flex items-center justify-between">
                  <Link href="/">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </Link>
                  <Link href="/about">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" /> <path d="M8 14s1.5 2 4 2 4-2 4-2" />{" "}
                      <line x1="9" y1="9" x2="9.01" y2="9" /> <line x1="15" y1="9" x2="15.01" y2="9" />
                    </svg>
                  </Link>
                  <Link href="/post">
                    <svg
                      className="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" /> <rect x="5" y="3" width="14" height="18" rx="2" />
                      <line x1="9" y1="7" x2="15" y2="7" /> <line x1="9" y1="11" x2="15" y2="11" />
                      <line x1="9" y1="15" x2="13" y2="15" />
                    </svg>
                  </Link>
                  <Link href="/quote">
                    <svg
                      className="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" /> <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />{" "}
                      <line x1="12" y1="12" x2="12" y2="12.01" /> <line x1="8" y1="12" x2="8" y2="12.01" />{" "}
                      <line x1="16" y1="12" x2="16" y2="12.01" />
                    </svg>
                  </Link>
                </nav>
              </div>
            </header>

            {/* children will be all the pages */}
            <main className="my-5">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
