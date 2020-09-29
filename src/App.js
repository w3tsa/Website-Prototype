import React from "react";

import Nav from "./Components/Nav/Nav";
import Main from "./Components/Main/Main";
import Second from "./Components/Second/Second";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Second />
    </div>
  );
}
