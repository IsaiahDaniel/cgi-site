import React from 'react';
import "./Button.css";

const Button = ({ text, href, type, classNames }) => {
  return (
    <button type={type} className={`${classNames}`}>{text}</button>
  )
}

export default Button;