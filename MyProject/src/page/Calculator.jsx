import { useState } from "react";
import '../css/calculator.css';

function Calculator(){
    const[num1, setNum1] = useState(0);
    const[num2, setNum2] = useState(0);
    const[result, setResult] = useState(0);
    const[active, setActive] = useState("");
    
    const Add = () => {
        setResult(Number(num1) + Number(num2));
        setActive("add");
    };
    
    const Sub = () => {
        setResult(Number(num1) - Number(num2));
        setActive("sub");

    };

    const Mul = () => {
        setResult(Number(num1) * Number(num2));
        setActive("mul");
    };

    const Div = () => {
        setResult(Number(num1) / Number(num2));
        setActive("div");
    };
    return (
    <div className="main">
        <div className="calculator">
            <h1>Simple Calculator</h1>
            <input type="number" placeholder="Enter Num1" value={num1} onChange={(e)=>setNum1(e.target.value)}/>
            <input type="number" placeholder="Enter Num2" value={num2} onChange={(e)=>setNum2(e.target.value)}/>
            <div>
                <button className={active === "add" ? " btn add active" : "btn add"} onClick={Add}>add</button>
                <button className={active === "sub" ? " btn sub active" : "btn sub"} onClick={Sub}>Sub</button>
                <button className={active === "mul" ? " btn mul active" : "btn mul"} onClick={Mul}>Mul</button>
                <button className={active === "div" ? " btn div active" : "btn div"} onClick={Div}>Div</button>
            </div>
            <div className="result">
                Result : {result}
            </div>
        </div>
    </div>
    ); 
}
export default Calculator;