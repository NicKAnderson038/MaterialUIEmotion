import React from "react";
import ReactDOM from "react-dom";

import Main from "./components/Main";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Material UI example~sample</h1>
      <h2>😸 😀</h2>
      <br />
      <Main />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
