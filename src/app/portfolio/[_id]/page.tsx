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
    <div className="relative h-screen p-4 flex flex-col items-center justify-center gap-3 animate-slide-in-right">
      <div className="flex flex-col items-center justify-center gap-12 p-4 z-10 relative ">
        <h1 className="text-6xl font-space text-(--blue)">{project.title}</h1>
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
