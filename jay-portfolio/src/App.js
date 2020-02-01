import React from 'react';
import './App.css';
import TopNav from "./TopNav"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNav />


        {/* <nav>
          <a>about me</a>
          <a>my work</a>
        </nav> */}
      </header>
        <div>
          <p>add hero image here</p>
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

export default App;
