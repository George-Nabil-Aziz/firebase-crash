import { useState, createContext } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [iAmAuthLocalFirebaseFile, setIAmAuthLocalFirebaseFile] = useState({});
  const [iAmAuthGetAuth, setIAmAuthGetAuth] = useState({});
  const [iAmAuthOnAuthStateChanged, setiAmAuthOnAuthStateChanged] = useState(
    {}
  );

  return (
    <MyContext.Provider
      value={{
        iAmAuthGetAuth,
        setIAmAuthGetAuth,
        iAmAuthLocalFirebaseFile,
        setIAmAuthLocalFirebaseFile,
        iAmAuthOnAuthStateChanged,
        setiAmAuthOnAuthStateChanged,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
