
import React from 'react';
import img1 from '../../Assests/Portfolioimage.jpg';
import './About.css';
import { FaDownload } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSchool, FaGraduationCap } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';
import resume from '../../Assests/Nashimiya A resume.pdf'

const About = () => {
  const infoItems = [
    { label: 'Name', value: 'Nashimiya' },
    { label: 'Languages', value: 'Tamil, English' },
    { label: 'Birthdate', value: '04 November 2002' },
    { label: 'Phone', value: '7871336426' },
    { label: 'Nationality', value: 'Indian' },
    { label: 'Email', value: 'nashimiya0402@gmail.com' },
    { label: 'Location', value: 'Chennai' },
    { label: 'Skype', value: 'Nashimiya' }
  ];
   
    
  return (
    <div className='about-Container'>
      <Navbar/>
      <div className='about-title'>
        <h2>About me</h2>
      </div>
      <div className='aboutSection'>
        <div className='aboutSection-image'>
          <img src={img1} alt="profileImg" className='Image' />
        </div>
        <div className='about-description'>
          <h1>I'M NASHIMIYA</h1>
          <div className='about-Content'>
            {infoItems.map((item, index) => (
              <div key={index} className='info-item'>
                <p className='item-right'>{item.label}:</p>
                <p className='item-left'>{item.value}</p>
              </div>
            ))}
          </div>
          <div className='download'>
            <button className='download-btn'>
              <FaDownload className='download-icon' />
              <a href={resume} download='resume'><span>Download my Cv</span></a>
              
            </button>
          </div>
        </div>
      </div>
      <div className="element-divider"></div>
      <div className="education-title">
        <h3>EDUCATION</h3>
      </div>
      <VerticalTimeline lineColor="orange">
        <VerticalTimelineElement className="timeElement" iconStyle={{ background: "white", color: "orange" }} icon={<FaSchool />}
          date={<span style={{ fontSize: '16px', fontFamily: 'open sans, sans-serif', color: 'white' }}>2017-2018</span>}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'open sans, Sans-serif' }}>SSLC - RAJAS MATRICULATION SCHOOL</h3>
          <p style={{ fontFamily: 'open sans, Sans-serif' }}>Secondary School Leaving Certificate (SSLC) Score: 94%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="timeElement" iconStyle={{ background: "white", color: "orange" }} icon={<FaSchool />}
          date={<span style={{ fontSize: '16px', fontFamily: 'open sans, sans-serif', color: 'white' }}>2019-2020</span>}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'open sans, Sans-serif' }}>HSC - RAJAS MATRICULATION SCHOOL</h3>
          <p style={{ fontFamily: 'open sans, Sans-serif' }}>Higher Secondary Certificate (HSC) Score:79%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="timeElement" iconStyle={{ background: "white", color: "orange", fontSize: "14px" }} icon={<FaGraduationCap />}
          date={<span style={{ fontSize: '16px', fontFamily: 'open sans, sans-serif', color: 'white' }}>2020-2024</span>}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'open sans, Sans-serif' }}>GRADUATION - ANNA UNIVERSITY</h3>
          <p style={{ fontFamily: 'open sans, Sans-serif' }}>Graduation score: 92%</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div className="element-divider"></div>
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
      </div>
    </div>
  );
}

export default About;