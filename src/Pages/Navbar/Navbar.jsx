import React, { useState } from 'react';
import './Navbar.css';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaHome, FaUser } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { BiSolidMessageRounded } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="menu-icon" onClick={toggleSidebar}>
        {isOpen ? <RxCross2 /> : <IoMenu />}
      </div>
      <nav className={`side-nav ${isOpen ? 'open' : ''}`}>
        <div className='navbar'>
        <Link to={"/"} className='navItem'>
          <span className='navLabel'><FaHome className='navIcon' />
            <span className='text'>Home</span>
          </span>
        </Link>
        <Link to={"/About"} className='navItem'>
          <span className='navLabel'><FaUser className='navIcon' />
            <span className='text'>About</span>
          </span>
        </Link>
        <Link to={"/Skills"} className='navItem'>
          <span className='navLabel'><IoBookSharp className='navIcon' />
            <span className='text'>Skills</span>
          </span>
        </Link>
        <Link to={"/Contact"} className='navItem'>
          <span className='navLabel'><BiSolidMessageRounded className='navIcon' />
            <span className='text'>Contact</span>
          </span>
        </Link>
        </div></nav>
    </div>
  );
};

export default Navbar;










