// React
import { useState } from "react";

// Firebase
import { getAuth, getIdToken, getIdTokenResult } from "firebase/auth";

export const Token = () => {
  // State
  const [tokenGetIdToken, setTokenGetIdToken] = useState("");
  const [tokenGetIdTokenResult, setTokenGetIdTokenResult] = useState({});

  const auth = getAuth();

  const getTokenOne = async () => {
    try {
      const token = await auth.currentUser.getIdToken(true);
      setTokenGetIdToken(token);
    } catch (error) {
      console.error("Error getting token:", error);
    }
  };

  /* getIdToken fetches the Firebase ID token for the authenticated user. */
  const getTokenTwo = async () => {
    // Same as method one
    try {
      const token = await getIdToken(auth.currentUser, true); // 'true' forces refresh
      setTokenGetIdToken(token);
    } catch (error) {
      console.error("Error getting token:", error);
    }
  };

  /* getIdTokenResult provides additional details like expiration time and claims. */
  const getTokenThree = async () => {
    try {
      const token = await getIdTokenResult(auth.currentUser);
      console.log("getIdTokenResult:", token);
      setTokenGetIdTokenResult(token);
    } catch (error) {
      console.error("Error getting token:", error);
    }
  };

  /*
    Function:	        Returns:                                Includes Claims?	Expiration Info?
    getIdToken	      String (Token)	                        ❌ No	           ❌ No
    getIdTokenResult	Object {token, expirationTime, claims}	✅ Yes	           ✅ Yes
  */

  return (
    <>
      <h2>User Data</h2>
      <button onClick={getTokenOne}>getTokenOne</button>
      <button onClick={getTokenTwo}>getTokenTwo</button>
      <button onClick={getTokenThree}>getTokenThree</button>
      <p style={{ wordBreak: "break-all" }}>{tokenGetIdToken}</p>
      <p style={{ wordBreak: "break-all" }}>
        Token: {tokenGetIdTokenResult?.token}
      </p>
      <p>Expiry: {tokenGetIdTokenResult?.expirationTime}</p>
      <p>
        User Claims: email_verified:{" "}
        {String(tokenGetIdTokenResult?.claims?.email_verified)}
      </p>
    </>
  );
};
