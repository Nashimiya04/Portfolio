
     
     
 
import React from 'react'
import './Skills.css'
import Navbar from '../Navbar/Navbar';
const Skills = () => {
  return (
    <div>      
      <Navbar/>
      {/* <div ><div className='bg-img'></div>
      <div className='position-title'><h2>Skills</h2></div>
           <div className='position-content'><p><span>Home</span></p>
           <p>/</p>
                 <p>Skills</p>
           </div>
      </div> */}
      
      <div className="Skills-title">
    <h3>PROGRAMMING SKILLS</h3>
  </div>
  <div className='skill'>
    <span className='skill-title'>HTML</span>
    <div className='skill-content'>
      <span className='skill-bar html'><span className='skill-percentage'>95%</span></span>
    </div>
  </div>
  <div className='skill'>
    <span className='skill-title'>CSS</span>
    <div className='skill-content'>
      <span className='skill-bar css'><span className='skill-percentage'>85%</span></span>
    </div>
  </div>
  <div className='skill'>
    <span className='skill-title'>Javascript</span>
    <div className='skill-content'>
      <span className=' skill-bar javascript'><span className='skill-percentage'>70%</span></span>
    </div>
  </div>
  <div className='skill'>
    <span className='skill-title'>ReactJS</span>
    <div className='skill-content'>
      <span className=' skill-bar react'><span className='skill-percentage'>60%</span></span>
    </div>
  </div> </div>
  )
}

export default Skills