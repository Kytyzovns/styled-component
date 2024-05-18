import {StyledBtn, StyledDiv, StyledImg} from "./Styles";
import landscape from "./images/landscape.jpg";
import {themes} from "./myTheme";
import React from "react";

type CardProps = {
    headline: string;
}

function StyledCard(props: CardProps) {
    return (

        <StyledDiv>
            <StyledImg src={landscape} alt="Landscape"/>

            <div className="div1">
                <h2>{props.headline}</h2>
                <p>By mastering these properties,
                    you can add depth and dimension to your web elements,
                    enhancing the visual appeal of your designs.
                </p>
                <div className="div2">
                    <StyledBtn filled textColor={"white"}>See more</StyledBtn>
                    <StyledBtn outlined textColor={themes.colors.blu}>Save</StyledBtn>
                </div>
            </div>
        </StyledDiv>
    );
}

export default StyledCard;

