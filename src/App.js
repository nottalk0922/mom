import './App.css';
import React, { Component } from 'react'
import Main_Header from './componants/main_header';
import Main_Nav from './componants/main_nav';
import Main_section from './componants/main_section';
import Main_footer from './componants/main_footer'
import Baaner from './componants/banner'


function App() {
  return (
    <div className="App">
      <Main_Header />
      <Baaner />
      <Main_Nav />
      <Main_section />
      <Main_footer />
    </div>
  );
}

export default App;
