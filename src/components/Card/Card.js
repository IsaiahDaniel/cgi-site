import React from 'react';
import "./Card.css";

const Card = ({ avatar, name, position }) => {
  return (
    <div className='card'>
        <img src={avatar} alt="" />
        <div className='text-center'>
            <h2>{name}</h2>
            <h3>{position}</h3>
        </div>
    </div>
  )
}

export default Card