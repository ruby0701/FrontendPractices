import './App.css';
import Axios from "axios";
import { useState, useEffect } from "react";



function App() {
  const [catFact, setCatFat] = useState("");
  // fetch("https://catfact.ninja/fact")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   });
  useEffect(() => {
    // Axios.get("https://catfact.ninja/fact")
    //   .then((res) => {
    //     setCatFat(res.data.fact);
    //   });
    fetchCatFact();
  }, [])

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact")
      .then((res) => {
        setCatFat(res.data.fact);
      });
  }

  return (
    <div className="App">
      <button onClick={fetchCatFact}>Generates Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
