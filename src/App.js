import React from 'react';
import logo from './logo.svg';
import './App.css';

let Hello = props => <h1>{props.children}</h1>;
let Link = props => (
  <a href={props.href} rel="noopener" target="_blank">
   <h2> {props.children}</h2>
  </a>
);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <Hello> Welcome to Re:learning Git</Hello>
        </p>
        <Link href="/">Add me on Github!</Link>
        <Link href="/">GitHub</Link>
        <Link href="/">GitHub TEST AGAIN</Link>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
