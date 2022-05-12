import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About/About';
import Contact from './components/Contact';
import Testamonials from './components/Testamonials';
import './App.css';

import { initializeApp } from 'firebase/app';
import { config } from './config/config'
import {
  addDoc, 
  getFirestore,
  collection
} from 'firebase/firestore';

const firebaseAppConfig = config.firebaseConfig;
initializeApp(firebaseAppConfig);

const App = () => {
  const [bDemoBookingClick, setbDemoBookingClick] = useState(false);

  const funcBook = () => {
    setbDemoBookingClick(true);
  }

  const saveMessage = async (
    name: string,
    phone: string,
    email: string,
    comments: string,
  ) => {
    try {
      await addDoc(collection(getFirestore(), 'contact'), {
        Name: name,
        Phone: phone,
        Email: email,
        Comments: comments,
      });
    }
    catch(error) {
      console.error('Error writing new message to Firebase Database', error);
    }
  }

  return (
    <div className="App">
      <Hero />
      <About />
      <Testamonials />
      <Contact 
        postMsg={saveMessage}
        bDemoBookingClick={bDemoBookingClick}
      />
    </div>
  );
}

export default App;