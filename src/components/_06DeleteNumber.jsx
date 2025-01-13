import { useState } from "react";
import { db } from "../firebase"; // Import Firestore instance
import { doc, deleteDoc } from "firebase/firestore";

export const DeleteNumber = () => {
  const [deleteDatabase, setDeleteDatabase] = useState("");

  const hanldeDeleteNumber = async (docId) => {
    try {
      // Reference to the document in Firestore
      const docRef = doc(db, "numbers", docId); // "numbers" is your collection name

      // Delete the document
      await deleteDoc(docRef);
      console.log(`Document with ID ${docId} deleted successfully!`);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  /* Delete All */
  // const hanldeDeleteAllNumbers = () => {
  //   querySnapshot.docs.map((doc) => {
  //     const docId = doc.id;
  //     console.log(docId, " => ", doc.data());
  //     // Then you can delete it if needed
  //     deleteNumber(docId); // Call the delete function
  //   });
  // };

  return (
    <div>
      <h2>Delete number</h2>

      <input
        type="text"
        placeholder="Delete with ID"
        value={deleteDatabase}
        onChange={(e) => setDeleteDatabase(e.target.value)}
      />

      <input
        type="submit"
        value="Delete"
        onClick={() => hanldeDeleteNumber(deleteDatabase)}
      />
    </div>
  );
};
