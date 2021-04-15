import styled from 'styled-components';


export const AppWindow = styled.div`
    display: flex;
    height: calc(100vh);
    justify-content: center;
    position: relative;

    &::after {
        height: 127px;
        position: absolute;
        top: 0;
        content: " ";
        width: 100%; 
        background-color: #009688;
        z-index: -1;
    }
`;