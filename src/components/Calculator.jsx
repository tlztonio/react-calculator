import { useReducer, useState, useEffect } from "react";
import Button from './Button';
// import ButtonsContainer from './ButtonsContainer';
import Screen from './Screen';
import { CalculatorStyle } from "../styles/Calculator.style";
import { ButtonsContainer } from "../styles/ButtonsContainer.style";


const initialState = {
    sign: "",
    number: 0,
    result: 0
}

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
            return { ...initialState };
        case "+-":
            // invert
            return {
                ...state,
                sign: "",
                number: state.number ? state.number * -1 : 0,
                result: state.result ? state.result * -1 : 0,
            }
        case "=":
            // equals
            if (state.sign && state.number) {
                return {
                    ...state,
                    sign: "",
                    number: 0,
                    result:
                        state.number === "0" && state.sign === "/"
                            ? "Diviser par 0 est completement illégal !!!"
                            :
                            calcul(
                                Number(state.number),
                                Number(state.result),
                                state.sign
                            ),
                };
            }
            break;
        case "%":
        case "/":
        case "X":
        case "-":
        case "+":
            // sign
            return {
                ...state,
                sign: action.value,
                number: 0,
                result: !state.result && state.number ? state.number : state.result,
            };
        case ".":
            // comma
            return {
                ...state,
                number: !state.number.toString().includes(".") ? state.number + action.value : state.number,
            };

        default:
            return {
                ...state,
                number: state.number === 0 && action.value === "0"
                    ? "0"
                    : Number(state.number + action.value),
                result: !state.sign ? 0 : state.result,
            };

    }
}

function Calculator() {

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
        <CalculatorStyle>
            <div>
                <Screen value={state.number ? state.number : state.result}></Screen>
            </div>

            <ButtonsContainer>
                {btnValues.map((row, key) => (
                    <div className="row" key={key}>
                        {row.map((value, index) => (
                            <Button key={index} value={value} onClick={handleClick} />
                        ))}
                    </div>
                ))}
            </ButtonsContainer>
        </CalculatorStyle>
    );
}

export default Calculator;