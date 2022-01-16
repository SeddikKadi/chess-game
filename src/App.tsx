import React, { useState }  from 'react';
import './App.css';
import Board from './components/board';


function App() {
  return (
    <div className="App">
        <div className="parent">
          <div className="sideBar"></div>
          <div className="main">
            <Board />
          </div>
          <div className="rightBar"></div>
        </div> 
    </div>
  );
}

export default App;
