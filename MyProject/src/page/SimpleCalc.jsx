import { useState } from 'react';
import '../css/SimpleCalc.css';
function SimpleCalc() {
    const [display, setDisplay] = useState("0");
    const [firstNumber, setFirstNumber] = useState("");
    const [operator, setOperator] = useState("");
    const [smallDisplay, setSmallDisplay] = useState("");
    
    const handleNumber = (value) => {
        if(display === "0"){
            setDisplay(value);
        }else{
            setDisplay(display + value);
        }
    };

    const handleOperator = (op) => {
        setFirstNumber(display);
        setOperator(op);
        setSmallDisplay(display + " " + op);
        setDisplay("0");
    };

    const handleEqual = () => {
        let answer = 0;
        const num1 = Number(firstNumber);
        const num2 = Number(display);

        switch(operator){
            case "+":
                answer = num1 + num2;
                break;
            case "-":
                answer = num1 - num2;
                break;
            case "x":
                answer = num1 * num2;
                break;
            case "/":
                answer = num1 / num2;
                break;
           case "%":
                answer = num1 % num2;
                break;
            default:
                answer = display;
        }
        setDisplay(answer.toString());
        setSmallDisplay("");
        setFirstNumber("");
        setOperator("");
    };

    return (
        <div className="container">
            <div className="calculator">
                <div className="display">
                    <div className="small-number">{smallDisplay}</div>
                    <div className="big-number">{display}</div>
                </div>
                <div className="buttons">
                    <button onClick={() => handleOperator("/")}>/</button>
                    <button onClick={() => handleOperator("%")}>%</button>
                    <button>CE</button>
                    <button className="ac" onClick={() => handleNumber("0")}>AC</button>

                    <button onClick={() => handleNumber("7")}>7</button>
                    <button onClick={() => handleNumber("8")}>8</button>
                    <button onClick={() => handleNumber("9")}>9</button>
                    <button onClick={() => handleOperator("x")}>X</button>

                    <button onClick={() => handleNumber("4")}>4</button>
                    <button onClick={() => handleNumber("5")}>5</button>
                    <button onClick={() => handleNumber("6")}>6</button>
                    <button onClick={() => handleOperator("-")}>-</button>

                    <button onClick={() => handleNumber("1")}>1</button>
                    <button onClick={() => handleNumber("2")}>2</button>
                    <button onClick={() => handleNumber("3")}>3</button>
                    <button onClick={() => handleOperator("+")}>+</button>

                    <button onClick={() => handleNumber("0")}>0</button>
                    <button onClick={() => handleNumber("00")}>00</button>
                    <button onClick={() => handleNumber(".")}>.</button>
                    <button onClick={handleEqual}>=</button>
                </div>
            </div>
        </div>
    );
}
export default SimpleCalc;