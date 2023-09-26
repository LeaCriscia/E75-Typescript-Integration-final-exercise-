// import {useEffect, useState} from "react";

import { useEffect, useState } from "react";

export const cleanObject = (obj: Object) => {
  const filteredEntries = Object.entries(obj).filter(
    ([key, value]) => value !== undefined && value !== ""
  );
  return Object.fromEntries(filteredEntries);
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (
  value: { name: string; personId: string },
  delay?: number
) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};
