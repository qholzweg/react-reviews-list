import { FC, useEffect, useRef, useState } from "react";

export const Watch: FC = () => {

  const [time, setTime] = useState<String>(new Date().toLocaleTimeString());

  const updateTime = () => {
    setTime(new Date().toLocaleTimeString());
  }

  const interval = useRef<ReturnType<typeof setInterval> | null>(null)
  useEffect(() => {
    interval.current = setInterval(
      () => updateTime(),
      1000
    );
    return () => clearInterval(interval.current as ReturnType<typeof setInterval>)
  }, []);


  return (
    <div className='watch p-4 rounded-lg'>
      <span className="time text-xl text-white">{time}</span>
    </div>
  );
}