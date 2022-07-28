import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState([]);
  const [greetings, setGreetings] = useState("Type your name here:");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{greetings}</p>
        <input className="App-input" type="text" onChange={(event) => setName(event.target.value)}/>
      </header>
    </div>
  );
}

export default App;
