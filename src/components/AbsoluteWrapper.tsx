export default function AbsoluteWrapper({
  className = "top-0 left-0",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`${className} absolute`}>{children}</div>;
}
