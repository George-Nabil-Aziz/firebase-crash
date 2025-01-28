// React
import { useContext } from "react";

// Context
import { MyContext } from "../context/provider";

// Firebase
import { auth, db } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export const Login = () => {
  // Context
  const { userData, setUserData } = useContext(MyContext);

  const handleLogin = async () => {
    localStorage.removeItem("UserData");

    try {
      const response = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );

      // My: Get token
      const tokenResponse = response?._tokenResponse?.idToken;
      // Chat GPT: Get token
      const token = await response?.user?.getIdToken();

      // Fetch the role from Firestore
      const docRef = doc(db, "users", response?.user.uid);
      const docSnap = await getDoc(docRef);
      const role = docSnap?.data()?.role;

      const userDataResponse = {
        uid: response?.user?.uid,
        tokenMy: tokenResponse,
        tokenGPT: token,
        role: docSnap.exists() ? role ?? "Not defined" : "Not exist",
      };

      // Save to localStorage
      localStorage.setItem("UserData", JSON.stringify(userDataResponse));
      setUserData(userDataResponse);

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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
