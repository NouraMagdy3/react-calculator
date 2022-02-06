import React from 'react';
//style
import './calculator.css';

const Calculator = () => {

    //state
    const [result, setResult] = React.useState("0");

    //functions
    //handle click
    const handleClick = e => {
        setResult(result.concat(e.target?.name));
    };
    //clear
    const clear = () => {
        setResult("");
    };

    //backspace
    const backspace = () => {
        setResult(result?.slice(0, -1));
    };

    //calc
    const calc = () => {
        try {
            setResult(Number(eval(result).toString()).toFixed(2));
        } catch (error) {
            setResult("invalid format");
        }
    };

    return (
        <div>
            <div className="container">
                <h1 className="title">React Calculator</h1>
                <div className="calculator">
                    <input type="text" className="calc-numbers" value={result} />
                    <div className="calculator-buttons">
                        <button onClick={clear} className="btn clear span-2">
                            C
                        </button>
                        <button onClick={backspace} className="btn orange">
                            &larr;
                        </button>
                        <button onClick={handleClick} name="/" className="btn orange">
                            &divide;
                        </button>
                        <button onClick={handleClick} name="7" className="btn">
                            7
                        </button>
                        <button onClick={handleClick} name="8" className="btn">
                            8
                        </button>
                        <button onClick={handleClick} name="9" className="btn">
                            9
                        </button>
                        <button onClick={handleClick} name="*" className="btn orange">
                            x
                        </button>
                        <button onClick={handleClick} name="4" className="btn">
                            4
                        </button>
                        <button name="5" className="btn">
                            5
                        </button>
                        <button onClick={handleClick} name="6" className="btn">
                            6
                        </button>
                        <button onClick={handleClick} name="-" className="btn orange">
                            -
                        </button>
                        <button onClick={handleClick} name="1" className="btn">
                            1
                        </button>
                        <button onClick={handleClick} name="2" className="btn">
                            2
                        </button>
                        <button onClick={handleClick} name="3" className="btn">
                            3
                        </button>
                        <button onClick={handleClick} name="+" className="btn orange">
                            +
                        </button>
                        <button onClick={handleClick} name="0" className="btn span-3">
                            0
                        </button>
                        <button onClick={calc} className="btn orange equal">
                            =
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
