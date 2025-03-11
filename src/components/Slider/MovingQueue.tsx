export default function MovingQueue({ list }: { list: string[] | number[] }) {
  return (
    <div className="wrapper">
      <div className="scroll-text fadeout-horizontal">
        <div className="scroll-text-track">
          {list.concat(list).map((litItem, index) => (
            <span
              key={index}
              className={`font-bold ${
                index % 2 === 0
                  ? "border-2 border-orange-500"
                  : "border-2 border-white"
              }`}
            >
              {litItem}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
