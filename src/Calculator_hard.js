import React, { useState } from 'react';
import Styles from './Calculator.module.css'

const Calculator = () => {
  const [Value, setValue] = useState("");
  const [Result, setResult] = useState(0);

  const getNum = () => {
    setValue((prev) => prev + this.target.value);
  };

  const getoper = () => {
    setValue((prev) => prev + this.target.value);
  };
  return (
    <div className='calculatorArea'>
      <div className={Styles.container}>
        <div className={Styles.resultArea}>
          <div className={Styles.prevArea}>

          </div>
          <div className={Styles.currentArea}>
            <h1></h1>
          </div>
        </div>
        <div className={Styles.numArea}>
          <button>AC</button>
          <button value={1}>1</button>
          <button value={2}>2</button>
          <button value={3}>3</button>
          <button value={4}>4</button>
          <button value={5}>5</button>
          <button value={6}>6</button>
          <button value={7}>7</button>
          <button value={8}>8</button>
          <button value={9}>9</button>
          <button value={0}>0</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;