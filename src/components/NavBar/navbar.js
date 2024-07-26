import React, { useState } from 'react';
import './navbar.css';
import PKinitials from '../../assets/PKinitials.png';
import downloadPdf from '../../assets/downloadPdf.png';
import menu from '../../assets/menu.png';
import{Link} from'react-scroll';


const Navbar = () => {
  const [showMenu, setShowMenu] =useState(false);
  return (
    <nav className='navbar'>
        <img src={PKinitials} alt='logo' className='logo'/>
        <div className='desktopMenu'>

        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'> Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About </Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'> Portfolio</Link>
        <Link activeClass='active' to='social' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Social</Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-150} duration={500} className='desktopMenuListItem'> Contact</Link>
        
        </div >
      


        <img src={menu} alt='Menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>

        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem'onClick={() => setShowMenu(false)}> Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem'onClick={() => setShowMenu(false)}>About </Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem'onClick={() => setShowMenu(false)}> Portfolio</Link>
        <Link activeClass='active' to='social' spy={true} smooth={true} offset={-50} duration={500} className='listItem'onClick={() => setShowMenu(false)}>Social</Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-150} duration={500} className='listItem'onClick={() => setShowMenu(false)}> Contact</Link>
        
        </div >
       
        
    </nav>
  )
}

export default Navbar