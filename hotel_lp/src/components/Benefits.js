import React from 'react'

// Image
import BenefitSpa from '../Images/benefits of spa.jpg'

const Benefits = () => {
  return <>
  <div className='section benefitsContainer'>
    <div className='benefits-bg'></div>
    <div className="containerTitle">
        <h1>Benefits of spa</h1>
    </div>
    <img src={BenefitSpa} alt="Benefit Spa" className="benefitsImg"/>
    <div className="Benefits">
        <h2 className='benefitHeader'>Top 10 Benefits of Spa Treatments</h2>
        <ul className='benefitLists'>
            <li>Helps with sleep problems</li>
            <li>Reduces muscle and joint pain</li>
            <li>Reduces stress</li>
            <li>Improves heart health</li>
            <li>Assists your fight against diabetes</li>
            <li>Helps with eliminating toxins</li>
            <li>Increases self-confidence</li>
        </ul>
        <button className='btn'>View More</button>
    </div>
  </div>

  <div className='section'>
      <h1 className='aboutSpa-header'>
      The word spa is widely believed to mean “health through water”.
      </h1><br/>
<div className='aboutSpa-para'>
      <p className='aboutSpa-para1'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className='aboutSpa-para2'>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
      irure dolor in reprehenderit in voluptate velit esse cillum 
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
      cupidatat non proident, sunt in culpa qui officia deserunt 
      mollit anim id est laborum.
      </p>
</div>

  </div>
  </>
}

export default Benefits