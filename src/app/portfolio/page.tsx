import Link from "next/link";
import { connectToDatabase } from "@/lib/mongodb"; // Adjust the import path if necessary

export default async function Projects() {
  // Connect to the database
  const { db } = await connectToDatabase();

  // Fetch the list of GitHub projects
  const projects = await db
    .collection("github-projects") // Use your collection name
    .find({})
    .toArray();

  return (
    <div className="min-h-screen mt-5 flex flex-col p-4">
      <h1 className="text-6xl font-bold ">Portfolio</h1>
      <div className="mt-6 flex flex-row flex-wrap gap-4">
        {projects.map((project, index) => (
          <Link
            href={`/portfolio/${project._id.toString()}`}
            key={project._id.toString()}
            className="group relative p-4 flex flex-col justify-center gap-4 w-[100%] md:w-[20rem] h-[15rem] border-3 border-neutral-700 rounded-xl shadow-lg shadow-neutral-900 hover:bg-amber-300 transition duration-300 ease-in hover:text-black hover:border-white overflow-hidden"
            style={{
              opacity: 0,
              animation: `fadeIn 1.5s ease-out ${index * 1.5}s forwards`, // Stagger delay by index
            }}
          >
            <div className="mb-4">
              <h2 className="text-4xl font-semibold">{project.title}</h2>
              <p className="text-lg">{project.description}</p>
            </div>
            
          </Link>
        ))}
      </div>
    </div>
  );
}
