import React from 'react';

type Props ={
  value:number,
  type:string,
}

const DateTimeDisplay = ({ value, type }:Props) => {
  return (
    <div className='countdown'>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
