import React, { useState } from 'react';
import './Navbar.css';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaHome, FaUser } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { BiSolidMessageRounded } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="menu-icon" onClick={toggleSidebar}>
        {isOpen ? <IoMenu /> :  <RxCross2 />}
      </div>
      <nav className={`side-nav ${isOpen ? 'open' : ''}`}>
        <div className='navbar'>
          <NavLink to={"/"} className='navItem'>
            <span className='navLabel'><FaHome className='navIcon' /></span>
            <span className='text'>Home</span>
          </NavLink>
          <NavLink to={"/About"} className='navItem'>
            <span className='navLabel'><FaUser className='navIcon' /></span>
            <span className='text'>About</span>
          </NavLink>
          <NavLink to={"/Skills"} className='navItem'>
            <span className='navLabel'><IoBookSharp className='navIcon' /></span>
            <span className='text'>Skills</span>
          </NavLink>
          <NavLink to={"/Contact"} className='navItem'>
            <span className='navLabel'><BiSolidMessageRounded className='navIcon' /></span>
            <span className='text'>Contact</span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;












