import styled from 'styled-components';

export const ListMovieContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
    visibility: hidden;
    opacity: 0;
    transition: opacity 1s linear;*

    &.show {
        visibility: visible;
        opacity: 1;
    }
`;

export const GridContainer = styled.div`
    border: 1px solid black;
    flex-grow: 1;
`;

export const PaginationButton = styled.button`
    
`

export const MoviesDisplay = styled.div`
    display: grid;
    gap: 20px 20px;
    grid-template-columns: auto auto auto;

    .image-container {
        place-self: center;

        img {
            height: 360px;
            width: 250px;
        }
    }

    @media only screen and (min-width: 650px) and (max-width: 1000px) {
        grid-template-columns: auto auto;
    }

    @media only screen and (max-width: 650px) {
        grid-template-columns: auto;
    }
`;