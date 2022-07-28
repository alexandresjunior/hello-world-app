import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { sayHello } from './service';

function App() {
  const [name, setName] = useState([]);
  const [greetings, setGreetings] = useState("Type your name here:");

  const handleName = () => {
    sayHello(`/hello?name=${name}`, setGreetings);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{greetings}</p>
        <input className="App-input" type="text" onChange={(event) => setName(event.target.value)}/>
        <button className="App-button" onClick={() => handleName()}>Enviar</button>
      </header>
    </div>
  );
}

export default App;
