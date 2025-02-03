import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [vize,setVize] = useState(0)
  
  const [final,setFinal] = useState(0)
  const [ortalama,setOrtalama] = useState(0)
  const [durum,setDurum] = useState("")
  function ortalamaHesapla(){
    setOrtalama((vize*0.4)+(final*0.6))
    if(ortalama>=50){
      setDurum("Geçti")
    }else{
      setDurum("Kaldı")
    }
  }

  return (
    <>
      <div>
        <div>
          <input type="number" value={vize} onChange={(e)=>setVize(e.target.value)} />
        </div>
        <div>
          <input type="number" value={final} onChange={(e)=>setFinal(e.target.value)} />
        </div>
        <div>
          <button onClick={ortalamaHesapla}>Ortalama Hesapla</button>
          <h1>{ortalama}</h1> 
          <h1>{durum}</h1>
        </div>
        <div>
          
        </div>
      </div>
      
    </>
  )
}

export default App
