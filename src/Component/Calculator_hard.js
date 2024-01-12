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

  return(
    <div className="CalculatorArea">
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className="Display">
            <h1 className={styles.result}>{Value}</h1>
            <button onClick={clear}>AC</button>
            <button onClick={changeSign}>+/-</button>
            <button onClick={percent}>%</button>
            <button onClick={inputValue} value={1}>1</button>
            <button onClick={inputValue} value={2}>2</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator_hard;