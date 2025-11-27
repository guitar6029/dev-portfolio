export default function Shape1({
  className = "",
  fill = "var(--bg-hover)",
  stroke = "var(--blue-glow)",
  strokeWidth = 1,
}: {
  className?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}) {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 987 1075"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      >
        <path d="M216.5 0.5H395H739L986 198.5V741L739 1074.5H216.5V741L0.5 444.5V198.5L216.5 0.5Z" />
      </svg>
    </div>
  );
}
