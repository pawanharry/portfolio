import React from 'react';
import'./intro.css';
import myPic from '../../assets/myPic.png';
import hire from '../../assets/hire.png'
import{Link} from'react-scroll';

const Intro = () => {
  return (
   <section id='intro'>
    <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'M <span className='introName'>Pawandeep</span><br/>Website Designer</span>
        <p className='intropara'>I'm a junior UI/UX designer passionate about creating intuitive <br/> and engaging user experiences.</p>
        <Link><button className='btn'><img src={hire} alt='hire'className='btnImg'/>Hire Me</button></Link>
      

    </div>
    <img src={myPic} alt='Profile' className='bg'/>
    


   </section>
  )
}

export default Intro