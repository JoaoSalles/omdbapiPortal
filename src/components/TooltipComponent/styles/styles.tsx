import styled from 'styled-components';
import { Link } from "react-router-dom";

export const ToolTipElement = styled.div`
    width: 150px;

    p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const ButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    width: 100%;
`;


export const LinkElement = styled(Link)`
    text-decoration: none;
`;
