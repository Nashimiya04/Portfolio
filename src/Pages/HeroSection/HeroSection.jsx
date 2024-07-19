import React from 'react'
import { FaUser } from "react-icons/fa";
import './HeroSection.css'
import img1 from '../../Assests/Portfolioimage.jpg'
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
const HeroSection = () => {
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
            <h2 className='heroSection-content'>
            I'M  <span>NASHIMIYA</span> 
            </h2><div className='change-text'>
              <h3>
              {/* <span className='heroSection-Header'></span> */}
              <span className='heroSection-Header'>FRONT-END DEVELOPER</span>
              </h3>
            </div>
           
            <p className='heroSection-description'>Proficient in HTML, CSS, JavaScript, and frameworks like React.js. Dedicated to responsive design and intuitive UI/UX."

</p>
 <div className='heroSection-button'>
   <button className='primary-btn' onClick={handleWatchNowClick}><FaUser  className='userIcon'/><span>MORE ABOUT ME</span></button>
 </div> </div>
  
       
  </div>
    </div>
  )
}

export default HeroSection