
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAkT3Go2KQuwAgbvOk5xchffAgD-iqFrrA",
  authDomain: "e-commerce-794f5.firebaseapp.com",
  projectId: "e-commerce-794f5",
  storageBucket: "e-commerce-794f5.appspot.com",
  messagingSenderId: "489457441741",
  appId: "1:489457441741:web:793a2480e92589267e4284",
  measurementId: "G-9NG3W4H672"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;