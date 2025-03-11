// React
import { useContext, useEffect } from "react";

// Context
import { MyContext } from "../context/provider";

// Firebase
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"; // Use this to view user data when logged in

export const UserData = () => {
  // Styles
  const styles = {
    width: "fit-content",
    padding: 5,
    backgroundColor: "#3B82F6", // Tailwind's blue-500
    color: "white",
    borderRadius: "8px",
  };

  // Context
  const {
    iAmAuthGetAuth,
    setIAmAuthGetAuth,
    iAmAuthLocalFirebaseFile,
    setIAmAuthLocalFirebaseFile,
    iAmAuthOnAuthStateChanged,
    setiAmAuthOnAuthStateChanged,
  } = useContext(MyContext);

  /* Get User from getAuth() => you can use getAuth() to get the authentication instance,
  but it's not the best approach if you already have an auth instance exported from your Firebase configuration file. */
  setIAmAuthGetAuth(getAuth()); // Initialize Firebase Auth

  /* Get User from auth - My Local Firebase File => auth.currentUser only works after login and does not update automatically. */
  setIAmAuthLocalFirebaseFile(auth);

  /* Get User from onAuthStateChanged() => onAuthStateChanged is better because it detects login/logout changes in real time. */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setiAmAuthOnAuthStateChanged(currentUser);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  return (
    <>
      <h2>User Data</h2>
      <p style={styles} onClick={() => console.log(iAmAuthGetAuth)}>
        iAmAuthGetAuth - Get All the auth (Not Good)
      </p>

      <p style={styles} onClick={() => console.log(iAmAuthLocalFirebaseFile)}>
        iAmAuthLocalFirebaseFile - Get All the auth (Not Good)
      </p>

      <p style={styles} onClick={() => console.log(iAmAuthOnAuthStateChanged)}>
        iAmAuthOnAuthStateChanged - Get the currentUser (Good)
      </p>
    </>
  );
};
