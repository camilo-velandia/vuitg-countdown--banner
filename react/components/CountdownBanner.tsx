import React from 'react';
import Countdown from './Countdown'

type Props ={
  finalDate: string
}

const CountdownBanner = ({finalDate}:Props) => {

  // const finalDateFormatted = new Date(finalDate).getTime()
  const finalDateFormatted = new Date('2022-06-18').getTime()
  console.log('finalDate',finalDate)

  if(!finalDate){
    return (
        <h2>No se ha establecido un fecha limite para el contador</h2>
    );
  }

  return (
    <div>
      Banner
      <Countdown targetDate={finalDateFormatted} />
    </div>
  );
};

CountdownBanner.schema = {
  title: 'Countdown Banner',
  type: 'object',
  properties: {
    finalDate: {
      title: 'Fecha de finalizacion del contador',
      type: 'string',
      widget: {
        'ui:widget': 'date',
      },
    }
  },
}

export default CountdownBanner;
