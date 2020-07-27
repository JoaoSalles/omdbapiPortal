import React from 'react';
import { MovieType } from '../../types/SearchResultType';
import { ToolTipElement, ButtonContainer, LinkElement } from './styles/styles';

interface TooltipProp {
    movie: MovieType
}

function TooltipComponent(props: TooltipProp) {
    const { Type, Year, Title, imdbID } = props.movie;

    return (
        <ToolTipElement>
            <p>Title: {Title}</p>
            <p>Type: {Type}</p>
            <p>Year: {Year}</p>
                <LinkElement to={`/movie/${imdbID}`}>
                    <ButtonContainer>
                        +Info
                    </ButtonContainer>
                </LinkElement>
        </ToolTipElement>
    )
}


export default TooltipComponent;
