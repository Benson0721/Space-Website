export function Header1({ data, visible }) {
  return (
    <h1
      className={`text-[80px] md:text-[144px] text-white lg:text-left mb-6 space `}
    >
      {data}
    </h1>
  );
}
export function Header2({ data, visible }) {
  return (
    <h2
      className={`text-[56px] md:text-[80px] lg:text-[96px] text-white mb-4 fade-controller ${
        visible ? "" : "fade-out"
      }`}
    >
      {data}
    </h2>
  );
}
export function Header3({ data, visible }) {
  return (
    <h3
      className={`text-[24px] md:text-[40px] lg:text-[56px] text-white mb-4 fade-controller ${
        visible ? "" : "fade-out"
      } `}
    >
      {data}
    </h3>
  );
}

export function Header4({ data, visible }) {
  return (
    <h3
      className={`text-[18px] md:text-[24px] lg:text-[32px] text-medium-white mb-2 fade-controller ${
        visible ? "" : "fade-out"
      }`}
    >
      {data}
    </h3>
  );
}
