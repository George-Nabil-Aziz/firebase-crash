import { useState } from "react";

import { getAuth, deleteUser } from "firebase/auth";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

export const DeleteUser = () => {
  const [uid, setUserId] = useState("");

  const auth = getAuth();
  const user = auth.currentUser;

  const handleDelete = async () => {
    try {
      // Step 1: Delete user data from Firestore
      const userDocRef = doc(db, "users", uid);
      await deleteDoc(userDocRef);
      alert("User data deleted successfully.");

      if (user) {
        // Step 2: Delete user from Firebase Authentication
        await deleteUser(user);
        alert("User deleted successfully from Authentication.");
      } else alert("User not deleted.");
    } catch (error) {
      alert("Error deleting user data:", error);
    }
  };

  return (
    <div>
      <h2>Delete User</h2>

      <input
        type="text"
        placeholder="User Id"
        value={uid}
        onChange={(e) => setUserId(e.target.value)}
      />

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
