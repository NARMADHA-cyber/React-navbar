import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>The React Blog</h1>
        <div className='links'>
            <ul>
              <li><a href='./' style={{
                color: "white", backgroundColor:"rgb(116, 116, 227)",borderRadius: '5px', paddingRight: '10px',paddingLeft:'10px'
              }}>Home </a></li>
              <li><a href='./create'>Blog</a></li>
              <li><a href ='/'>About Us</a></li>
              <li><a href='/'>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;