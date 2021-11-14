import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { ref, set } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBufmTG-L2W9Q3J1EjwFU0xxLbat-eVWmI",
  authDomain: "expoapplication-bc82b.firebaseapp.com",
  databaseURL: "https://expoapplication-bc82b.firebaseio.com",
  projectId: "expoapplication-bc82b",
  storageBucket: "expoapplication-bc82b.appspot.com",
  messagingSenderId: "983618659681",
  appId: "1:983618659681:web:9c9ef8a8076038ebe21120",
  measurementId: "G-0T5WX5FRVS",
};
export async function ProfileViewed() {
  if (process.env.NODE_ENV !== "development") {
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    let obj = { view: 1 };
    set(ref(database, "Views/" + generateString(5)), obj);
  }
}
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateString(length) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
