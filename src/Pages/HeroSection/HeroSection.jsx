import React from 'react'
import { FaUser } from "react-icons/fa";
import './HeroSection.css'
import img1 from '../../Assests/Portfolioimage.jpg'
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
// import Typewriter from 'typewriter-effect'
import {useTypewriter} from 'react-simple-typewriter'
const HeroSection = () => {
const [text]=useTypewriter({
  words:['Nashimiya','Frond-End Developer'],
  loop:0,
});

  const navigate = useNavigate();


    const handleWatchNowClick = () => {
        navigate('/About'); 
    };
  return (
    
    <div className='heroSection'>
      <Navbar/>
        <div className='heroSection-title'> 
        <div className='heroSection-image'> <img src={img1} alt="profileImg"  className='Image' /></div>
          <div className='heroSection-container'>
            <div className="heroSection_info">
            <h2 className='heroSection-content'>
            HI THERE !
            </h2><div className='change-text'>
              <span>I'M <span className='heroSection-Header' >
              {text}</span></span >
            </div>
           
            <div className='heroSection-description'><p >I specialize in crafting responsive and intuitive interfaces using HTML, CSS, and JavaScript. I'm eager to apply my skills and learn more in framework like React to create compelling user experiences.</p>
            </div>
            </div>

 <div className='heroSection-button'>
   <button className='primary-btn' onClick={handleWatchNowClick}><FaUser  className='userIcon'/><span>MORE ABOUT ME</span></button>
 </div> </div>
  
       
  </div>
    </div>
  )
}

export default HeroSection