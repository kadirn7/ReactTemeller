
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import  About from './pages/About'     
import Contact from './pages/Contact'
import Products from './pages/Products'
import NotfoundPage from './pages/NotfoundPage'
import Header from './components/Header'
function App() {
  

  return (
    <>
      <div>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='*' element={<NotfoundPage/>}/>
        </Routes>
      </div>
      
    </>
  )
}

export default App
