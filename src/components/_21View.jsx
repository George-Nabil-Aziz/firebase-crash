// React
import { useContext } from "react";

// Context
import { MyContext } from "../context/provider";

export const View = () => {
  // Styles
  const styles = {
    in: { backgroundColor: "cyan", color: "black" },
    out: { backgroundColor: "red", color: "white" },
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

  return (
    <div>
      <h2>Render View - iAmAuthGetAuth</h2>
      <div style={!!iAmAuthGetAuth?.currentUser ? styles.in : styles.out}>
        <p>Name: {iAmAuthGetAuth?.currentUser?.displayName}</p>
        <p>Email: {iAmAuthGetAuth?.currentUser?.email}</p>
        <p>UID: {iAmAuthGetAuth?.currentUser?.uid}</p>
        <p>Photo URL: {iAmAuthGetAuth?.currentUser?.photoURL}</p>
      </div>

      <h2>Render View - iAmAuthLocalFirebaseFile</h2>
      <div
        style={!!iAmAuthLocalFirebaseFile?.currentUser ? styles.in : styles.out}
      >
        <p>Name: {iAmAuthLocalFirebaseFile?.currentUser?.displayName}</p>
        <p>Email: {iAmAuthLocalFirebaseFile?.currentUser?.email}</p>
        <p>UID: {iAmAuthLocalFirebaseFile?.currentUser?.uid}</p>
        <p>Photo URL: {iAmAuthLocalFirebaseFile?.currentUser?.photoURL}</p>
      </div>

      <h2>Render View - iAmAuthOnAuthStateChanged</h2>
      <div style={!!iAmAuthOnAuthStateChanged ? styles.in : styles.out}>
        <p>Name: {iAmAuthOnAuthStateChanged?.displayName}</p>
        <p>Email: {iAmAuthOnAuthStateChanged?.email}</p>
        <p>UID: {iAmAuthOnAuthStateChanged?.uid}</p>
        <p>Photo URL: {iAmAuthOnAuthStateChanged?.photoURL}</p>
      </div>

      <div style={{ display: "none" }}>
        <p>Need to add:</p>
        <p>- When sign in ✅</p>
        <p>- Server send me token ✅</p>
        <p>- Use this token with any process you do</p>
        <p>- Token have period of time</p>
      </div>
    </div>
  );
};
