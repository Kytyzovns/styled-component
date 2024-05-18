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
    height: 40px;
    width: 130px;
    font-weight: bold;
    color: ${props => props.textColor};
    border-radius: 10px;
    border: solid 3px ${themes.colors.blu};
    
    ${props => props.filled && css<StyledBtnProps>`
        background-color: ${themes.colors.blu};

        &:hover {
            background-color: ${themes.colors.pink};
            border-color: ${themes.colors.pink};
        }
    `}


    ${props => props.outlined && css<StyledBtnProps>`
        background-color: white;

        &:hover {
            border-color: ${themes.colors.pink};
            color: ${themes.colors.pink};
        }
    `}
`