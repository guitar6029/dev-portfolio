export default function AnimatedShapesMoving({
  shapes = 3,
  className = "w-16 h-16 absolute bottom-40 rounded-xl border-2 animated-shapes",
  direction = "right",
}: {
  shapes?: number;
  className?: string;
  direction?: "left" | "right";
}) {
  return (
    <>
      {Array.from({ length: shapes }).map((_, i) => (
        <div
          key={i}
          className={className}
          style={
            {
              "--delay": `${Math.floor(Math.random() * 250)}ms`,
              [direction]: `${i * 120}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </>
  );
}
