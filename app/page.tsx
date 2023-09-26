import PostCard from "components/PostCard";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";

export default function Home() {
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
        <Link href="/post" className="font-bold  hover:text-cyan-600">
          Post
        </Link>
        {/* posts */}
        <article className="mt-5">
          <div className="mx-auto">
            {posts.map((post, idx) => (
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

// solution,
