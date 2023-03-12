import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  //const [category, setCategory] = useState("");
  const [excuse, setExcuse] = useState("");

  const fetchExcuse = (category) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}/`)
      .then((res) => {
        //this API returns array thus the data[0]
        setExcuse(res.data[0]);
      });
  }


  //https://excuser-three.vercel.app/v1/excuse/${category}
  return (
    <div className="App">
      <h1>Generate An Excuse!</h1>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <button onClick={() => fetchExcuse("office")}>Office</button>

      <h1>Id : {excuse.id}</h1>
      <h1>Excuse :{excuse.excuse}</h1>
      <h1>Category : {excuse.category}</h1>
    </div>
  );
}

export default App;
