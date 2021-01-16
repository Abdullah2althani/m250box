import React, { useState } from "react";
import "./App.css";
import Color from "./Components/color";

function App() {
  const [box, setBox] = useState({ color: "" });

  return (
    <div className="App">
      <Color inputs={box} setInputs={setBox} />
    </div>
  );
}

export default App;
