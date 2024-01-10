import React, { useState } from 'react';

function Calculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);

  const handleCalculate = () => {
    setSum(number1 + number2);
  };

  return (

    <div>
      <input type="number" placeholder="Number 1" value={number1} onChange={(e) => setNumber1(+e.target.value)} />
      <input type="number" placeholder="Number 2" value={number2} onChange={(e) => setNumber2(+e.target.value)} />
      <button onClick={handleCalculate}>Calculate</button>
      <p>Sum: {sum}</p>
    </div>
  );
};

export default Calculator;