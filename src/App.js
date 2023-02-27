import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("#000000");

  const generateColor = () => {
    const hexValues = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += hexValues[Math.floor(Math.random() * 16)];
    }
    setColor(newColor);
  };

  return (
    <div className="App">
      <h1>HexaDecimal Color Generator</h1>
      <button onClick={generateColor}>{color}</button>
    </div>
  );
}

export default App;
