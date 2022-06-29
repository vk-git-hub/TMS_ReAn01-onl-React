import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TitleCommon } from './components/atoms/TitleCommon/TitleCommon';
import { ButtonCommon } from './components/atoms/ButtonCommon/ButtonCommon';
import { LinkCommon } from './components/atoms/LinkCommon/LinkCommon';

function App() {
  return (
    <div>
       <header className="App-header">
      <p>
       <div className="App-title">
          <TitleCommon text="Sign In"/> 
      </div>        
      </p>
      <p>         
       <ButtonCommon text="menu hamburger"/> 
      </p>
      <p>
       <div className="App-Link">
          <LinkCommon href="https://reactjs.org" text="This Link"/> 
      </div>        
      </p>

      </header>
    </div>
  )
}

export default App;
