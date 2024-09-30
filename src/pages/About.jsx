import React from "react";
import aboutman from "../assets/man.png"

const About = () => {
  return (
    <>
    <h1 className="hidden md:block text-center text-4xl text-white font-bold uppercase py-6" id="about">About Me</h1>
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid md:grid-cols-2 gap-4 max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-center">
          <img src={aboutman} alt="" className="w-full max-w-md " />
        </div>

        <div className="flex flex-col justify-center space-y-7 text-white">
          <p className="text-lg text-justify">
            I have a solid foundation in front-end and back-end development, and
            I enjoy turning complex problems into simple, beautiful, and
            intuitive designs. I am excited to apply my knowledge and grow as a
            developer by working on real-world projects and collaborating with
            experienced professionals.
          </p>
          <h2 className="text-2xl font-bold gap-2 underline ">
            Key Skills:
            <ul className="space-y-4 pt-2 text-lg">
              <li>
                <span className="font-bold text-xl">Front-end:</span> HTML, CSS,
                JavaScript, React.js
              </li>
              <li>
                <span className="font-bold text-xl">Back-end:</span> Node.js,
                Express.js
              </li>
              <li>
                <span className="font-bold text-xl">Databases:</span> MongoDB
              </li>
              <li>
                <span className="font-bold text-xl">Tools:</span> Git, GitHub,
                Vite, Bootstrap, Tailwind CSS
              </li>
            </ul>
          </h2>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
