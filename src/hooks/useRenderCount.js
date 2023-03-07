import { useRef, useEffect } from "react";

export const useRenderCount = (componentName) => {
  const renders = useRef(1);
  useEffect(() => {
    renders.current += 1;
  });
  console.log(`
--------------------------------------
Component: ${componentName}
Renders: ${renders.current}
--------------------------------------
  `);
};
