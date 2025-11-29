type PanelB = {
  className?: string;
  fill?: string;
  pathClassName?: string;
  stroke?: string;
  strokeWidth?: number;
};

export default function PanelB({
  className = "absolute inset-0 w-full h-full",
  fill = "none",
  pathClassName = "group-hover:stroke-(--blue) trns",
  stroke = "gray",
  strokeWidth = 2,
}: PanelB) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 161 133"
      fill={fill}
    >
      <path
        d="M1.76201 55.7323L29.6411 5.63712C31.4058 2.46608 34.75 0.5 38.3791 0.5H150C155.523 0.5 160 4.97715 160 10.5V55.9304C160 57.2957 159.72 58.6465 159.179 59.8996L130.608 125.969C129.025 129.63 125.418 132 121.429 132H10.5C4.97715 132 0.5 127.523 0.5 122V60.5952C0.5 58.8933 0.93438 57.2195 1.76201 55.7323Z"
        stroke={stroke}
        className={pathClassName}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
