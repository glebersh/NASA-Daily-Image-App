import { useState, useEffect } from 'react';

export function useMedia(queries, values, defaultValue) {
  // Array containing a media query list for each query
  const mediaQueryLists = queries.map((q) => window.matchMedia(q));
  // Function that gets value based on matching media query
  const getValue = () => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches);
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  };
  const [value, setValue] = useState(getValue);
  useEffect(
    () => {
      const handler = () => setValue(getValue);
      mediaQueryLists.forEach((mql) => mql.addListener(handler));
      return () =>
        mediaQueryLists.forEach((mql) => mql.removeListener(handler));
    },
    []
  );
  return value;
};
