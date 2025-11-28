import Link from "next/link";
import { connectToDatabase } from "@/lib/mongodb"; // Adjust the import path if necessary
import AbsoluteWrapper from "@/components/AbsoluteWrapper";

export default async function Projects() {
  // Connect to the database
  const { db } = await connectToDatabase();

  // Fetch the list of GitHub projects
  const projects = await db
    .collection("github-projects") // Use your collection name
    .find({})
    .toArray();

  return (
    <div className="min-h-screen mt-5 flex flex-col p-4 relative">
      <AbsoluteWrapper className="-top-20 left-0 h-[100vh]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto"
          viewBox="0 0 448 3393"
          fill="none"
        >
          <path
            d="M0.5 0V495.555C0.5 498.95 2.22198 502.113 5.07314 503.955L149.927 597.545C152.778 599.387 154.5 602.55 154.5 605.945V1302.95C154.5 1305.84 153.247 1308.59 151.064 1310.49L3.93579 1438.51C1.75312 1440.41 0.5 1443.16 0.5 1446.05V1976.5V2377.49C0.5 2380.64 1.98881 2383.61 4.51666 2385.5L150.483 2494.5C153.011 2496.39 154.5 2499.36 154.5 2502.51V3181.8C154.5 3185.06 156.089 3188.11 158.758 3189.99L447.5 3392.5"
            stroke="var(--cp-purple)"
            strokeWidth={1}
          />
        </svg>
      </AbsoluteWrapper>
      <AbsoluteWrapper className="bottom-20 right-0 h-[100vh]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto"
          viewBox="0 0 448 3393"
          fill="none"
        >
          <path
            d="M0.5 0V495.555C0.5 498.95 2.22198 502.113 5.07314 503.955L149.927 597.545C152.778 599.387 154.5 602.55 154.5 605.945V1302.95C154.5 1305.84 153.247 1308.59 151.064 1310.49L3.93579 1438.51C1.75312 1440.41 0.5 1443.16 0.5 1446.05V1976.5V2377.49C0.5 2380.64 1.98881 2383.61 4.51666 2385.5L150.483 2494.5C153.011 2496.39 154.5 2499.36 154.5 2502.51V3181.8C154.5 3185.06 156.089 3188.11 158.758 3189.99L447.5 3392.5"
            stroke="var(--cp-purple)"
            strokeWidth={2}
          />
        </svg>
      </AbsoluteWrapper>
      <div className="mt-6 flex flex-row flex-wrap gap-4">
        {projects.map((project, index) => (
          <Link
            href={`/portfolio/${project._id.toString()}`}
            key={project._id.toString()}
            className="group relative p-4 flex flex-col items-center justify-center gap-4 w-full md:w-200 h-60 border-3 border-neutral-700 rounded-xl shadow-lg shadow-neutral-900 hover:bg-(--bg-hover) transition duration-300 ease-in hover:border-white overflow-hidden"
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
