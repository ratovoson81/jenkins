import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="lo" />
        <p data-testid="title">Jenkins success</p>
      </header>
    </div>
  );
}

export default App;
