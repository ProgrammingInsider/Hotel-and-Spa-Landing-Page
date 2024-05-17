import React from 'react'

// Images and Shapes
import spa2 from '../Images/spa 2.jpg'
import spa3 from '../Images/spa 3.jpg'
import ImageBg from '../Shapes/Image-bg.svg'



const Treatment = () => {
  return <>
  <div className='section'>
    <h1 className='section-header'><span className='bold'>Spa</span> Treatments</h1>
    <article className='treatment-pic'>
        <div className='eachTreatmentContainer'>
            <article className='EachTreatment_Image first_treatmentImage'>
            <img src={ImageBg} alt="Bg" className='ImageBg first_ImageBg'/>
            <img src={spa3} alt="Treat Image" className='TreatImage'/>
            </article>
        </div>
        <div className='eachTreatmentContainer'>
          <article className='EachTreatment_Image second_treatmentImage'>
          <img src={ImageBg} alt="Bg" className='ImageBg'/>
          <img src={spa2} alt="Treat Image" className='TreatImage'/>
          </article>
          <p className='treat-para'>
          Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est 
          laborum.
          </p>
        </div>

    </article>

     <article className='About-us'>
        <h1 className='section-header'>Luxury <span className='bold'>Spa</span> Hotel</h1>
        <h2>Award-winning all-inclusive destination spa resort</h2>
        <p className='luxury-para'>
            The countdown is on! Grab your shoes, plot your route, and 
            let’s get a move on! Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Sit amet tellus cras adipiscing enim. Ut 
            porttitor leo a diam sollicitudin. Turpis in eu mi bibendum neque 
            egestas congue quisque egestas. 
        </p>
        <img src={ImageBg} alt="Bg" className='ImageBg aboutShapeBg'/>
        <button className='btn'>Book Now</button>
     </article>
  </div>
  </>
}

export default Treatment