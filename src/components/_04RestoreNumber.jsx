import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Import Firestore instance

export const RestoreNumber = () => {
  const [database, setDatabase] = useState([]);

  const getNumbers = async () => {
    try {
      const collectionRef = collection(db, "numbers");
      const querySnapshot = await getDocs(collectionRef);

      setDatabase(querySnapshot.docs);

      // querySnapshot.forEach((hello) => {
      //   console.log(hello.id, " => ", hello.data());
      // });
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  };

  return (
    <div>
      <h2>Restore all numbers</h2>

      <input type="submit" value="Restore" onClick={getNumbers} />
      <div>
        {database?.map((data) => (
          <p style={{ display: "flex" }} key={data?.id}>
            <span style={{ width: "250px" }}>{data?.id}</span>
            <span>{data?.data()?.value}</span>
          </p>
        ))}
      </div>
    </div>
  );
};
