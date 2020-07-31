import styled from 'styled-components';
import { Link } from "react-router-dom";
import { BLACK, WHITE } from '../../../constants/styles/colors'

export const MovieInfoContainer = styled.div`
    align-items: center;
    display: flex;
    min-height: 100%;
    height: 100%;
    justify-content: center;
    min-height: 700px;
    width: 100%;

    .image-area {
        grid-area: image-area;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-evenly;

        img {
            height: 260px;
            margin-top: 25px;
            width: 175px;
        }
    }

    .main-info-area {
        grid-area: mainInfo;
        height: 100%;
        width: 100%;
    }

    .sub-info-area {
        border-top: 1px double #1f181f;
        grid-area: sub-info-area;
        height: 100%;
        width: 100%;
    }
`;

export const GridContainer = styled.div`
    border: 1px double #1f181f;
    border-radius: 38px 38px 38px 38px;
    display: grid;
    height: 90%;
    max-width: 1200px;
    min-height: 700px;
    width: 100%;

    grid-template-areas:
    "mainInfo mainInfo mainInfo image-area"
    "mainInfo mainInfo mainInfo image-area"
    "sub-info-area sub-info-area sub-info-area sub-info-area";
    "sub-info-area sub-info-area sub-info-area sub-info-area";

    @media only screen and (max-width: 650px) {
        border: none;
        grid-template-areas:
            "image-area"
            "mainInfo"
            "sub-info-area";
    }
`;

export const NoMovieElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InfoElement = styled.p`
    margin: 10px;
`;


export const LinkElement = styled(Link)`
    text-decoration: none;

    button {
        margin: 20px;

        &:hover {
            background: ${BLACK};
            border-color: ${WHITE};
            border-radius: 5px;
            color: ${WHITE};
        }
    }
`;