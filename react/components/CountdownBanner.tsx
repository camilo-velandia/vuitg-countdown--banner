import React, { ReactNode} from 'react';
import Countdown from './Countdown'
import {useCssHandles} from 'vtex.css-handles';
import Banner from './Banner';

type Props ={
  children?:[ReactNode,ReactNode]
  finalDate: string
}

const CountdownBanner = ({ children, finalDate }:Props) => {

  const CSS_HANDLES=["countdown_container"]
  const handles = useCssHandles(CSS_HANDLES)
  // const finalDateFormatted = new Date(finalDate).getTime()
  const finalDateFormatted = new Date('2022-06-19').getTime()

  // if(!finalDate){
  //   return (
  //       <h2>No se ha establecido un fecha limite para el contador</h2>
  //   );
  // }

  return (
    <div className={`${handles.countdown_container} flex`}>
      <Banner children={children} />
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
