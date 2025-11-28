export default function Panel1({
  className,
  stroke = "black",
  strokeWidth = 1,
}: {
  className?: string;
  stroke?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 905 323"
      fill="none"
    >
      <path
        d="M3.42893 104.071L104.071 3.42893C105.946 1.55357 108.49 0.5 111.142 0.5H894.5C900.023 0.5 904.5 4.97715 904.5 10.5V104.571C904.5 106.167 904.118 107.74 903.386 109.158L796.294 316.587C794.578 319.912 791.15 322 787.409 322H10.5C4.97715 322 0.5 317.523 0.5 312V111.142C0.5 108.49 1.55357 105.946 3.42893 104.071Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
