import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import cocktails from "../data/cocktails.json";

const uploadCocktails = async () => {
  try {
    const colRef = collection(db, "cocktails");
    for (const cocktail of cocktails) {
      await addDoc(colRef, cocktail);
      console.log(`Added: ${cocktail.name}`);
    }
    console.log("All cocktails uploaded successfully!");
  } catch (error) {
    console.error("Error uploading cocktails:", error);
  }
};

export default uploadCocktails;