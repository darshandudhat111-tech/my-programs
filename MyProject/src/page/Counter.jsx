import { useState } from "react";
import "../css/Counter.css";

function Counter() {
    const[count,setCount] = useState(0);
    return(
        <div className="container">
            <div className="counter-box">
                <h1>This is Counter Demo</h1>
                <h2>Count {count}</h2>
                <div><button className="btn" onClick={() => setCount(count+1)}>Increse</button></div>
            </div>
        </div>
    )
}
export default Counter;