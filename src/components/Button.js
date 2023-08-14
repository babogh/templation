import React from 'react';
import './Button.css';

const Button = ({ text, onClick, position, svgIcon }) => {
  const buttonStyle = {
    ...position
  };

  return (
    <button className="custom-button" style={buttonStyle} onClick={onClick}>
      {svgIcon && <img src={svgIcon} className="svg-icon" alt="SVG Icon" />}
      {text}
    </button>
  );
};

export default Button;
