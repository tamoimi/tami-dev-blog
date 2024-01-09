import Image from "next/image";

const About = () => {
  return (
    <div className="my-10 text-base">
      {/* add gif */}
      <div className="m-auto">
        {/* <Image src="/giphy.gif" alt="Computer man" width={0} height={0} sizes="100vw"/> */}
        <Image src="/giphy.gif" alt="Computer man" width={500} height={300} />
        {/* <p className="my-5">
          I am still working on my new blog 🦦 <br />
        </p> */}
        <p className="my-5">
          Front End developer, living in everywhere 🌎 <br /> I will meet you very soon!
        </p>
        <div className="flex space-x-3 mt-6 text-gray-500 dark:text-gray-400 text-sm">
          <button
            type="button"
            className="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <a href="https://github.com/tamoimi">GitHub</a>
          </button>
          <button className="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
            <a href="https://www.linkedin.com/in/tamiortami/">LinkedIn</a>
          </button>
          <button className="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
            <a href="#">CV</a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default About;
