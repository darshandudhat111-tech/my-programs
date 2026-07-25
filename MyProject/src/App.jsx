import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Program4 from './Component/Prog4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Program4 />
      </div>
    </>
  )
}

export default App
