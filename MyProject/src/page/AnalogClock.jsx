import { useEffect, useState } from "react";
import "../css/AnalogClock.css";

function AnalogClock(){
    const [time, setTime] = useState(new Date);
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    const second = time.getSeconds();
    const minute = time.getMinutes();
    const hour = time.getHours();

    const secondDeg = second * 6;
    const minuteDeg = minute * 6 + second * 0.1;
    const hourDeg = (hour % 12) * 30 + minute * 0.5;

    const ticks = Array.from({ length: 60 });

    const numbers = Array.from({ length: 12 }, (_, index) => index + 1);

    return(
        
        <>
            <div className="clock-container">
                <div className="clock">
                    <div className="hour-hand" style={{ transform: `translateX(-50%) rotate(${hourDeg}deg)` }}></div>
                    <div className="minute-hand" style={{ transform: `translateX(-50%) rotate(${minuteDeg}deg)` }}></div>
                    <div className="second-hand" style={{ transform: `translateX(-50%) rotate(${secondDeg}deg)` }}></div>
                    
                    {
                        ticks.map((_, index) => {
                            return (
                                <div
                                    key={index}
                                    className={index % 5 === 0 ? "tick major" : "tick"}
                                    style={{ transform: `rotate(${index * 6}deg)` }}
                                ></div>
                            );
                        })
                    }

                    {
                        numbers.map((num) => {
                        const angle = num * 30 - 90;
                        const radius = 140;

                        const x = radius * Math.cos((angle * Math.PI) / 180);
                        const y = radius * Math.sin((angle * Math.PI) / 180);
                        return (
                            <div  
                            key={num}
                            className="number"
                            style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            transform: "translate(-50%, -50%)"
                            }}
                            >
                            {num}
                            </div>
                        );
                        })
                    }

                    <div className="number number12">12</div>
                    <div className="number number3">3</div>
                    <div className="number number6">6</div>
                    <div className="number number9">9</div>
                    
                    <div className="center-dot"></div>
                </div>
            </div>
        </>
    )
}
export default AnalogClock;