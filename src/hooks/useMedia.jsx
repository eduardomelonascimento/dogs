import { useEffect, useState } from "react";

export default function useMedia(mediaQuery) {
  const [match, setMatch] = useState(window.matchMedia(mediaQuery).matches);
  function changeMatch() {
    setMatch(window.matchMedia(mediaQuery).matches);
  }
  useEffect(() => {
    window.addEventListener("resize", changeMatch);
    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, []);

  return match;
}
