import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function Project({ params }: { params: Promise<{ _id: string }> }) {
  // ✅ Await the params object correctly
  const resolvedParams = await params;

  // Ensure the resolvedParams._id is valid
  if (!resolvedParams._id || !ObjectId.isValid(resolvedParams._id)) {
    return <h1>Error: Invalid Project ID</h1>;
  }

  const { db } = await connectToDatabase();

  // Fetch project from the database
  const project = await db
    .collection("github-projects")
    .findOne({ _id: new ObjectId(resolvedParams._id) });

  if (!project) return <h1>Project not found</h1>;

  return (
    <div className="min-h-screen p-4 flex flex-col gap-3 animate-slide-in-right">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold text-amber-400 underline">
          {project.title}
        </h1>
        <p className="text-3xl">{project.description}</p>
        <h1 className="text-4xl font-bold text-amber-400 underline">Tools Used:</h1>
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
            Take a look
          </a>
        )}
      </div>
    </div>
  );
}
