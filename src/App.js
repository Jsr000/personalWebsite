import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import Hero from './components/hero/hero.js';
import './variables.css';
import About from './components/about.js';
import Cv from './components/cv/cv.js';
import Hobbies from './components/hobbies.js';
import Contact from './components/contact.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "personal-website-ad369.firebaseapp.com",
  projectId: "personal-website-ad369",
  storageBucket: "personal-website-ad369.appspot.com",
  messagingSenderId: "703497290826",
  appId: "1:703497290826:web:a174778f732952a7d852b3",
  measurementId: "G-K10NE6J4R7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase storage
const storage = getStorage(app);

function App() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    // Create a reference to the file we want to download
    const imageRef = ref(storage, '0019_21.jpg');
    
    // Get the download URL
    getDownloadURL(imageRef)
      .then((url) => {
        // Set the image URL to state
        setImageUrl(url);
      })
      .catch((error) => {
        console.error('Error fetching image URL:', error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Cv />
      <Hobbies />
      <Contact />

      {/* Display the image if the URL is fetched */}
      {imageUrl && (
        <div>
          <h2>My Firebase Image</h2>
          <img src={imageUrl} alt="Firebase Storage" />
        </div>
      )}
    </div>
  );
}

export default App;
