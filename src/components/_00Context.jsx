// React
import { useContext } from "react";

// Context
import { MyContext } from "../context/provider";

export const Context = () => {
  const { userData, setUserData } = useContext(MyContext);

  return (
    <>
      <div onClick={() => console.log(userData)}>userData</div>
      <div onClick={() => setUserData({})}>setUserData</div>
      <div></div>
    </>
  );
};
