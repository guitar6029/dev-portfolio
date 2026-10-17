type SectionRailProps = {
  label: string;
  index: string;
  total?: string;
  className?: string;
};

export default function SectionRail({
  label,
  index,
  total,
  className = "",
}: SectionRailProps) {
  const position = total ? `${index} / ${total}` : index;

  return (
    <aside className={`section-rail ${className}`.trim()} aria-hidden="true">
      <span className="section-rail__symbol" />
      <span className="section-rail__word">
        {label} / {index}
      </span>
      <span className="section-rail__index">{position}</span>
    </aside>
  );
}
