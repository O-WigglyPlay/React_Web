import react, {useState} from 'react';
import styles from './Calculator.module.css'

const Calculator_hard = () => {
  const [Value, setValue] = useState(0);
  const [OldValue, setOldValue] = useState(0);
  const [operator, setOperator] = useState(0);
  
  const inputValue = (e) => {
    if (Value === 0){
      setValue(e.target.value);
      console.log(e.target.value);
    } else{
      setValue(e.target.Value + Value);
    }
  }

  const clear = () => {
    setValue(0);
  }

  const percent = (e) => {
    setValue(Value / 100);
  }

  const changeSign = () => {
    if(Value > 0){
      setValue(-Value);
    } else {
      setValue(Math.abs(Value));
    }
  }
  
  const operatorHandler = (e) => {
    let operlatorInput = e.target.value;
    setOperator(operlatorInput);
    setOldValue(Value);
    setValue(0);
  }

  const calculate = () => {
    if(operator === "/"){
      setValue(parseFloat(OldValue) / parseFloat(Value));
    } else if(operator === "X"){
      setValue(parseFloat(OldValue) * parseFloat(Value));
    } else if(operator === "-"){
      setValue(parseFloat(OldValue) - parseFloat(Value));
    } else if(operator === "+"){
      setValue(parseFloat(OldValue) + parseFloat(Value));
    }
  }

  return(
    <div className="CalculatorArea">
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className="Display">
            <h1 className={styles.result}>{Value}</h1>
            <button onClick={clear}>AC</button>
            <button onClick={changeSign}>+/-</button>
            <button onClick={percent}>%</button>
            <button onClick={operatorHandler}>+</button>
            <button onClick={inputValue} value={1}>1</button>
            <button onClick={inputValue} value={2}>2</button>
            <button onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator_hard;