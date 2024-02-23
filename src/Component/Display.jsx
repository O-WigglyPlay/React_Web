import React from 'react';
import Styled from 'styled-components';

const Displays = Styled.div`
    color: white;
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
    font-size: 40px;
    font-weight: 400;
`;

const Display = ({ value }) => {
  return (
    <Displays>
      <h1>{value}</h1>
    </Displays>
  );
};

export default Display;
