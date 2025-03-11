// React
import { useContext } from "react";

// Context
import { MyContext } from "../context/provider";

export const Context = () => {
  const {
    iAmAuthGetAuth,
    setIAmAuthGetAuth,
    iAmAuthLocalFirebaseFile,
    setIAmAuthLocalFirebaseFile,
    iAmAuthOnAuthStateChanged,
    setiAmAuthOnAuthStateChanged,
  } = useContext(MyContext);

  return (
    <>
      <div onClick={() => console.log(iAmAuthGetAuth)}>iAmAuthGetAuth</div>
      <div onClick={() => setIAmAuthGetAuth({})}>setIAmAuthGetAuth</div>

      <div onClick={() => console.log(iAmAuthLocalFirebaseFile)}>
        iAmAuthLocalFirebaseFile
      </div>
      <div onClick={() => setIAmAuthLocalFirebaseFile({})}>
        setIAmAuthLocalFirebaseFile
      </div>

      <div onClick={() => console.log(iAmAuthOnAuthStateChanged)}>
        iAmAuthOnAuthStateChanged
      </div>
      <div onClick={() => setiAmAuthOnAuthStateChanged({})}>
        setiAmAuthOnAuthStateChanged
      </div>
    </>
  );
};
