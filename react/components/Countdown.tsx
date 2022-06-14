import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import DateTimeDisplay from './DateTimeDisplay';

type Props ={
  targetDate:number
}

const Countdown = ({targetDate}:Props) => {

  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <p>expirado</p>;
  }

  return (
    <div className="show-counter">
        <DateTimeDisplay value={days} type={'Days'} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} />
    </div>
  );
};

export default Countdown;
