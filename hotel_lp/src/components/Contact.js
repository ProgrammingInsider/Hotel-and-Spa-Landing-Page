import React from 'react'

const Contact = () => {
  return <>
    <div className='contactContainer'>
        <form className='contactUs-form'>
            <h1 className='contactHeader'>Contact Us</h1>
            <input type="text" placeholder='Enter Your Name' className='contactInput'/>
            <input type="email" placeholder='Enter a valid email address' className='contactInput'/>
            <textarea placeholder='Enter your message' className='contactInput' rows={10}>
            </textarea>
            <button type='submit' className='btn'>Submit</button>
        </form>

    </div>
  </>
}

export default Contact