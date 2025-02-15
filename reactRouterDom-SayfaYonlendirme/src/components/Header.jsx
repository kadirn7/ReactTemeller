import {Link} from 'react-router-dom'
import '../App.css'
function Header() {
  return (
    <div className='header'>
       <nav className='nav'>
        

        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/about'>About</Link>
        <Link className='link' to='/products'>Products</Link>
        <Link className='link' to='/contact'>Contact</Link>

        
        
        
       </nav>
    </div>
  )
}
export default Header;
