import { useState, useEffect } from "react";

const useFadeToggle = (initialVisible = true, duration = 1000) => {
  const [visible, setVisible] = useState(initialVisible);

  useEffect(() => {
    if (!visible) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible, duration]);

  const toggleVisibility = () => {
    setVisible((prev) => !prev);
  };

  return [visible, toggleVisibility];
};

export default useFadeToggle;
