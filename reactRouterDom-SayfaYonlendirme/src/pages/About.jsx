import React from 'react'
import {Link,Outlet} from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>About</h1>
      <Link className='link' style={{marginRight:'10px'}} to='employee'>Employee About </Link>
      <Link className='link' to='company'>Company About</Link>
  <Outlet/>

    </div>
  )
}
export default About;
