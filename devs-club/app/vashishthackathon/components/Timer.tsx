import { TimeUnit } from './TimeUnit';
import { useCountdown } from '../hooks/useCountdown';

export const Timer = () => {
  const timeLeft = useCountdown(new Date('2025-03-27T00:00:00'));

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 my-12 justify-items-center">
    <TimeUnit value={timeLeft.days} label="Days" />
    <TimeUnit value={timeLeft.hours} label="Hours" />
    <TimeUnit value={timeLeft.minutes} label="Minutes" />
    <TimeUnit value={timeLeft.seconds} label="Seconds" />
  </div>
  
  );
};