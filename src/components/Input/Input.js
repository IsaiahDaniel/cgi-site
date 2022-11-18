import React from 'react';
import "./Input.css";

const Input = ({ type, placeholder }) => {

    if(type === "textarea"){
        return (
            <div className='form-group'>
                <textarea name="content" id="contet" cols="20" rows="10" placeholder={placeholder}></textarea>
            </div>
        )
    }

  return (
    <div className='form-group'>
        <input type={type} placeholder={placeholder} className="input" />
    </div>
  )
}

export default Input;