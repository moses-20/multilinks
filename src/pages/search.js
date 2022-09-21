import { useEffect, useState } from "react";
import Users from "../components/users";

function Search() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("/list.json")
      .then((res) => res.json())
      .then((data) =>
        data.sort((a, b) =>
          a.name.normalize("NFD").localeCompare(b.name.normalize("NFD"))
        )
      )
      .then((data) => setList(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Users list={list} />
    </div>
  );
}

export default Search;
