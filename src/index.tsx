import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config/'
import Homepage from './components/Homepage';
import BookDemo from './components/BookDemo';
import BookingConfirm from './components/BookingConfirm';
import PlanSelect from './components/PlanSelect';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const firebaseAppConfig = firebaseConfig;
initializeApp(firebaseAppConfig);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}>
          <Route index element={<Homepage />} />
          <Route path=':strSection' element={<Homepage />} />
        </Route>
        <Route path='/bookdemo' element={<BookDemo />} />
        <Route path='/demoConfirm' element={<BookingConfirm />} />
        <Route path='/planSelect' element={<PlanSelect />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
