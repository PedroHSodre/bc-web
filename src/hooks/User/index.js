import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({});

  const setUserLogged = (data) => {
    setUser(data);
  };

  return (
    <UserContext.Provider
      value={{
        setUserLogged,
        user,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const ctx = useContext(UserContext);
  return ctx;
}
