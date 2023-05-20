import { FC, useEffect, useState } from "react";

export const Watch: FC = () => {

  const [time, setTime] = useState<String>(new Date().toLocaleTimeString());

  const updateTime = () => {
    setTime(new Date().toLocaleTimeString());
  }

  useEffect(() => {
    const interval = setInterval(
      () => updateTime(),
      1000
    );
    return clearInterval(interval)
  }, []);


  return (
    <div className='watch p-4 rounded-lg'>
      <span className="time text-xl text-white">{time}</span>
    </div>
  );
}