import styled from 'styled-components';
import { BLACK_LIGHT, BLACK_DARK, BLACK, WHITE } from '../../../constants/styles/colors'

export const FormElement = styled.form`
`;

export const ReturnButton = styled.button`
    background: ${BLACK};
    border: none;
    color: ${WHITE};
    margin: 5px 10px;
    height: 50px;
    width: 50px;

    &:hover{
    background: ${BLACK_LIGHT}
    }
`;
