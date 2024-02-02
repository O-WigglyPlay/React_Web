import react, { useState } from 'react';
import styles from './Calculator.module.css';

const Calculator_hard = () => {
  const [Value, setValue] = useState(0);    //변수나 함수 모두 처음은 소문자 다음 단어부터는 대문자 oldValue 이런식으로 사용
  const [OldValue, setOldValue] = useState(0);
  const [operator, setOperator] = useState("");
  //useState는 최대한 적게!

  const inputValue = (e) => {
    let input = e.target.value;
    if (Value === 0) {
      setValue(input);
    } else {
      setValue(Value + input);
    }
  }

  const clear = () => {
    setValue(0);
  }

  const percent = (e) => {
    setValue(Value / 100);
  }

  const changeSign = () => {
    if (Value > 0) {
      setValue(-Value);
    } else {
      setValue(Math.abs(Value));
    }
  }

  const operatorHandle = (e) => {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldValue(Value);
    setValue(0);
  }

  const calculate = () => {
    if (operator === "/") {
      setValue(+OldValue / +Value);
    } else if (operator === "X") {
      setValue(parseFloat(OldValue) * parseFloat(Value));
    } else if (operator === "-") {
      setValue(parseFloat(OldValue) - parseFloat(Value));
    } else if (operator === "+") {
      setValue(parseFloat(OldValue) + parseFloat(Value));
    }
  }

  return (
    <div className="CalculatorArea">
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className="Display">
            <h1 className={styles.result}>{Value}</h1>
          </div>
          <div className={styles.btn_container}>
            <button className={styles.gary} onClick={clear}>AC</button>
            <button className={styles.gary} onClick={changeSign}>+/-</button>
            <button className={styles.gary} onClick={percent}>%</button>
            <button className={styles.orange} onClick={operatorHandle} value={'/'}>÷</button>
            <button className={styles.deepgray} onClick={inputValue} value={7}>7</button>
            <button className={styles.deepgray} onClick={inputValue} value={8}>8</button>
            <button className={styles.deepgray} onClick={inputValue} value={9}>9</button>
            <button className={styles.orange} onClick={operatorHandle} value={'X'}>X</button>
            <button className={styles.deepgray} onClick={inputValue} value={4}>4</button>
            <button className={styles.deepgray} onClick={inputValue} value={5}>5</button>
            <button className={styles.deepgray} onClick={inputValue} value={6}>6</button>
            <button className={styles.orange} onClick={operatorHandle} value={'-'}>-</button>
            <button className={styles.deepgray} onClick={inputValue} value={1}>1</button>
            <button className={styles.deepgray} onClick={inputValue} value={2}>2</button>
            <button className={styles.deepgray} onClick={inputValue} value={3}>3</button>
            <button className={styles.orange} onClick={operatorHandle} value={'+'}>+</button>
            <button className={styles.zero} onClick={inputValue} value={0}>0</button>
            <button className={styles.deepgray} onClick={inputValue} value={"."}>.</button>
            <button className={styles.orange} onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator_hard;