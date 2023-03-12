import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  //make it an object
  const [age, setAge] = useState(null);

  const getAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`)
      .then((res) => {
        setAge(res.data);
      });
    setAge();
  };
  return (
    <div className="App">
      <input placeholder="Ex...Ruby"
        onChange={(event) => {
          setName(event.target.value)
        }}></input>
      <button onClick={getAge}>Predict Age</button>

      <h1>Name: {age?.name}</h1>
      <h1>Predicted Age: {age?.age}</h1>
      <h1>Count: {age?.count}</h1>
    </div>
  );
}

export default App;
