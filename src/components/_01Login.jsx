import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log("response", response);

      // Chat GPT method to get token
      const token = await response?.user?.getIdToken();
      console.log("Token:", token);

      // My method to get token
      const tokenResponse = response?._tokenResponse?.idToken;
      console.log("tokenResponse", tokenResponse);

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
    </div>
  );
};
