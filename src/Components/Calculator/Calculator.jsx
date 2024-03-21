import React, { useState } from 'react';
import styles from '../Styles/Calculator.module.css';
import Button from './Button';
import Display from './Display';

const Calculator = () => {
  const [value, setValue] = useState(0);
  const [oldValue, setOldValue] = useState(0);
  const [operator, setOperator] = useState("");

  const inputValue = (input) => {
    if (value === 0) {
      setValue(input);
    } else {
      setValue(value + input);
    }
  };

  const clear = () => {
    setValue(0);
  };

  const percent = () => {
    setValue(value / 100);
  };

  const changeSign = () => {
    setValue(-value);
  };

  const operatorHandle = (op) => {
    setOperator(op);
    setOldValue(value);
    setValue(0);
  };

  const calculate = () => {
    switch (operator) {
      case "/":
        setValue(+oldValue / +value);
        break;
      case "X":
        setValue(parseFloat(oldValue) * parseFloat(value));
        break;
      case "-":
        setValue(parseFloat(oldValue) - parseFloat(value));
        break;
      case "+":
        setValue(parseFloat(oldValue) + parseFloat(value));
        break;
      default:
        break;
    }
  };

  return (
    <div className="CalculatorArea">
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Display value={value} />
          <div className={styles.btn_container}>
            <Button className={styles.gary} onClick={clear} value="AC" />
            <Button className={styles.gary} onClick={changeSign} value="+/-" />
            <Button className={styles.gary} onClick={percent} value="%" />
            <Button className={styles.orange} onClick={operatorHandle} value={'/'} />
            <Button className={styles.deepgray} onClick={inputValue} value={7} />
            <Button className={styles.deepgray} onClick={inputValue} value={8} />
            <Button className={styles.deepgray} onClick={inputValue} value={9} />
            <Button className={styles.orange} onClick={operatorHandle} value={'X'} />
            <Button className={styles.deepgray} onClick={inputValue} value={4} />
            <Button className={styles.deepgray} onClick={inputValue} value={5} />
            <Button className={styles.deepgray} onClick={inputValue} value={6} />
            <Button className={styles.orange} onClick={operatorHandle} value={'-'} />
            <Button className={styles.deepgray} onClick={inputValue} value={1} />
            <Button className={styles.deepgray} onClick={inputValue} value={2} />
            <Button className={styles.deepgray} onClick={inputValue} value={3} />
            <Button className={styles.orange} onClick={operatorHandle} value={'+'} />
            <Button className={styles.zero} onClick={inputValue} value={0} />
            <Button className={styles.deepgray} onClick={inputValue} value={"."} />
            <Button className={styles.orange} onClick={calculate} value={'='} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
