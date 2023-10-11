import StudyCard from "components/StudyCard";
import { allStudies } from "contentlayer/generated";
import { compareDesc } from "date-fns";

const Studies = () => {
  const studies = allStudies.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  return (
    <div className="my-10">
      <article>
        <div className="mx-auto">
          {studies.map((study, idx) => (
            <StudyCard key={idx} {...study} />
          ))}
        </div>
      </article>
    </div>
  );
};
export default Studies;
