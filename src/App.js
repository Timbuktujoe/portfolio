import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Breakout from "./Components/Breakout"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Breakout" element={<Breakout />} />
      </Routes>
    </div>
  );
}

export default App;
