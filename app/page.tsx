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
          I&#39;m a Front-End developer based in South Korea, specializing in creating polished, user-friendly, and
          accessible web applications.
        </h2>
        <h2 className="my-5">
          Currently, I work at{" "}
          <a href="https://www.optatumplatform.com/" className="hover:underline">
            Optatum Platform
          </a>{" "}
          as a Front-End developer to enhance their payment solution.
        </h2>
      </main>
      <div className="my-10">
        <Link href="/post" className="font-bold">
          Post
        </Link>
        {/* posts */}
        <article className="mt-5">
          <div className="mx-auto ">
            {posts.slice(0, 5).map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))}
          </div>
        </article>
      </div>
      {/* footer */}
      <footer className="mx-auto"></footer>
    </div>
  );
}
