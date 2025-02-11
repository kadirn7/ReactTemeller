import { useState } from 'react'
import axios from 'axios'
import './App.css'

const baseUrl='http://localhost:3000'

function App() {

  const getAllUsers= ()=>{
    axios.get(`${baseUrl}/users`) //baseurl+"users"
    
  }
  
  return (
    <>
      <div>
       
      </div>
      
    </>
  )
}

export default App
