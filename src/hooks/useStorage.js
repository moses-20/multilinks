import { useState } from "react";

function useStorage(key, value) {
  // we pass an initial state function to `useState` so that logic is executed only once
  // logic needs to be executed only once so as to delegate localstorage management to `setValue` function
  const [store, setStore] = useState(() => {
    if (typeof window === "undefined") {
      return value;
    }

    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : value;
    } catch (error) {
      console.log(error);
      return value;
    }
  });

  const setValue = (newValue) => {
    try {
      // `newValue` can also be a function; we need to check and handle accordingly
      const currentValue =
        newValue instanceof Function ? newValue(store) : newValue;

      setStore(currentValue);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(currentValue));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [store, setValue];
}

export default useStorage;
