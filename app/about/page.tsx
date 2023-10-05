const About = () => {
  return (
    <div className="my-10">
      {/* add gif */}
      <div className="m-auto">
        <p className="mb-5">
          I am still working on my new blog 🦦 <br />
        </p>
        <p>
          Front End developer, living in everywhere 🌎 <br /> I will meet you very soon!
        </p>
        <div className="flex space-x-2 mt-6">
          <button type="button" className="bg-teal-600 text-teal-50 p-1 rounded-md hover:bg-teal-500 transition-all">
            <a href="https://github.com/tamoimi">GitHub</a>
          </button>
          <button className="bg-teal-600 text-teal-50 p-1 rounded-md  hover:bg-teal-500 transition-all">
            <a href="https://www.linkedin.com/in/tamiortami/">LinkedIn</a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default About;
