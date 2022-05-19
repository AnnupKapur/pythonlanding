import React, { useEffect, useState } from 'react';
import Hero from './../Hero';
import About from './../About';
import Contact from './../Contact';
import Testamonials from './../Testamonials';
import './Homepage.styles.css';

import { initializeApp } from 'firebase/app';
import { config } from './../../config/config'
import {
  addDoc, 
  getFirestore,
  collection
} from 'firebase/firestore';

const firebaseAppConfig = config.firebaseConfig;
initializeApp(firebaseAppConfig);

const Homepage = () => {

  const [nstrMsgID, setnstrMsgID] = useState<string | null>(null);

  const funcSendMessage = async (
    name: string,
    phone: string,
    email: string,
    comments: string,
  ) => {
    try {
      const objDocMeta = await addDoc(collection(getFirestore(), 'contact'), {
        Name: name,
        Phone: phone,
        Email: email,
        Comments: comments,
      });
  
      setnstrMsgID(objDocMeta.id);
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
        postMsg={funcSendMessage}
        nstrMsgID={nstrMsgID}
      />
    </div>
  );
}

export default Homepage;