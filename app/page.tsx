"use client";

import PostCard from "components/PostCard";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const router = usePathname();
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="container ">
      {/* introduction */}
      <main className="my-10">
        <h1 className="font-bold mb-3">Tami Kim</h1>
        <h2 className="my-5">
          I&#39;m a Front End developer based in South Korea. I&#39;m passion for creating visually stunning and
          user-friendly websites.
        </h2>
        <h2>I&#39;m currently working at Optatum Platform as a Front End developer to grow its payment solution.</h2>
      </main>
      <div className="my-10">
        <Link href="/post" className="font-bold">
          Post
        </Link>
        {/* posts */}
        <article className="mt-5">
          <div className="mx-auto">
            {posts.slice(0, 5).map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))}
          </div>
          <Link
            href="/post"
            passHref
            className={`inline-block px-4 py-2 ${
              router === "/post" ? "bg-gray-100 dark:bg-gray-800" : ""
            } rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white `}
          >
            more
          </Link>
        </article>
      </div>
      {/* footer */}
      <footer className="mx-auto"></footer>
    </div>
  );
}
