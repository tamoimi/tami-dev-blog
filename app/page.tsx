import Link from "next/link";
import Navigation from "../components/Nav";

export default function Home() {
  return (
    <div className="container ">
      {/* introduction */}
      <main>
        <h1 className="font-bold mb-3">Tami Kim</h1>
        <h2 className="my-5">
          I&#39;m a Front End developer based in South Korea. I&#39;m interested
          in dev rel, design systems, web3, user/dev experience and under
          engineering.
        </h2>
        <h2>
          I&#39;m currently working at OP as a Front End developer to grow its
          payment solution.
        </h2>
        <h2></h2>
      </main>

      {/* post section*/}
      <div className="mx-auto"></div>

      {/* footer section or not will see */}
      <div className="mx-auto"></div>
    </div>
  );
}
