
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home.js";
import { Contact } from "./pages/Contact.js";
import { Menu } from "./pages/Menu.js";
import { Error } from "./pages/Error.js";
import { Navbar } from "./Navbar.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/menu" element={<Menu></Menu>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
