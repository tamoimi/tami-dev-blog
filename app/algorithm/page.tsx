import PostNav from "components/PostNav";
import AlgorithmCard from "components/AlgorithmCard";
import { allAlgorithms } from "contentlayer/generated";
import { compareDesc } from "date-fns";

const Algorithms = () => {
  const algorithms = allAlgorithms.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  return (
    <div className="my-10">
      <PostNav />
      <article>
        <div className="mx-auto">
          {algorithms.map((algorithm, idx) => (
            <AlgorithmCard key={idx} {...algorithm} />
          ))}
        </div>
      </article>
    </div>
  );
};
export default Algorithms;
