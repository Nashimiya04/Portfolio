import React from "react";
import "./Contact.css";
import {FaWhatsapp,FaUser,FaEnvelope,FaInstagram,FaDribbble, FaFacebook, FaTwitter, FaYoutube, FaSkype} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidMessageRounded } from "react-icons/bi";
import Navbar from "../Navbar/Navbar";
import { Link } from 'react-router-dom';

const contactInfo = [
  {
    type: "Phone",
    icon: FaWhatsapp,
    value: "7871336426",
  },
  {
    type: "Email",
    icon: FaEnvelope,
    value: "nashimiya0402@gmail.com",
  },
  {
    type: "Instagram",
    icon: FaInstagram,
    value: "Nashie",
  },
  {
    type: "Skype",
    icon: FaSkype,
    value: "Nashimiya",
  },
];

const socialProfiles = [
  { icon: FaFacebook, link: "#" },
  { icon: FaTwitter, link: "#" },
  { icon: FaYoutube, link: "#" },
  { icon: FaDribbble, link: "#" },
];

const Contact= () => {
  return (
    <div className="contacts-container">
     
     <div className="contact-backgroundImage">
     <div className='overlayColor'></div>
     <div className='contactdetails'>
        <h3>GET IN TOUCH</h3>
        <div className="title-container">
          <Link to='/'> <p> <span>Home</span></p></Link>
           <p className='bar-icon'>Get in Touch</p>
        </div>
      </div>
     </div><div className='image-divider'></div>
      <Navbar/>
      <div className="contact-title">
        <h3>CONTACT</h3>{" "}
      </div>
      <div className="contact-flex">
        <div className="contact-info">
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-item">
              <span>{info.type}</span>
              <div className="info_details">
                <info.icon className="contact-icon" />
                <span>{info.value}</span>
              </div>
            </div>
          ))}
          <div className="social-profiles">
            <p>Social Profiles</p>
            <div className="social_info">
              {socialProfiles.map((profile, index) => (
                <a key={index} href={profile.link} className="social-icon">
                  <profile.icon  className="profile-icon"/>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-form">
          <div className="input_form">
            <FaUser className="user_icon" />
            <input type="text" placeholder="Your Name" />
            <MdEmail className="user_mail" />
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="textarea-input">
            <textarea placeholder="Your Message"></textarea>
            <MdEmail className="user_message" />
          </div>
          <div className="message-button">
            <BiSolidMessageRounded className="message" />
            <button type="button">SEND MESSAGE</button>
          </div>
        </div>
       
      </div>
      
    </div>
  );
};

export default Contact;



// import React, { useState } from 'react';
// import { IoMenu } from "react-icons/io5";
// import { RxCross2 } from "react-icons/rx";
// import { FaHome } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";
// import { IoBookSharp } from "react-icons/io5";
// import { BiSolidMessageRounded } from "react-icons/bi";
// import { Link } from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';
// import './Contact.css';

// const Contact = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <div className="App">
//       <Navbar/>
//       <div className={`menu-icon ${isNavOpen ? 'hidden' : ''}`} onClick={toggleNav}>
//         {/* <div className="menu-line"></div>
//         <div className="menu-line"></div>
//         <div className="menu-line"></div> */}
//         <IoMenu className="menu-line" />
//       </div>
//       <div className={`side-nav ${isNavOpen ? 'open' : ''}`}>
//         <div className="close-icon" onClick={toggleNav}><RxCross2 /></div>
//         {/* <a href="#home">HOME</a>
//         <a href="#about">ABOUT</a>
//         <a href="#portfolio">PORTFOLIO</a>
//         <a href="#blog">BLOG</a>
//         <a href="#contact">CONTACT</a> */}
//      <Link to={"/"}><div className='navItem'><span className='navLabel'><FaHome className='navIcon' />
//           <span className='text'>Home</span></span></div></Link>
//           <Link to={"/About"}><div className='navItem'><span className='navLabel'><FaUser className='navIcon' />
//           <span className='text'>About</span></span></div></Link>
//           <Link to={"/Skills"}><div className='navItem'><span className='navLabel'><IoBookSharp className='navIcon' />
//           <span className='text'>Skills</span></span></div></Link>
//           <Link to={"/Contact"}><div className='navItem'><span className='navLabel'><BiSolidMessageRounded className='navIcon' />
//           <span className='text'>Contact</span></span></div></Link>





//       </div>
//     </div>
//   );
// };

// export default Contact;
