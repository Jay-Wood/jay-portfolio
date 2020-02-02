import React from 'react';
import './App.css';
import TopNav from "./TopNav";
import Background from "./assets/Cloud-background.jpg";
import styled from "styled-components";

function App() {
  return (
    <div 
      className="App" 
      // styles={{ backgroundImage:`url(${Background})` }}
    >        
      <header className="App-header">
        <TopNav />
      </header>
      <div>
        <p>My name is Jay and I like to build things.</p>
      </div>
      <div>
        <h2>Projects I've worked on</h2>
        <div>
          Fish Friends!
        </div>
        <div>
          Pintereach
        </div>
        <div>
          Essentialism
        </div>
      </div>
      <div>
        bottom nav
        <a>github link</a>
        <a>linked in link</a>
      </div>
    </div>
  );
}

const ImageBackground = styled.img`
  width: '100%';
  height: '100%';
`;


export default App;
