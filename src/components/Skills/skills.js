import React from 'react';
import './skills.css';
import ui from '../../assets/ui.png';
import web from '../../assets/web.png';
import mob from '../../assets/mob.png';


const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDescription'>I'm a junior web designer with a background in Computer Science . I honed my abilities in various design software and developed a solid foundation in design principles, typography, color theory, and user-centered design through my coursework and projects</span>

        <div className='skillBars'>
            <div className='skillBar'>
                <img src={ui} alt='ui' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>I have earned ui/ux design through projects and assignments</p>
                </div>

            </div>


            <div className='skillBar'>
                <img src={web} alt='web' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Web Design</h2>
                    <p>I have earned web design through projects and assignments</p>
                </div>

            </div>

            <div className='skillBar'>
                <img src={mob} alt='app' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>I have earned app design through projects and assignments</p>
                </div>

            </div>


        </div>
       
    </section>
  )
}

export default Skills