// React
import { useState } from "react";

// Firebase
import { auth, db } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [uid, setUid] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      // Chat GPT: Get token
      const token = await response?.user?.getIdToken();

      // My: Get token
      const tokenResponse = response?._tokenResponse?.idToken;

      setUid(response?.user?.uid);

      // Fetch the role from Firestore
      const docRef = doc(db, "users", response?.user.uid);
      const docSnap = await getDoc(docRef);
      const role = docSnap?.data()?.role;

      if (docSnap.exists()) {
        if (role === "admin") setRole("Admin");
        else if (role === "user") setRole("User");
        else setRole("Role not defined");
      } else setRole("No role found");

      alert("Logged in successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Login Only</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      {uid && (
        <div>
          <p>uid: {uid}</p>
          <p>role: {role}</p>
        </div>
      )}
    </div>
  );
};
