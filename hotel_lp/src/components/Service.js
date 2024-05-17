import React from 'react'

// components
import facialSpa from '../Images/facial spa.jpg'
import backMassage from '../Images/back massage.jpg'
import thaiStone from '../Images/thai stone massage.jpg'
import thaiFoot from '../Images/thai foot massage.jpg'



const Service = () => {
  return <>
        <h1 className='serviceSection-header'><span className='bold'>Spa</span> Treatments</h1>
        <h2 className='serviceSection-subHeader'>A Perfumed Spa Experience For Mind And Body: Renaissance</h2>
      <div className="service-container">
        <div className='section-bg'></div>

        <div className='section section-service'>
           <div className='eachService'>
                <img src={facialSpa} alt="Facial Spa"/>
                <article className='serviceDesc'>
                   <h2 className='service-header'>Facial spa treatment</h2>
                   <p className='service-price'><span className='bold'>$65.00</span> - 60 Minute Voucher</p>
                   <p className='service-para italic'>
                   Radiate confidence with this deeply beneficial facial massage.
                   </p>
                   <button className='btn service-btn'>Book Now</button>
                </article>

           </div>

           <div className='eachService'>
                <img src={backMassage} alt="Back Massage"/>
                <article className='serviceDesc'>
                   <h2 className='service-header'>Back Massage</h2>
                   <p className='service-price'><span className='bold'>$125.00</span> - 60 Minute Voucher</p>
                   <p className='service-para italic'>
                   This calming massage is a blend of strokes, stretch movements and acupressure.
                   </p>
                   <button className='btn service-btn'>Book Now</button>
                </article>

           </div>

           <div className='eachService'>
                <img src={thaiStone} alt="Thai Stone massage"/>
                <article className='serviceDesc'>
                   <h2 className='service-header'>Thai Stone massage</h2>
                   <p className='service-price'><span className='bold'>$75.00</span> - 70 Minute Voucher</p>
                   <p className='service-para italic'>
                   This is the treatment your muscles have been craving.
                   </p>
                   <button className='btn service-btn'>Book Now</button>
                </article>

           </div>

           <div className='eachService'>
                <img src={thaiFoot} alt="Thai Foot Massage"/>
                <article className='serviceDesc'>
                   <h2 className='service-header'>Thai Foot Massage</h2>
                   <p className='service-price'><span className='bold'>$65.00</span> - 60 Minute Voucher</p>
                   <p className='service-para italic'>
                   Reflexology is the systematic application of pressure techniques to the feet and hands.
                   </p>
                   <button className='btn service-btn'>Book Now</button>
                </article>

           </div>
        </div>

      </div>
  </>
}

export default Service