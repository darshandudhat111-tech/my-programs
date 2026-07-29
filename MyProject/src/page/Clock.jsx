import { useEffect, useState } from "react";
import "../css/Clock.css";

function Clock(){
    const [time,setTime] = useState(new Date);
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date);
        });
        return() => clearInterval(interval);
    });
    return (
        <div className="clock-container">
            <div className="clock-box">
                <h2>Digital Clock</h2>
                Current Time : {time.toLocaleTimeString()}
            </div>
        </div>
    )
}
export default Clock;