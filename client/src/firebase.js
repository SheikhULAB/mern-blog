
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-46a7e.firebaseapp.com",
  projectId: "mern-blog-46a7e",
  storageBucket: "mern-blog-46a7e.appspot.com",
  messagingSenderId: "997798410621",
  appId: "1:997798410621:web:9bc3d7f89e0b716825b414"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);