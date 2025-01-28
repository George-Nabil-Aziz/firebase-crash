// React
import { useContext } from "react";

// Context
import { MyContext } from "../context/provider";

export const View = () => {
  const { userData, setUserData } = useContext(MyContext);

  return (
    <div>
      <h2>Render View</h2>
      <div
        style={{
          backgroundColor: !!userData.uid ? "cyan" : "red",
          padding: 10,
        }}
      >
        {!!userData.uid ? "Logged In" : "No User"}
      </div>

      <p>Need to add:</p>
      <p>- When sign in ✅</p>
      <p>- Server send me token ✅</p>
      <p>- Use this token with any process you do</p>
      <p>- Token have period of time</p>
    </div>
  );
};
