import React, {useState} from "react";

const Count = () => {
  const [value, setValue] = useState(0);

  const add = () => {
    setValue(value + 1);
    console.log(value);
  }
  const min = () => {
    setValue(value - 1);
    console.log(value);
  }

  return(
    <div>
      <h1>{value}</h1>
      <button onClick={add}>+1</button>
      <button onClick={min}>-1</button>
    </div>
  );
};

export default Count;