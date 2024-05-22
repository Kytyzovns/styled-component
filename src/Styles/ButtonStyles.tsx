import styled, {css} from "styled-components";
import {themes} from "../myTheme";

type StyledBtnProps = {
    backColor?: string;
    textColor?: string;
    filled?: boolean;
    outlined?: boolean
}
export const StyledBtn = styled.button<StyledBtnProps>`
    cursor: pointer;
    width: 86px;
    height: 30px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 10px;
    line-height: 200%;

    ${props => props.filled && css<StyledBtnProps>`
        border: transparent;
        background-color: ${themes.colors.blu};
        color: ${themes.colors.white};

        &:hover {
            background-color: ${themes.colors.pink};
            border-color: ${themes.colors.pink};
        }
    `}
    
    ${props => props.outlined && css<StyledBtnProps>`
        border: 2px solid ${themes.colors.blu};
        background-color: ${themes.colors.white};
        color: ${themes.colors.blu};

        &:hover {
            border-color: ${themes.colors.pink};
            color: ${themes.colors.pink};
        }
    `}
`