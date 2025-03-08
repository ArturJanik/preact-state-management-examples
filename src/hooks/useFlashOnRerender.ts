import { useEffect, useRef } from "preact/hooks";

export const useFlashOnRerender = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.background = "#edcc72";
      setTimeout(() => {
        if (ref.current) ref.current.style.background = "#fff";
      }, 300);
    }
  });

  return {
    ref
  };
};
