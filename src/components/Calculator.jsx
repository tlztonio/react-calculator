import {useReducer, useState} from "react";

const initialState = {count: 0};

const reducer = (state, action) => {

    const operand1 = parseInt(action.operand1)
    const operand2 = parseInt(action.operand2)

    switch (action.type) {
        case 'add':
            return {count: operand1 + operand2};
        case 'sub':
            return {count: operand1 - operand2};
        case 'mult':
            return {count: operand1 * operand2};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function Calculator() {
    const [operand1, setOperand1] = useState(0);
    const [operand2, setOperand2] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <div>
            <div>
                <div>
                    <h1>Calculator</h1>
                </div>
            </div>

            <div>
                <p></p>
            </div>

            <div>
                <div>
                    <button>1</button>
                </div>
                <div>
                    <button>2</button>
                </div>
                <div>
                    <button>3</button>
                </div>
            </div>

            <div>
                <div>
                    <button>4</button>
                </div>
                <div>
                    <button>5</button>
                </div>
                <div>
                    <button>6</button>
                </div>
            </div>

            <div>
                <div>
                    <button>7</button>
                </div>
                <div>
                    <button>8</button>
                </div>
                <div>
                    <button>9</button>
                </div>
            </div>

            <div>
                <button>0</button>
            </div>

            <div>
                <button>+</button>
                <button>-</button>
                <button>*</button>
            </div>

            <div>
                <button>=</button>
            </div>

            <div>
                <button>Reset</button>
            </div>
        </div>
    )
}

export default Calculator;