import styled from 'styled-components';
import { BLACK_LIGHT, BLACK_DARK, BLACK, WHITE } from '../../../constants/styles/colors'

export const FormElement = styled.form`
    display: flex;
    justify-content: center;
    top: 40%;
    position: relative;
    transition-duration: 1s;

    &.moveUp {
        top:0;
    }

    @media only screen and (max-width: 650px) {
        justify-content: normal;
    }
`;

export const InputElement = styled.input`
    &[type=text] {
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 10px 0px 0px 10px;
        box-sizing: border-box;
        margin: 1px 0;
        min-width: 170px;
        padding: 12px 20px;
        width: 70%;
    }

    &[type=submit] {
        display: inline-block;
        border: 1px solid #ccc;
        border-left: none;
        border-radius: 0px 10px 10px 0px;
        box-sizing: border-box;
        margin: 1px 0;
        width: 65px;

        &:hover {
            background: ${BLACK};
            color: ${WHITE};
        }
    }

    @media only screen and (max-width: 650px) {
        &[type=text] {
            border-left: none;
            width: 100%;
        }

        &[type=submit] {
            border-right: none;
        }

        &[type=text],
        &[type=submit] {
            border-radius: 0px;
        }
    }
`;
