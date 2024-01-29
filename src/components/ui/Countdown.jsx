import { useState, useEffect } from 'react';

const Countdown = () => {

    const calculateTimeLeft = () => {
        const difference = +new Date("2024-01-31") - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [counterDays, setCounterDays] = useState(0);
    const [counterHours, setCounterHours] = useState(0);
    const [counterMinute, setCounterMinute] = useState(0);
    const [counterSeconds, setCounterSeconds] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            const timeLeft = calculateTimeLeft();
            setCounterDays(timeLeft.days);
            setCounterHours(timeLeft.hours);
            setCounterMinute(timeLeft.minutes);
            setCounterSeconds(timeLeft.seconds);
        }, 1000);
        return () => clearTimeout(timer);
    });

  return (
    <div className='text-white mt-12 glass py-2 px-8 rounded absolute -bottom-1/2'>
        <h3 className="text-lg md:text-md text-left">Round 1 - PPT Submission Ends in - </h3>
        <div className="flex gap-5 text-secondary">
            <div> <span className="countdown font-mono text-4xl"> <span style={{"--value":counterDays}}></span> </span> days </div> 
            <div> <span className="countdown font-mono text-4xl"> <span style={{"--value":counterHours}}></span> </span> hours </div> 
            <div> <span className="countdown font-mono text-4xl"> <span style={{"--value":counterMinute}}></span> </span> min </div> 
            <div> <span className="countdown font-mono text-4xl"> <span style={{"--value":counterSeconds}}></span> </span> sec </div>
        </div>
    </div>
  )
}

export default Countdown