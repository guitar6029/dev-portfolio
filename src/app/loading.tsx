import Panel1 from "@/components/Accents/PanelA";

export default function Loading() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full">
      <div className="relative w-150 h-50 flex flex-col items-center justify-center gap-2">
        <div className="absolute inset-0 w-full ">
          <Panel1 stroke="var(--cp-purple)" strokeWidth={2} />
        </div>
        <span className="uppercase text-4xl font-space relative z-10">
          Loading...
        </span>
      </div>
    </div>
  );
}
