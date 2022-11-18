import React from 'react';
import "./BackDrop.css";

const BackDrop = ({ toggleNav }) => {

    const toggleNavHandler = () => {
        toggleNav(false);
    }


  return (
    <div className='backdrop' onClick={toggleNavHandler}></div>
  )
}

export default BackDrop