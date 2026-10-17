
import TechIcon from "./TechIcon";

export default function AboutMe() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 h-screen relative">

      <div className="relative w-full flex flex-row items-center justify-center trns lg:hover:scale-105">
        <div className="trns hover:text-(--blue) relative z-10 flex flex-col items-center justify-center gap-4 mt-10">
          <span className="text-4xl lg:text-8xl font-space ">About Me</span>
          <p className="w-full text-center lg:max-w-4xl text-2xl lg:text-4xl">
            I&apos;m a Software Engineer focused on building modern web applications
            using TypeScript and the JavaScript ecosystem. I work across
            numerous libraries and frameworks—including React, Next.js, and
            Vue—choosing the right tools for the problem rather than locking
            into a single stack. My work involves designing scalable interfaces,
            integrating APIs, and building data-driven dashboards. I enjoy
            turning complex technical problems into simple, intuitive user
            experiences.
          </p>
          <div className="flex items-center text-6xl gap-4">
            <a
              href="https://github.com/guitar6029"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TechIcon
                name="github"
                className="trns hover:text-(--cp-purple) hover:scale-105"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/joshsoll/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TechIcon
                name="linkedin"
                className="trns hover:text-(--cp-purple) hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
