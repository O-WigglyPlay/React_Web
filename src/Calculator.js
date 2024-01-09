import React, {useState} from "react";

const Calculator = () => {
  const [Display, setDisplay] = useState("0");
  
  return(
    <div>
      <h1>{Display}</h1>

    </div>
  );
};