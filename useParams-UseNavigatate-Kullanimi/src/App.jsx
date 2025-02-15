import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Products from './pages/Products'
import ProductDetails from './pages/Product-Details'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/product-detail/:id" element={<ProductDetails/>}/>
        </Routes>

      </div>
      
    </>
  )
}

export default App
