import react, {useState} from 'react';

const Count = () => {
  const [Value, setValue] = useState(0);

  const add = () => {
    setValue(Value + 1);
  }

  const min = () => {
    if(Value > 0){
      setValue(Value - 1);     //0보다 클때만 - 시키기
    }
  }

  const resetResult = () => {
    setValue(0);      //값초기화
  }

  return (
    <div>
      <h1>{Value}</h1>
      <button onClick={add}>+1</button>
      <button onClick={min}>-1</button>
      <button onClick={resetResult}>초기화</button>
    </div>
  );
};

export default Count;