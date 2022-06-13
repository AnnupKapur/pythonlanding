import React, { useEffect, useState, useRef } from 'react';
import Hero from './../Hero';
import About from './../About';
import Contact from './../Contact';
import Testamonials from './../Testamonials';
import ReadyBanner from '../ReadyBanner';
import './Homepage.styles.css';
import { HOMEPAGE_ELEMENTS } from '../../constants';
import { useParams } from 'react-router-dom';
import { sendMessage } from './../../actions/actionsMessage'

const Homepage = () => {

  const { strSection } = useParams();

  const [nstrMsgID, setnstrMsgID] = useState<string | null>(null);
  const [bMsgError, setbMsgError] = useState<boolean>(false);

  useEffect(()=>{
    switch(strSection){
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
  },[strSection])

  const funcSendMessage = (
    name: string,
    phone: string, 
    email: string,
    comments: string,
  ) => {
    sendMessage(name, phone, email, comments, setnstrMsgID, setbMsgError)
  }

  return (
    <div className="App">
      <Hero />
      <About />
      <ReadyBanner strColor='hsla(20, 90%, 60%, 1)'/>
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