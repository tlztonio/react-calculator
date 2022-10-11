import { useReducer, useState, useEffect } from "react";
import Button from './Button';

function Calculator() {

    const initialState = {
        sign: "",
        number: 0,
        result: 0
    }

    const [calc, setCalc] = useState({
        sign: "",
        number: 0,
        result: 0
    });

    const calcul = (a, b, sign) => {
        switch (sign) {
            case "+":
                return a + b;
            case "-":
                return b - a;
            case "X":
                return a * b;
            case "/":
                return b / a;
            case "%":
                return b % a;
        }
    }

    const reducer = (state, action) => {

        switch (action.value) {
            case "C":
                setCalc(initialState);
                break;
            case "+-":
                //'invert'
                break;
            case "=":
                //'equals'
                if (calc.sign && calc.number) {

                    setCalc({
                        ...calc,
                        sign: "",
                        number: 0,
                        result:
                            calc.num === "0" && calc.sign === "/"
                                ? "Can't divide with 0"
                                :
                                calcul(
                                    Number(calc.result),
                                    Number(calc.number),
                                    calc.sign
                                ),
                    });
                }
                break;
            case "%":
            case "/":
            case "X":
            case "-":
            case "+":
                //'sign'
                setCalc({
                    ...calc,
                    sign: action.value,
                    number: calc.result,
                    result: 0,
                });
                break;
            case ".":
                //'comma'
                setCalc({
                    ...state,
                    number: !calc.number.toString().includes(".") ? calc.number + action.value : calc.number,
                });
                break;
            default:
                setCalc({
                    ...calc,
                    result: calc.result === 0 ? action.value : calc.result + action.value
                });
                break;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const btnValues = [
        ["C", "+-", "%", "/"],
        [7, 8, 9, "X"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "="],
    ];

    const handleClick = (e) => {
        e.preventDefault();
        dispatch({ value: e.target.innerHTML });
    }

    return (
        <div>
            <div>
                <div>
                    <h1>Calculator</h1>
                    <p>{calc.result}</p>
                </div>
            </div>

            <div>
                {btnValues.map((row, key) => (
                    <div key={key}>
                        {row.map((value, index) => (
                            <Button key={index} value={value} onClick={handleClick} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Calculator;