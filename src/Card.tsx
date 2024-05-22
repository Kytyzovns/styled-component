import landscape from "./images/landscape.jpg";
import React from "react";
import {StyledDiv} from "./Styles/DivStyles";
import {StyledImg} from "./Styles/ImgStyles";
import {StyledBtn} from "./Styles/ButtonStyles";
import {StyledH1, StyledP} from "./Styles/TextStyles";


type CardProps = {
    headline: string;
}

function StyledCard(props: CardProps) {
    return (
        <StyledDiv>
            <StyledImg src={landscape} alt="Landscape"/>
                <StyledH1>{props.headline}</StyledH1>
                <StyledP>By mastering these properties,
                    you can add depth and dimension to your web elements,
                    enhancing the visual appeal of your designs.
                </StyledP>
                <div className="div2">
                    <StyledBtn filled>See more</StyledBtn>
                    <StyledBtn outlined>Save</StyledBtn>
                </div>
        </StyledDiv>
    );
}

export default StyledCard;

