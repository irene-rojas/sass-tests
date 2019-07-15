import React from 'react';
import logo from "./logo.svg";
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        This is in the header.
        <div className="subHeader">
            This is in subHeader.
        </div>
      </header>

      <div className="firstDiv">
        This is in firstDiv
      </div>

      <div className="secondDiv">
        This is in the secondDiv.
      </div>

      <div className="thirdDiv">
          This is in the thirdDiv.
      </div>

    </div>
  );
}

export default App;
