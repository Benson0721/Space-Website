import { createContext, useEffect, useState } from "react";

const TouchContext = createContext({
  hasTouch: false,
  touchHandler: () => {},
});

export const TouchContextProvider = (props) => {
  const [hasTouch, setHasTouch] = useState(false);
  console.log(hasTouch);
  const touchHandler = () => {
    setHasTouch(true);
  };
  useEffect(() => {
    if (hasTouch) {
      setTimeout(() => {
        setHasTouch(false);
      }, 600);
    }
  }, [hasTouch]);

  return (
    <TouchContext.Provider
      value={{ hasTouch: hasTouch, touchHandler: touchHandler }}
    >
      {props.children}
    </TouchContext.Provider>
  );
};

export default TouchContext;
