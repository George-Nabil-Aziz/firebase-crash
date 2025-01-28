// React
import { useContext } from "react";

// Context
import { MyContext } from "../context/provider";

// Firebase
import { getAuth, signOut } from "firebase/auth";

export const Logout = () => {
  const { userData, setUserData } = useContext(MyContext);

  const auth = getAuth(); // Initialize Firebase Auth

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("User logged out successfully.");
      setUserData({});
    } catch (error) {
      alert("Error logging out:", error.message);
    }
  };

  return (
    <>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
