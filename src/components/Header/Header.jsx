import React from 'react';
import logo from "../../assets/images/Logo.png";
import Button from '../Button/Button';

import { FaBars } from "react-icons/fa";


import "./Header.css";
import { useState } from 'react';
import BackDrop from '../BackDrop/BackDrop';

const Header = () => {

  const [showMenuNav, setShowMenuNav] = useState(false);

  const toggleMenuHandler = () => {
    setShowMenuNav(true);
  }

  return (
    <header>
      <div className="container flex">

        { showMenuNav && <BackDrop toggleNav={() => setShowMenuNav(false)} /> }

        <div>
          <img src={logo} alt="" />
        </div>

        <nav className='main__nav'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Our Work</li>
            <li>
              <Button text={`Contact us`} />
                
            </li>
          </ul>
        </nav>

        <div className='d-none-lg' onClick={toggleMenuHandler}>
          <FaBars size={24} />
        </div>


      </div>

      { showMenuNav && (
        <div className='header__mobile'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Our Work</li>
            <li>Contact us</li>
          </ul>
        </div>
      ) }


    </header>
  )
}

export default Header;