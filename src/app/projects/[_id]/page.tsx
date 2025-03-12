import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import Link from "next/link";
export default async function Project({
  params,
}: {
  params: Promise<{ _id: string }>;
}) {
  // ✅ Await the params object correctly
  const resolvedParams = await params;

  // Ensure the resolvedParams._id is valid
  if (!resolvedParams._id || !ObjectId.isValid(resolvedParams._id)) {
    return (
      <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
        <h1 className="text-4xl font-bold text-amber-400">Project Not Found</h1>
        <Link
          href={"/projects"}
          className="text-2xl p-3 md:w-[15rem] md:text-center rounded-xl bg-amber-50 text-black hover:bg-amber-500 transition duration-300 ease-in"
        >
          Go to Projects
        </Link>
      </div>
    )
  }

  const { db } = await connectToDatabase();

  // Fetch project from the database
  const project = await db
    .collection("github-projects")
    .findOne({ _id: new ObjectId(resolvedParams._id) });

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col gap-4items-center justify-center">
        <h1 className="text-4xl font-bold text-amber-400">Project Not Found</h1>
        <Link
          href={"/projects"}
          className="text-2xl p-3 md:w-[15rem] md:text-center rounded-xl bg-amber-50 text-black hover:bg-amber-500 transition duration-300 ease-in"
        >
          Go to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 flex flex-col gap-3 animate-slide-in-right">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold text-amber-400 underline">
          {project.title}
        </h1>
        <p className="text-3xl">{project.description}</p>
        <h1 className="text-4xl font-bold text-amber-400 underline">
          Tools Used:
        </h1>
        <ul className="list-disc list-inside">
          {project.stack.map((tech: string) => (
            <li className="text-3xl" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
        <a
          href={project.github}
          target="_blank"
          className="text-black w-[100%] md:w-[15rem] font-bold text-center rounded-xl p-3 bg-amber-50 hover:bg-amber-500 transition duration-300 ease-in"
        >
          Github Repo
        </a>
        {project.preview && (
          <a
            href={project.preview}
            target="_blank"
            className="text-black w-[100%] md:w-[15rem] font-bold text-center rounded-xl p-3 bg-amber-50 hover:bg-amber-500 transition duration-300 ease-in"
          >
            Live Preview
          </a>
        )}
      </div>
    </div>
  );
}
