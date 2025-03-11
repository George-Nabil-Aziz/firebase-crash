// Firebase
import { getAuth, signOut } from "firebase/auth";

export const Logout = () => {
  const auth = getAuth(); // Initialize Firebase Auth

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("User logged out successfully.");
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
