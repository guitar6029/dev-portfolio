type BoxAProps = {
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  classname?: string;
};

export default function BoxA({
  classname = "w-155 h-155 opacity-35",
  fill = "none",
  stroke = "#E6E21C",
  strokeWidth = 2,
}: BoxAProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classname}
      viewBox="0 0 180 224"
      fill={fill}
    >
      <path
        d="M0.5 218V82L34.5 0.5H179V170.5L143.5 218H0.5Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
