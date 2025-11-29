import Link from "next/link";
export default function NotFound() {
  return (
    <div className="relative h-screen flex flex-col gap-4 items-center justify-center">
      <div className="absolute flex items-center justify-center pointer-events-none w-100 md:w-140 z-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-auto h-full"
          viewBox="0 0 438 340"
          fill="none"
        >
          <path
            d="M0.428955 87L47.429 8.5M90.929 338.5H410.929M11.429 160L42.429 192.5M380.429 106.5L424.929 302.5M6.92896 91L51.929 12H410.929L370.929 91L424.929 330.5H78.929L51.929 192.5L6.92896 141V91ZM376.929 5.5H419.429L404.929 37H410.929L426.929 0.5H384.429L376.929 5.5Z"
            stroke="#E6E21C"
            strokeWidth={2}
          />
          <rect
            x="59.429"
            y="1"
            width="7"
            height="6"
            fill="black"
            stroke="var(--gray)"
          />
          <rect
            x="68.429"
            y="1"
            width="7"
            height="6"
            fill="black"
            stroke="var(--gray)"
          />
          <rect
            x="77.429"
            y="1"
            width="7"
            height="6"
            fill="black"
            stroke="var(--gray)"
          />
          <rect
            x="86.429"
            y="1"
            width="7"
            height="6"
            fill="black"
            stroke="var(--gray)"
          />
          <rect
            x="333.429"
            y="1"
            width="7"
            height="6"
            fill="black"
            stroke="var(--gray)"
          />
          <rect
            x="342.429"
            y="1"
            width="7"
            height="6"
            fill="black"
            stroke="var(--gray)"
          />
          <rect
            x="351.429"
            y="1"
            width="7"
            height="6"
            fill="black"
            stroke="var(--gray)"
          />
          <rect
            x="360.429"
            y="1"
            width="7"
            height="6"
            fill="black"
            stroke="var(--gray)"
          />
          <rect
            x="68.3033"
            y="297"
            width="7"
            height="6"
            transform="rotate(78.2541 68.3033 297)"
            fill="black"
            stroke="var(--gray)"
          />
          <rect
            x="70.1356"
            y="305.812"
            width="7"
            height="6"
            transform="rotate(78.2541 70.1356 305.812)"
            fill="black"
            stroke="var(--gray)"
          />
          <rect
            x="71.9677"
            y="314.623"
            width="7"
            height="6"
            transform="rotate(78.2541 71.9677 314.623)"
            fill="black"
            stroke="var(--gray)"
          />
          <rect
            x="73.7998"
            y="323.435"
            width="7"
            height="6"
            transform="rotate(78.2541 73.7998 323.435)"
            fill="black"
            stroke="var(--gray)"
          />
          <rect
            x="429.221"
            y="304.875"
            width="7"
            height="6"
            transform="rotate(75.3353 429.221 304.875)"
            fill="black"
            stroke="var(--gray)"
          />
          <rect
            x="431.499"
            y="313.582"
            width="7"
            height="6"
            transform="rotate(75.3353 431.499 313.582)"
            fill="black"
            stroke="var(--gray)"
          />
          <rect
            x="433.778"
            y="322.289"
            width="7"
            height="6"
            transform="rotate(75.3353 433.778 322.289)"
            fill="black"
            stroke="var(--gray)"
          />
          <rect
            x="436.056"
            y="330.996"
            width="7"
            height="6"
            transform="rotate(75.3353 436.056 330.996)"
            fill="black"
            stroke="var(--gray)"
          />
        </svg>
      </div>
      <div className="relative z-10 font-space flex flex-col gap-10 items-center justify-center">
        <h1 className="text-4xl md:text-6xl text-(--cp-purple) ">
          Page Not Found
        </h1>
        <div className="flex flex-col gap-2">
          <Link href={"/"} className="text-2xl p-3 md:w-60 md:text-center ">
            Home
          </Link>
          <Link
            href={"/portfolio"}
            className="text-2xl p-3 md:w-60 md:text-center "
          >
            Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
