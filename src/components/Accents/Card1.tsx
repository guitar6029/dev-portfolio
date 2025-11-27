type CardProps = {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
};

export default function Card1({
  className = "w-100 h-100",
  fill = "currentColor",
  stroke = "black",
  strokeWidth = 1,
}: CardProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 501 201"
      fill={fill}
      className={className}
    >
      <path
        d="M0.5 68.9757L67.6424 0.501953L500.5 3.85942V113.27L435.993 200.502H0.5V68.9757Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
