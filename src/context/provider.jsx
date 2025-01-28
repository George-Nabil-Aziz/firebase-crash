import { useState, createContext } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  return (
    <MyContext.Provider value={{ userData, setUserData }}>
      {children}
    </MyContext.Provider>
  );
};
