import React from 'react'
import { useState } from 'react'

const Home = () => {
  const [name, setName ] = useState('narmadha');
  const handleClick =() =>{
  setName('harini');
  }
  return (
   <div className='home'>
    <h2>Homepage</h2>
    <p>{name}</p>
    <button onClick={handleClick}>Click</button>
   </div>
  )
}

export default Home;