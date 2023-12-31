import { ModeToggle } from "components/ModeToggle";
import { ThemeProvider } from "components/ThemeProvider";
import type { Metadata } from "next";
import { Inter, Noto_Sans_KR, Roboto } from "next/font/google";
import Link from "next/link";
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
  description: "Tami Kim Dev Blog",
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
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/post">Post</Link>
                  <Link href="/quote">
                    <svg
                      className="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" /> <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                      <line x1="12" y1="12" x2="12" y2="12.01" /> <line x1="8" y1="12" x2="8" y2="12.01" />
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
