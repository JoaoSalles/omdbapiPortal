import styled from 'styled-components';
import { BLACK_DARK, WHITE } from '../../../constants/styles/colors'

export const ListMovieContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
    visibility: hidden;
    opacity: 0;

    &.show {
        visibility: visible;
        opacity: 1;
    }
`;

export const GridContainer = styled.div`
    flex-grow: 1;
`;

export const PaginationButton = styled.button`
    background: #635F5B;
    border: #635F5B;

    svg {
        color: ${WHITE};
    }

    &.previous-button {
        border-radius: 0 10px 10px 0;
    }

    &.next-button {
        border-radius: 10px 0 0 10px;
    }

    &:hover {
        background: ${BLACK_DARK};
    }
    

    @media only screen and (max-width: 650px) {
        &.previous-button {
            position: fixed;
            left: 0;
            height: 50%;
        }

        &.next-button {
            position: fixed;
            right: 0;
            height: 50%;
        }
    }     
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