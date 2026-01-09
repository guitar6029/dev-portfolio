import Link from "next/link";
import { connectToDatabase } from "@/lib/mongodb";
import AbsoluteWrapper from "@/components/AbsoluteWrapper";

const COLORS = ["var(--cp-purple)", "var(--blue)", "var(--red)"];

export default async function Projects() {
  // Connect to the database
  const { db } = await connectToDatabase();

  // Fetch the list of GitHub projects
  const projects = await db
    .collection("github-projects") // Use your collection name
    .find({})
    .toArray();

  function getColorForCard() {
    const randomColor = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomColor];
  }

  return (
    <div className="mt-5 flex flex-col p-4 relative">
      <AbsoluteWrapper className="-top-20 left-20 h-screen -z-1">
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
      <AbsoluteWrapper className="bottom-20 right-0 h-screen -z-1">
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
      <div className="mt-12 ml-12 flex flex-col items-center  xl:flex-row xl:flex-wrap gap-50">
        {projects.map((project, index) => (
          <Link
            href={`/portfolio/${project._id.toString()}`}
            key={project._id.toString()}
            className="group relative p-4 flex flex-col items-center justify-center gap-12 w-100 trns group"
            style={{
              opacity: 0,
              animation: `fadeIn 1.5s ease-out ${index * 1.5}s forwards`, // Stagger delay by index
            }}
          >
            <div className="inset-0 absolute z-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto group-hover:scale-105"
                viewBox="0 0 769 443"
                fill="none"
              >
                <path
                  d="M32.5 427.5H16.5V82.5L84.5 20.5H752.5V50.5M32.5 427.5H692.5L752.5 365.5V50.5M32.5 427.5V442.5H700.5L768.5 371.5V50.5H752.5M738.5 0.5H768.5V28H766.5V2.5H738.5V0.5ZM0.5 101.5V306.5H6V101.5H0.5ZM0.5 312H6V332H0.5V312Z"
                  stroke={getColorForCard()}
                  strokeWidth={4}
                />
              </svg>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-between gap-4 p-4">
              <h2 className="text-4xl font-bold font-exo uppercase">
                {project.title}
              </h2>
              <p className="text-lg line-clamp-3">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
