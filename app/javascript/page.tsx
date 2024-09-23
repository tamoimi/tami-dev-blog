import JavaScriptCard from "components/java-script-card";
import PostNav from "components/post-nav";
import { allJavaScripts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

const Javascript = () => {
  const javaScripts = allJavaScripts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  return (
    <div className="my-10">
      <PostNav />
      <article>
        <div className="mx-auto">
          {javaScripts.map((javaScript, idx) => (
            <JavaScriptCard key={idx} {...javaScript} />
          ))}
        </div>
      </article>
    </div>
  );
};
export default Javascript;
