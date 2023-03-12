
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home.js";
import { Contact } from "./pages/Contact.js";
import { Profile } from "./pages/Profile.js";
import { Error } from "./pages/Error.js";
import { Navbar } from "./Navbar.js";
import { useState, createContext } from 'react';

//global comtext
export const AppContext = createContext();

function App() {
  const [userName, setUserName] = useState("Ruby");
  return (
    <div className="App">
      <AppContext.Provider value={{ userName, setUserName }}>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="*" element={<Error></Error>}></Route>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
