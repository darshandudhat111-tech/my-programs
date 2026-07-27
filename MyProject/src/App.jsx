import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hello from './Component/Hello'
import Counter from './page/Counter'
import Calculator from './page/Calculator'
import Home from "./page/Home";
import Register from "./page/Register";
import SimpleCalc from "./page/SimpleCalc";
import Program6 from "./page/Prog6";
import Program5 from "./page/Prog5";
import Program4 from "./page/Prog4";
import UserList from "./page/UserList";

function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/simplecalc" element={<SimpleCalc />} />
            <Route path="/Prog4" element={<Program4 />} />
            <Route path="/Prog5" element={<Program5 />} />
            <Route path="/Prog6" element={<Program6 />} />
            <Route path="/UserList" element={<UserList />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
