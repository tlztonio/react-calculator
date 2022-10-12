import React from "react";
import { ButtonStyled } from "../styles/Button.style.jsx";

const Button = ({ className, value, onClick }) => {
    return (
        <ButtonStyled className={className} onClick={onClick}>
            {value}
        </ButtonStyled>
    );
};

export default Button;