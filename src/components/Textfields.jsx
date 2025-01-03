import Typed from "typed.js";
import { useRef, useEffect } from "react";

export function InnerTypedText({ data }) {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [data],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [data]);

  return (
    <>
      <p
        className="font-barlow text-[15px] md:text-[16px] lg:text-[18px] max-w-xl text-Blue-300 text-center lg:text-left mb-6"
        ref={el}
      ></p>
    </>
  );
}
export function InnerText({ data, visible }) {
  return (
    <>
      <p
        className={`font-barlow text-[15px] md:text-[16px] lg:text-[18px] max-w-xl text-Blue-300 text-center lg:text-left mb-6 fade-controller ${
          visible ? "" : "fade-out"
        }`}
      >
        {data}
      </p>
    </>
  );
}
export function SloganText1({ data }) {
  return (
    <p
      className={`font-barlow_C text-[16px] md:text-[28px] tracking-wider md:tracking-widest text-Blue-300 lg:text-left mb-6 fade-controller 
      `}
    >
      {data}
    </p>
  );
}

export function SloganText2({ data, process }) {
  return (
    <p
      className={`font-barlow_C text-[16px] md:text-[20px] lg:text-[28px] tracking-wider md:tracking-widest text-white `}
    >
      <span className="font-bold text-light-white tracking-wider mr-6">
        {process}
      </span>
      {data}
    </p>
  );
}
