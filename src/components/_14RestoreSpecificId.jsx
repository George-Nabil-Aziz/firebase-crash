import { useState } from "react";
import { db } from "../firebase"; // Import Firestore instance
import { doc, getDoc } from "firebase/firestore";

export const RestoreSpecificId = () => {
  const [number, setNumber] = useState("");
  const [databaseIs, setDatabaseIs] = useState("");

  const getNumberById = async (docId) => {
    try {
      // Reference to the document you want to retrieve
      const docRef = doc(db, "numbers", docId); // "numbers" is your collection name

      // Get the document
      const docSnap = await getDoc(docRef);

      // Check if the document exists
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data()); // Retrieve the document data
        setDatabaseIs(docSnap.data()?.value);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting document: ", error);
    }
  };

  return (
    <div>
      <h2>Restore Specific Id</h2>

      <input
        type="text"
        placeholder="Restore Specific Id"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <input
        type="submit"
        value="Restore"
        onClick={() => getNumberById(number)}
      />
      <p>{databaseIs}</p>
    </div>
  );
};
