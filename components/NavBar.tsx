"use client";

import { ModeToggle } from "components/ModeToggle";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function NavBar() {
  const currentRoute = usePathname();
  return (
    <div className="flex items-center justify-between">
      {/* mode toggle */}
      <ModeToggle />
      <nav className="ml-auto text-sm font-medium space-x-6 flex items-center justify-between">
        <Link
          href="/"
          passHref
          //   className={`inline-block px-4 py-3 ${
          //     currentRoute === "/" ? "bg-gray-100 dark:bg-gray-800" : ""
          //   } rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white `}
          className={`${
            currentRoute === "/" ? "underline decoration-wavy decoration-cyan-600" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${
            currentRoute === "/about" ? "underline decoration-wavy decoration-cyan-600" : ""
          }`}
        >
          About
        </Link>
        <Link
          href="/post"
          className={`${
            currentRoute === "/post" ? "underline decoration-wavy decoration-cyan-600" : ""
          }`}
        >
          Post
        </Link>
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
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
            <line x1="12" y1="12" x2="12" y2="12.01" /> <line x1="8" y1="12" x2="8" y2="12.01" />
            <line x1="16" y1="12" x2="16" y2="12.01" />
          </svg>
        </Link>
      </nav>
    </div>
  );
}
