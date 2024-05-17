import React from 'react'

// Icons
import blackBar from '../Shapes/black_bar.svg'

const Header = () => {
  return <>
       <div className='header-container' style={{ "width": "100%","height": "70px","display": "flex","justify-content": "space-between","align-items": "center","padding": "0 30px"}}>
           <div className='logo' style={{"color": "#9ca3af","font-size": "1.5rem", "z-index": "1"}}>logo</div>
           <div className='bar' style={{"width": "50px","cursor":"pointer"}}><img src={blackBar} style={{"width": "100%",}}/></div>
       </div>
  </>
}

export default Header