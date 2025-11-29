type LineAProps = {
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
};
export default function LineA({
  fill = "none",
  stroke = "var(--blue-glow)",
  strokeWidth = 1,
  className = "w-full",
}: LineAProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 2339 185"
      fill={fill}
    >
      <path
        d="M0 184H1100.96C1104.13 184 1107.11 182.499 1109 179.954L1239 4.54563C1240.89 2.00077 1243.87 0.5 1247.04 0.5H2339"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
