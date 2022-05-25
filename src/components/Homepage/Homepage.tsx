import React, { useEffect, useState, useRef } from 'react';
import Hero from './../Hero';
import About from './../About';
import Contact from './../Contact';
import Testamonials from './../Testamonials';
import './Homepage.styles.css';
import { HOMEPAGE_ELEMENTS } from '../../constants';

import { initializeApp } from 'firebase/app';
import { config } from './../../config/config'
import {
  addDoc, 
  getFirestore,
  collection
} from 'firebase/firestore';

type Props = {
  strScollTo?:string | null;
}

const firebaseAppConfig = config.firebaseConfig;
initializeApp(firebaseAppConfig);

const Homepage = ({strScollTo=null}:Props) => {

  const [nstrMsgID, setnstrMsgID] = useState<string | null>(null);
  const [bMsgError, setbMsgError] = useState<boolean>(false);

  const heroRef = useRef();
  const aboutRef = useRef();
  const testamonialRef = useRef();
  const contactRef = useRef();

  useEffect(()=>{
    switch(strScollTo){
      case HOMEPAGE_ELEMENTS.HERO:
      default:
        document.getElementById(HOMEPAGE_ELEMENTS.HERO)?.scrollIntoView();
        break;
      case HOMEPAGE_ELEMENTS.ABOUT:
        document.getElementById(HOMEPAGE_ELEMENTS.ABOUT)?.scrollIntoView();
        break;
      case HOMEPAGE_ELEMENTS.TESTAMONIALS:
        document.getElementById(HOMEPAGE_ELEMENTS.TESTAMONIALS)?.scrollIntoView();
        break;
      case HOMEPAGE_ELEMENTS.CONTACT:
        document.getElementById(HOMEPAGE_ELEMENTS.CONTACT)?.scrollIntoView();
        break;
    }
  },[strScollTo])

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
        DateTime: Date.now(),
      });
  
      setnstrMsgID(objDocMeta.id);
    }
    catch(error) {
      setbMsgError(true);
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
        setnstrMsgID={setnstrMsgID}
        bMsgError={bMsgError}
        setbMsgError={setbMsgError}
      />
    </div>
  );
}

export default Homepage;