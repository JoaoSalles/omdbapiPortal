import React from 'react';
import { MovieType } from '../../types/SearchResultType';
import { ToolTipElement, ButtonContainer} from './styles/styles';

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
            <ButtonContainer>
                <button>+Info</button>
            </ButtonContainer>
        </ToolTipElement>
    )
}


export default TooltipComponent;
