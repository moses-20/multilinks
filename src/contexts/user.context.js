import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [profile, setProfile] = useState();
  const params = useParams();
  const { username } = params;

  useEffect(() => {
    fetch(`/data/${username}.json`)
      .then((res) => {
        console.log(res);
        res.json();
      })
      .then((data) => {
        console.log(data);
        setProfile(data);
        document.title = `${data.name} - Multilinks`;
      })
      .catch((error) => console.log(error));
  });

  return (
    <UserContext.Provider value={{ profile }}>{children}</UserContext.Provider>
  );
}

export default UserContextProvider;
