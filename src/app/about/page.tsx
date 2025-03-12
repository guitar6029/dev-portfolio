"use client";
import { useState, useEffect } from "react";

const roles: string[] = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "UI/UX Designer",
];

export default function About() {
  const [roleIndex, setRoleIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      //change the role index every 3 seconds
      if (roleIndex === roles.length - 1) {
        setRoleIndex(0);
      } else {
        setRoleIndex(roleIndex + 1);
      }
    }, 10000);

    //clean up
    return () => clearInterval(interval);
  }, [roleIndex]);

  return (
    <div className="flex flex-col min-h-screen justify-center animate-slide-in-right">
      <div className="relative flex flex-col gap-2 p-4">
        <h1 className="text-6xl font-bold text-amber-400 underline">
          About Me
        </h1>
        <p className="text-2xl mt-5">
          I&apos;m a{" "}
          <span className="font-bold bg-amber-500 p-1 rounded-lg">
            {roles[roleIndex]}
          </span>{" "}
          passionate about building scalable, high-performance web applications.
          With expertise in <span className="font-bold">Vue.js</span>,{" "}
          <span className="font-bold">React.js</span>, and{" "}
          <span className="font-bold">TypeScript</span>, I specialize in
          crafting reusable UI components, integrating APIs, and optimizing user
          experiences. My backend experience with{" "}
          <span className="font-bold">Node.js</span>,{" "}
          <span className="font-bold">MongoDB</span>, and{" "}
          <span className="font-bold">Express.js</span> gives me a full-stack
          perspective, allowing me to develop seamless and efficient
          applications.
        </p>
        <p className="text-2xl">
          I thrive in fast-paced startup environments, working closely with
          teams to solve complex problems, enhance product scalability, and
          deliver impactful solutions.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <a
            className="text-2xl p-3 md:w-[15rem] md:text-center rounded-xl bg-amber-50 text-black"
            href="https://www.linkedin.com/in/joshsoll/"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            className="text-2xl p-3 rounded-xl md:w-[15rem] md:text-center bg-amber-50 text-black"
            href="https://github.com/guitar6029"
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
     
    </div>
  );
}
