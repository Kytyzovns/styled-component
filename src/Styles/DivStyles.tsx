import styled from "styled-components";

export const StyledDiv = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    box-shadow: 0 0 30px 15px rgba(4, 5, 5, 0.15);
    margin: 50px;

    .div1 {
        * {
            margin: 15px 0 15px 0 ;
        }
    }
    .div2 {
        display: flex;
        gap: 20px;
    }
`