import React from "react";
import styled from "../../Styles/Button.module.css";
// import Styled from 'styled-components';

// const Buttons = Styled.button`
//     width: 70px;
//     height: 70px;
//     border: none;
//     margin: 10px;
//     border-radius: 2em;
//     font-size: 30px;
// `;

//적용시 왜 zero가 작동이 되지 않는가?

const Button = ({ value, onClick, className }) => {
  return (
    // <Buttons className={className} onClick={()=>onclick(value)}>
    //   {value}
    // </Buttons>
    <button className={className} onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

export default Button;
