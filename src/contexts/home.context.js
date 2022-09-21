import { createContext, useEffect, useState } from "react";
import Fuse from "fuse.js";

export const HomeContext = createContext();

function HomeContextProvider({ children }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("list.json")
      .then((res) => res.json())
      .then((data) => setList(data))
      .catch((err) => console.log(err));
  }, []);

  const handleQuery = (e) => {
    let command = e.key === "Enter" || e.type === "click";

    if (command && query.length >= 4) {
      const opts = {
        ignoreFieldNorm: true,
        minMatchCharLength: query.length > 4 ? query.length - 1 : query.length,
        keys: [
          { name: "name", weight: 0.6 },
          { name: "username", weight: 0.4 },
        ],
      };

      const fuse = new Fuse(list, opts);
      const result = fuse.search(`^='${query}`);

      setResult(result);
      return;
    }

    setQuery(e.target.value);
  };

  return (
    <HomeContext.Provider value={{ query, result, handleQuery }}>
      {children}
    </HomeContext.Provider>
  );
}

export default HomeContextProvider;
