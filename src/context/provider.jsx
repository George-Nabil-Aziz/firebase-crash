import { useState, createContext } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    teda: "Hello Teda",
    pooh: "Hello Pooh",
  });

  return (
    <MyContext.Provider value={{ userData, setUserData }}>
      {children}
    </MyContext.Provider>
  );
};
