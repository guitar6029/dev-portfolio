import Link from "next/link";
import { connectToDatabase } from "@/lib/mongodb"; // Adjust the import path if necessary
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
    <div className="min-h-screen mt-5 flex flex-col p-4 relative">
      {/* <AbsoluteWrapper className="bottom-20 left-20 h-[20vh]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-auto h-full"
          viewBox="0 0 150 133"
          fill="none"
        >
          <path
            d="M123.202 132.11H105.79L149.319 85.875V101.287L123.202 132.11Z"
            stroke="black"
          />
          <path
            d="M149.319 70.4632L88.3781 132.11H70.9663L149.319 55.0515V70.4632Z"
            stroke="black"
          />
          <path
            d="M149.319 132.11V116.699L136.26 132.11H149.319Z"
            stroke="black"
          />
          <path
            d="M149.319 39.6397L53.5546 132.11H36.1428L149.319 24.2279V39.6397Z"
            stroke="black"
          />
          <path
            d="M149.319 16.5221V1.11029L1.31927 132.11H18.731L149.319 16.5221Z"
            stroke="black"
          />
        </svg>
      </AbsoluteWrapper> */}
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
      <div className="mt-6 flex flex-col items-center justify-center md:flex-row md:flex-wrap gap-4">
        {projects.map((project, index) => (
          <Link
            href={`/portfolio/${project._id.toString()}`}
            key={project._id.toString()}
            className="group relative p-4 flex flex-col items-center justify-center gap-4 w-full md:w-200 h-100"
            style={{
              opacity: 0,
              animation: `fadeIn 1.5s ease-out ${index * 1.5}s forwards`, // Stagger delay by index
            }}
          >
            <div className="inset-0 absolute z-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-auto h-full"
                viewBox="0 0 769 443"
                fill="none"
              >
                <path
                  d="M32.5 427.5H16.5V82.5L84.5 20.5H752.5V50.5M32.5 427.5H692.5L752.5 365.5V50.5M32.5 427.5V442.5H700.5L768.5 371.5V50.5H752.5M738.5 0.5H768.5V28H766.5V2.5H738.5V0.5ZM0.5 101.5V306.5H6V101.5H0.5ZM0.5 312H6V332H0.5V312Z"
                  stroke={getColorForCard()}
                />
              </svg>
            </div>
            <div className="relative mb-4 z-10 flex flex-col items-center justify-center ">
              <h2 className="text-4xl font-bold">{project.title}</h2>
              <p className="text-lg">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
