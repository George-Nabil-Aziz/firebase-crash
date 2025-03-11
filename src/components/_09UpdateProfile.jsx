// React
import { useState } from "react";

// Firebase
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase";

export const UpdateProfile = () => {
  // State
  const [formData, setFormData] = useState({
    displayName: "",
    phoneNumber: "",
    photoURL: "",
  });

  const user = auth.currentUser;

  // Hanlde change all the Form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateUserProfile = async (user) => {
    try {
      await updateProfile(
        user,
        formData
        // {
        //   displayName: "John Doe", // Set the name
        //   photoURL: "https://example.com/profile.jpg", // Set profile picture
        // }
      );
      console.log("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <>
      <h2>Update Profile</h2>
      <input
        type="text"
        placeholder="Name"
        name="displayName"
        value={formData.displayName}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Phone number"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Photo"
        name="photoURL"
        value={formData.photoURL}
        onChange={handleChange}
      />
      <button type="submit" onClick={() => updateUserProfile(user)}>
        Update User Profile
      </button>
    </>
  );
};
