import { useEffect, useState } from "react";

export const useCrollY = () => {
  const [crollY, setScrollY] = useState(0);

  const handleScroll = () => {
    // const crollY = window.scrollY || document.documentElement.scrollTop;
    const crollY = window.scrollY;
    setScrollY(crollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return crollY;
};
