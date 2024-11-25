import React, {useState, useEffect} from 'react'

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval =setInterval(() =>{
      setTime(new Date())
    },1000)
     return () => {
      clearInterval(interval);
     };
  },[]);

  function formatTime(time) {
  
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let secound = time.getSeconds();
    const meridiem = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;
   return `${padZero(hours)}:${padZero(minutes)}:${padZero(secound)} ${meridiem}`
  }

   function padZero(num) {
     return num < 10 ? `0${num}` : num

   }

  return (

    <div className='clock-container'>
      
            <p className='title'>Digital Clock using React</p>


      <div className="clock">
        <span>{formatTime(time)}</span>
      </div>


    
    </div>

  );
}

export default DigitalClock