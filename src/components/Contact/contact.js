import React from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';


const Contact = () => {
 

  return (
    <section id='contactPage'>
        <div className='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out below form to discuss any work opportunities</span>
            <form className='contactForm' >
                 <input type='text' className='name' placeholder='Your Name' />
                <input type='email' className='email' placeholder='Ypur Email' />
                <textarea name='messge' className=' msg' rows='5'placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                

            </form>
               

        </div>

    </section>
  )
}

export default Contact