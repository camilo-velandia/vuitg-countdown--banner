import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import DateTimeDisplay from './DateTimeDisplay';
import {useCssHandles} from 'vtex.css-handles';


type Props ={
  targetDate:number
}

const Countdown = ({targetDate}:Props) => {

  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  const CSS_HANDLES=["countdown_counter"]
  const handles = useCssHandles(CSS_HANDLES)

  if (days + hours + minutes + seconds <= 0) {
    return <p className={`flex ${handles.countdown_counter}`}>Ha finalizado la cuenta regresiva!</p>;
  }

  return (
    <div className={`flex ${handles.countdown_counter}`}>
        <DateTimeDisplay value={days} type={'Dias'} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Horas'} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Minutos'} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'segundos'} />
    </div>
  );
};

export default Countdown;
