import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(prevCounter => prevCounter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="App">
      <h1>Bem-vindo à primeira atividade da disciplina Programação para Internet!</h1>
      <img src={logo} alt="Logo" className="App-Logo"/>
      <div>Contador Regressivo: {counter} </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
