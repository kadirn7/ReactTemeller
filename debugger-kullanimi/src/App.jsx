import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [vize,setVize] = useState(0)
  
  const [final,setFinal] = useState(0)
  const [ortalama,setOrtalama] = useState(0)
  const [durum,setDurum] = useState("")
 
  const ortalamaHesapla= ()=>{
    debugger;
    const  ort= topla() /2;
    setOrtalama(ort)
    yazdır(ort)
  }
  const topla=()=>{
    debugger;
    const toplam= vize + final;
    return toplam;
  }
  const yazdır =(cevap)=>{
    console.log("Ortalama: " + cevap)
  }
  

  return (
    <>
      <div>
        <div>
          <input type="number" value={vize} onChange={(e) => setVize(Number(e.target.value))} />
        </div>
        <div>
          <input type="number" value={final} onChange={(e) => setFinal(Number(e.target.value))} />
        </div>
        <div>
          <button onClick={ortalamaHesapla}>Ortalama Hesapla</button>
          
        </div>
        <div>
            Ortalama :{ortalama}
        </div>
      </div>
      
    </>
  )
}

export default App
