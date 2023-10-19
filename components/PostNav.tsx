"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const PostNav = () => {
  const router = usePathname();

  return (
    <ul className="flex content-center text-xs font-medium text-center text-gray-500 dark:text-gray-400 mb-10">
      <li className="mr-2">
        <Link
          href="/post"
          passHref
          className={`inline-block px-4 py-3 ${
            router === "/post" ? "bg-gray-100 dark:bg-gray-800" : ""
          } rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white transition-colors duration-300 ease-in-out`}
        >
          Post
        </Link>
      </li>
      <li className="mr-2">
        <Link
          href="#"
          passHref
          className={`inline-block px-4 py-3 ${
            router === "/javascript" ? "bg-gray-100 dark:bg-gray-800" : ""
          } rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white transition-colors duration-300 ease-in-out`}
        >
          JavaScript
        </Link>
      </li>
      <li className="mr-2">
        <Link
          href="/algorithm"
          passHref
          className={`inline-block px-4 py-3  ${
            router === "/algorithm" ? "bg-gray-100 dark:bg-gray-800" : ""
          } rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white transition-colors duration-300 ease-in-out`}
        >
          Algorithm
        </Link>
      </li>
      <li className="mr-2">
        <Link
          href="#"
          passHref
          className={`inline-block px-4 py-3 ${
            router === "/library" ? "bg-gray-100 dark:bg-gray-800" : ""
          } rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white transition-colors duration-300 ease-in-out`}
        >
          Library
        </Link>
      </li>
    </ul>
  );
};

export default PostNav;
