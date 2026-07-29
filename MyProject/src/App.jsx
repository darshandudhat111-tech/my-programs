import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Hello from './Component/Hello'
import Counter from './page/Counter'
import Calculator from './page/Calculator'
import Home from "./page/Home";
import Register from "./page/Register";
import Program6 from "./page/Prog6";
import Program5 from "./page/Prog5";
import Program4 from "./page/Prog4";
import UserList from "./page/UserList";
import College from "./page/College";
import Clock from "./page/Clock";
import AnalogClock from "./page/AnalogClock";

export const usercontect = createContext();

function App() {
  const facultyData = [
    {
      image : "https://i.pravatar.cc/150?img=1",
      name : "Joe hulk",
      phone : "+91 9288378223",
      email : "joe.hulk@company.in",
      address : "Ramnagar"
    }
  ];


  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Prog4" element={<Program4 />} />
            <Route path="/Prog5" element={<Program5 />} />
            <Route path="/Prog6" element={<Program6 />} />
            <Route path="/UserList" element={<UserList />} />
            <Route path="/College" element={
               <usercontect.Provider value={facultyData}>
                  <College />
               </usercontect.Provider>
            } 
            />
            <Route path="/Clock" element={<Clock />}/>
            <Route path="/Analogclock" element={<AnalogClock />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
