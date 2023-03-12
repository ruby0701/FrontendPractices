import './App.css';
import { Planet } from "./Planet.js"

function App() {

  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
  ];

  return (
    <div className="App">
      {planets.map((value, key) =>
        (value.isGasPlanet) ? <h1>{value.name}</h1> : <h1>{value.name} is not a gas planet</h1>
      )};

      <Planet></Planet>

    </div>
  );
}

export default App;
