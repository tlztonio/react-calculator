import React from "react";
import { ContainerStyled } from "../styles/Screen.style.jsx";

const Screen = ({ value }) => {
    return (
        <ContainerStyled>
            {value}
        </ContainerStyled>
    );
};

export default Screen;