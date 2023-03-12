import './App.css';
import { useState, useEffect } from "react"
import { Text } from "./Text.js"

function App() {
  const [showText, setShowText] = useState(false);
  return (
    <div className="App">
      <button onClick={() => {
        setShowText(!showText);
      }}>
        Show Text

      </button>

      {showText && <Text></Text>}
    </div>
  );
}

export default App;
