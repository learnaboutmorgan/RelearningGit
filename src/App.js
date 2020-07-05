import React from 'react';
import logo from './logo.svg';
import './App.css';

let Hello = props => <h1>{props.children}</h1>;
let Link = props => (
  <a href={props.href} rel="noopener" target="_blank">
    {props.children}
  </a>
);
function App() {

  function handleClick(e) {
    e.preventDefault();
    alert('Button Clicked');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <Hello> Welcome to Re:learning Git</Hello>
        </p>
        <div className="links">
<<<<<<< HEAD
        <Link href="learnaboutmorgan.com">Morgan's GitHub</Link>
        <Link href="/">GitHub </Link>
        <Link href="/">BLM Site </Link>
        <Link href="/">NAACP </Link>
=======
        <Link href="https://github.com/learnaboutmorgan">Morgan's GitHub</Link>
        <Link href="https://github.com/">GitHub </Link>
        <Link href="https://blacklivesmatter.com/">BLM Site </Link>
        <Link href="https://www.naacp.org/">NAACP </Link>
>>>>>>> branch-two
        <button onClick={handleClick}>
        {"CLICK ME"}
      </button>
        </div>
      </header>
    </div>
  );
}

export default App;
