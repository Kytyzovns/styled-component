import styled from "styled-components";
import {themes} from "../myTheme";

export const StyledDiv = styled.div`
    font-family: "Inter", sans-serif;
    width: min-content;
    padding: 10px;
    margin: 30px;
    height: min-content;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    box-shadow:  0 4px 20px 5px rgba(0, 0, 0, 0.1);
    background-color: ${themes.colors.white};
`