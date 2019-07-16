import React from 'react';
import logo from "./logo.svg";
import './App.scss';

function App() {

  return (
    <div className="App">

      <header className="header">
        This is in the header.
        <div className="subHeader">
            This is in the subHeader.
        </div>
      </header>

      <div className="firstDiv">
        <p>This is in the firstDiv.</p>
      </div>

      <div className="secondDiv">
        <span id="secondIntro">This is in the secondDiv.</span>
        <br/>
        <p>This is the React logo ----></p>
        <br/>
        <img className="logo" src={logo} alt="logo"/>
      </div>

      <div className="thirdDiv">
          This is in the thirdDiv.
      </div>

    </div>
  );
}

export default App;
