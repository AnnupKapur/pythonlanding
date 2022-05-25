import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';

import Homepage from './components/Homepage';
import BookDemo from './components/BookDemo';
import BookingConfirm from './components/BookingConfirm';
import Contact from './components/Contact';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}>
          <Route index element={<Homepage />} />
        </Route>
        <Route path='/bookdemo' element={<BookDemo />} />
        <Route path='/confirmation' element={<BookingConfirm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
