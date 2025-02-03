import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[firstName,setFirstName] = useState("kadir")
  const [names,setNames] = useState(["kadir","ali","ayşe"])

  const handleChange=()=>
  {
    setFirstName("Mehmet")
  }
  const handleChange2=(e)=>
  {
    setFirstName(e.target.value)
  }
  const handleChange3=(e)=>
  {
    setNames([...names,e.target.value])
  }
  
  const Sayac=()=>{
    setCount(count+1)
  }
  const TersSayaç=()=>{
    setCount(count-1)
  }
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={Sayac}>+</button>
        <button onClick={TersSayaç}>-</button>
       
      </div>
    </>
  )
}

export default App
