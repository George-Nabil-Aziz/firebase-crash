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

  const handleGetAuth = () => {
    console.log("currentUser", auth.currentUser);
    console.log("uid", auth.currentUser.uid);
    console.log("accessToken", auth.currentUser.accessToken);
    console.log("email", auth.currentUser.email);
  };

  return (
    <>
      <h2>Logout</h2>
      <button onClick={handleGetAuth}>getAuth()</button>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
