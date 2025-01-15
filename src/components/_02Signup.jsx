import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

export const Signup = () => {
  const [userData, setUserData] = useState({ role: "user" });

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      alert("Account created successfully!");

      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        email: userData.email,
        password: userData.password,
        role: userData.role,
        name: userData.name,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Signup Only</h2>

      <input
        type="text"
        placeholder="Name"
        value={userData.name}
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <input
        type="email"
        placeholder="Email"
        value={userData.email}
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={userData.password}
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, password: e.target.value }))
        }
      />
      <select
        value={userData?.role}
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, role: e.target.value }))
        }
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};
