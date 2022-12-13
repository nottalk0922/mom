import './App.css';
import React, { Component, useEffect } from 'react';
import MainPage from './MainPage';
import Usemoney from './componants/usemoney'
import EventPage from './componants/eventpage'
import Typing from './componants/Typing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path="/eventPage" element={<EventPage />}></Route>
          <Route path="/Usemoney" element={<Usemoney />}></Route>
          <Route path='/Typing' element={<Typing />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <Eventpage />
      <Usemoney /> */}
    </div>
  );
}

export default App;
