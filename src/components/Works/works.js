import React from 'react';
import './works.css';
import chic from '../../assets/chic.png';
import dental from '../../assets/dental.png';
import fragrance from '../../assets/fragrance.png';
import moneyVest from '../../assets/moneyVest.png';
import music from '../../assets/music.png';

import weddingBuzz from '../../assets/weddingBuzz.png'



const Works = () => {
  return (
    <section id='works'>
        <h2 className='worktitle'>My Portfolio</h2>
        <span className='worksDesc'>I take pride in paying attention to the smallest details andand making sure that my work is pixel perfect . I am excited to bring my skills and experience to help busineses to achieve their goals and create a strong online presence.</span>
        
        <div className='worksImgs'>
            <img src={chic} alt='' className='worksImg'/>
            <img src={dental} alt='' className='worksImg'/>
            <img src={fragrance} alt='' className='worksImg'/>
            <img src={moneyVest} alt='' className='worksImg'/>
            <img src={music} alt='' className='worksImg'/>
            <img src={weddingBuzz} alt='' className='worksImg'/>
            
        </div>
        <button className='worksBtn'>See More</button>
       
    </section>
  )
}

export default Works