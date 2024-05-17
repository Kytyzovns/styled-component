import {createGlobalStyle} from "styled-components";
import styled, {css} from "styled-components";
import {themes} from "./myTheme";

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

