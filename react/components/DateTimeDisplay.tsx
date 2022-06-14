import React from 'react';
import {useCssHandles} from 'vtex.css-handles';

type Props ={
  value:number,
  type:string,
}

const DateTimeDisplay = ({ value, type }:Props) => {

  const CSS_HANDLES=["countdown_date_item","countdown_date_text","countdown_date_number"]
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={handles.countdown_date_item}>
      <p className={handles.countdown_date_text}>{value}</p>
      <span className={handles.countdown_date_number}>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
