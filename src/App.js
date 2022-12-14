import './App.css';
import React, { Component, useEffect } from 'react';
import MainPage from './MainPage';
import Usemoney from './componants/usemoney'
import EventPage from './componants/eventpage'
import Typing from './componants/Typing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AfterLogin } from './componants/aft_login';
import Letter from './componants/letter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path="/event" element={<EventPage />}></Route>
          <Route path="/이용요금안내" element={<Usemoney />}></Route>
          <Route path='/Typing' element={<Typing />}></Route>
          <Route path='/aftLogin' element={<AfterLogin />}></Route>
          <Route path='/letter/:code' element={<Letter />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <Eventpage />
      <Usemoney /> */}
    </div>
  );
}

export default App;
