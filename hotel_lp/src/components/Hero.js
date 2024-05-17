import React from 'react'

//Images
import spa1 from '../Images/spa1.jpg'

const Hero = () => {
  return <>
     <div className='heroContainer'>
      <div className='heroBg'></div>
      <div className='heroDesc'>
        <h1 className='heroHeader'>Welcome to <span className='bold'>Spa Hotel</span></h1>
        <p className='heroPara'>
        Non blandit massa enim nec dui. Pulvinar 
        pellentesque habitant morbi tristique 
        senectus et netus et malesuada. At auctor 
        urna nunc id cursus metus.
        </p>
        <button className='btn'>Book Now</button>
      </div>
      <img src={spa1} alt="spa" className='heroImg'/>

     </div>
  </>
}

export default Hero