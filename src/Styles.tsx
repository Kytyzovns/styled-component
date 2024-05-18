import {createGlobalStyle} from "styled-components";
import styled, {css} from "styled-components";
import {themes} from "./myTheme";

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    div {
        width: 90%;
        margin: 0;
    }
    .div1 {
        * {
            margin: 15px 0 15px 0 ;
        }
    }
    .div2 {
        display: flex;
        gap: 20px;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    
    
`

export const StyledDiv = styled.div`
    width: 500px;
    //height: 600px;
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    border-radius: 20px;
    box-shadow: 0 0 30px 15px rgba(4, 5, 5, 0.15);
    margin: 50px;

`

export const StyledImg = styled.img`
    width: 95%;
    height: 400px;
    margin-top: 15px;
    border-radius: 15px;
`

type StyledBtnProps = {
    backColor?: string;
    textColor?: string;
}
export const StyledBtn = styled.button<StyledBtnProps>`
    height: 40px;
    width: 130px;
    font-weight: bold;
    color: ${props => props.textColor};
    border-radius: 10px;
    border: solid 3px ${themes.colors.blu};
    background-color: ${props => props.backColor || "white"};
    
`