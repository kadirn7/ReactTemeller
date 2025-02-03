import { useState,useEffect } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count,setCount] = useState(0)
  const [name,setName] = useState("Adı değiştir")
  const [lastname,setLastname] = useState("Soyadı değiştir")
  useEffect(()=>{
    console.log("HEr zaman çalışır")

  })
  useEffect(()=>{  //database bağlantısı yapıldığında kullanılır.
    console.log("Yalnızca bir kere çalışır")
  },[])

  useEffect(()=>{
    console.log("İlk render edildiğinde ve count değiştiğinde çalışır")
  },[count])

  useEffect(()=>{
    console.log("İlk render edildiğinde ve name-lastname değiştiğinde çalışır ")
  },[name,lastname])

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
      </div>
      <div>
        <h1>{name} {lastname} </h1>
        
        <button onClick={()=>setName("Kadir")}>Değiştir</button>
        <button onClick={()=>setLastname("Paşaoğlu")}>Değiştir</button>
      </div>
      <div>
      
        <button onClick=
        {()=>{
          setCount(0)
          setName("Adı Değiştir")
          setLastname("Soyadı Değiştir")
        }}
          >Reset</button>
       
      </div>
    </>
    
  )
}

export default App
