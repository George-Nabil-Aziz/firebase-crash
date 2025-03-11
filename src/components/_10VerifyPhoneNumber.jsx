// Firebase
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  updatePhoneNumber,
} from "firebase/auth";
import { auth } from "../firebase";

export const VerifyPhoneNumber = () => {
  // Step 1: Setup reCAPTCHA
  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
      }
    );
  };

  // Step 2: Send OTP to the new phone number
  const sendOTP = async (phoneNumber) => {
    try {
      setupRecaptcha();
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        window.recaptchaVerifier
      );
      window.confirmationResult = confirmationResult;
      console.log("OTP sent!");
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  // Step 3: Verify OTP and Update Phone Number
  const verifyOTPAndUpdatePhoneNumber = async (otpCode) => {
    try {
      const credential = await window.confirmationResult.confirm(otpCode);
      await updatePhoneNumber(auth.currentUser, credential.user.phoneNumber);
      console.log("Phone number updated!");
    } catch (error) {
      console.error("Error updating phone number:", error);
    }
  };

  return (
    <>
      <h2>Verify PhoneNumber (Not implemented yet)</h2>
    </>
  );
};
