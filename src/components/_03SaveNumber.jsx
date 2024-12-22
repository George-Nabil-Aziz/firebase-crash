import { useState } from "react";
import { db } from "../firebase"; // Import Firestore instance
import { collection, addDoc } from "firebase/firestore";

export const SaveNumber = ({ value }) => {
  const [database, setDatabase] = useState("");

  const handleSaveNumber = async (database) => {
    try {
      // Reference to a Firestore collection
      const collectionRef = collection(db, "numbers");

      // Save the number
      const docRef = await addDoc(collectionRef, { value: database });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
      <h2>Save number</h2>

      <input
        type="text"
        placeholder="Value"
        value={database}
        onChange={(e) => setDatabase(e.target.value)}
      />
      <input
        type="submit"
        value="Save"
        onClick={() => handleSaveNumber(database)}
      />
    </div>
  );
};
