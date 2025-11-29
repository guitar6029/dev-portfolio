import AbsoluteWrapper from "@/components/AbsoluteWrapper";
import BoxA from "@/components/Accents/BoxA";
import PanelB from "@/components/Accents/PanelB";
import TechIcon from "@/components/TechIcon";
import { connectToDatabase } from "@/lib/mongodb";
import { TechName } from "@/types/Tech";
import { ObjectId } from "mongodb";
import Link from "next/link";
export default async function Project({
  params,
}: {
  params: Promise<{ _id: string }>;
}) {
  const resolvedParams = await params;

  // Ensure the resolvedParams._id is valid
  if (!resolvedParams._id || !ObjectId.isValid(resolvedParams._id)) {
    return (
      <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
        <h1 className="text-4xl font-bold text-amber-400">Project Not Found</h1>
        <Link
          href={"/portfolio"}
          className="text-2xl p-3 md:w-60 md:text-center rounded-xl bg-amber-50 text-black hover:bg-amber-500 transition duration-300 ease-in"
        >
          Portfolio
        </Link>
      </div>
    );
  }

  const { db } = await connectToDatabase();

  // Fetch project from the database
  const project = await db
    .collection("github-projects")
    .findOne({ _id: new ObjectId(resolvedParams._id) });

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col gap-4items-center justify-center">
        <h1 className="text-4xl font-bold text-(--blue)">Project Not Found</h1>
        <Link
          href={"/projects"}
          className="text-2xl p-3 md:w-60 md:text-center rounded-xl  text-black hover:bg-amber-500 transition duration-300 ease-in"
        >
          Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="relative h-fit mt-10 p-4 flex flex-col items-center justify-center gap-3 animate-slide-in-right">
      <AbsoluteWrapper className="top-0 left-20 h-[70vh]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto"
          viewBox="0 0 448 3393"
          fill="none"
        >
          <path
            d="M0.5 0V495.555C0.5 498.95 2.22198 502.113 5.07314 503.955L149.927 597.545C152.778 599.387 154.5 602.55 154.5 605.945V1302.95C154.5 1305.84 153.247 1308.59 151.064 1310.49L3.93579 1438.51C1.75312 1440.41 0.5 1443.16 0.5 1446.05V1976.5V2377.49C0.5 2380.64 1.98881 2383.61 4.51666 2385.5L150.483 2494.5C153.011 2496.39 154.5 2499.36 154.5 2502.51V3181.8C154.5 3185.06 156.089 3188.11 158.758 3189.99L447.5 3392.5"
            stroke="var(--cp-purple)"
            strokeWidth={5}
          />
        </svg>
      </AbsoluteWrapper>

      <AbsoluteWrapper className="bottom-20 right-0 h-screen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto"
          viewBox="0 0 448 3393"
          fill="none"
        >
          <path
            d="M0.5 0V495.555C0.5 498.95 2.22198 502.113 5.07314 503.955L149.927 597.545C152.778 599.387 154.5 602.55 154.5 605.945V1302.95C154.5 1305.84 153.247 1308.59 151.064 1310.49L3.93579 1438.51C1.75312 1440.41 0.5 1443.16 0.5 1446.05V1976.5V2377.49C0.5 2380.64 1.98881 2383.61 4.51666 2385.5L150.483 2494.5C153.011 2496.39 154.5 2499.36 154.5 2502.51V3181.8C154.5 3185.06 156.089 3188.11 158.758 3189.99L447.5 3392.5"
            stroke="var(--cp-purple)"
            strokeWidth={5}
          />
        </svg>
      </AbsoluteWrapper>

      <AbsoluteWrapper className="bottom-50 right-10 flex flex-col gap-2 opacity-30">
        {Array.from({ length: 3 }).map((_, idx: number) => {
          return <div key={idx} className="w-6 h-6 border"></div>;
        })}
      </AbsoluteWrapper>

      <AbsoluteWrapper className="top-50 left-10 flex flex-col gap-2 animate-ud opacity-30">
        {Array.from({ length: 3 }).map((_, idx: number) => {
          return <div key={idx} className="w-6 h-6 border"></div>;
        })}
      </AbsoluteWrapper>
      <AbsoluteWrapper className="bottom-20 left-10 h-screen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto opacity-40"
          viewBox="0 0 448 3393"
          fill="none"
        >
          <path
            d="M0.5 0V495.555C0.5 498.95 2.22198 502.113 5.07314 503.955L149.927 597.545C152.778 599.387 154.5 602.55 154.5 605.945V1302.95C154.5 1305.84 153.247 1308.59 151.064 1310.49L3.93579 1438.51C1.75312 1440.41 0.5 1443.16 0.5 1446.05V1976.5V2377.49C0.5 2380.64 1.98881 2383.61 4.51666 2385.5L150.483 2494.5C153.011 2496.39 154.5 2499.36 154.5 2502.51V3181.8C154.5 3185.06 156.089 3188.11 158.758 3189.99L447.5 3392.5"
            stroke="var(--cp-purple)"
            strokeWidth={5}
          />
        </svg>
      </AbsoluteWrapper>

      <div className="flex flex-col items-center justify-center gap-12 p-4 z-10 relative ">
        <div className="flex flex-row items-end text-center relative gap-2">
          {Array.from({ length: 3 }).map((_, idx: number) => {
            return (
              <div
                key={idx}
                className="w-2 h-2 border-2 animate-ud"
                style={
                  { "--delay": `${(idx + 1) * 100}ms` } as React.CSSProperties
                }
              ></div>
            );
          })}
          <h1 className="text-6xl font-space text-(--blue)">{project.title}</h1>
        </div>
        <p className="text-3xl">{project.description}</p>
        <div className="flex items-center gap-2 text-4xl font-bold font-space text-(--blue) ">
          <TechIcon name={"tools"} />
          Tools Used
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {project.stack.map((tech: string, index: number) => (
            <div
              className="relative group text-4xl flex flex-row items-center gap-2 justify-center p-4 min-w-55 h-50 animate-slide-in-left"
              key={index}
            >
              <div className="absolute inset-0">
                <PanelB strokeWidth={2} />
              </div>
              <div className="z-10 flex flex-row items-center gap-2">
                <TechIcon name={tech as TechName} />
                <span className="capitalize">{tech}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center items-center gap-2 rounded-xl p-4trns min-w-100">
          <a
            href={project.github}
            target="_blank"
            className="w-full flex items-center justify-center font-bold hover:text-(--cp-purple) trns"
          >
            <TechIcon name={"github" as TechName} className="text-4xl" />
          </a>
        </div>
        {project.preview && (
          <div className="flex flex-row justify-center items-center gap-2 rounded-xl p-4 trns min-w-100 hover:text-(--cp-purple) trns">
            <a href={project.preview} target="_blank" className="font-bold">
              Preview
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
