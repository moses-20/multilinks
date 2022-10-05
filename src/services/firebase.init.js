import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAXupaPg_B1rbCcunXYP7QfwklBoXyh7iM",
  authDomain: "multilinks-123.firebaseapp.com",
  projectId: "multilinks-123",
  storageBucket: "multilinks-123.appspot.com",
  messagingSenderId: "122449540480",
  appId: "1:122449540480:web:5ee0b0caf049fecfb1fd65",
};

export default function getFirebaseApp() {
  return initializeApp(firebaseConfig);
}
