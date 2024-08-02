import React from 'react';
import './social.css';
import behance from '../../assets/behance.png';
import dribble from '../../assets/dribble.png';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';

const social = () => {
  return (
    <section className='social' id= 'social'>
    <div className='Links'>

                <img src={behance} alt='behance' className='link'/>
                <img src={dribble} alt='dribble' className='link'/>
                <img src={linkedin} alt='linkedin' className='link'/>
                <img src={instagram} alt='instagram' className='link'/>
                </div>
   </section>
  )
}

export default social