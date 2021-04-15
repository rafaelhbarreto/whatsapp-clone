import styled from 'styled-components';

export const ChatIntroWrap = styled.div`
    width: 100%;
    flex: 1;
    background: #f8f9fa;
    border-bottom: 4px solid #4ADF83; 
    flex-direction: column;
    align-items: center;
    display: flex;
    justify-content: center;


    img {
        width: 250px;
        height: 250px;
    }

    h1 {
        margin-top: 28px;
        font-weight: 300;
        color: #525252;
        font-size: 32px;
    }

    p {
        width: 100%;
        max-width: 460px;
        color: #00000073;
        font-size: .875rem;
        padding-bottom: 34px;
        border-bottom: 1px solid #ccc;
    }

    span {
        color: #00000073;
        font-size: .875rem;
        display: flex;
        align-items: center;

        svg {
            font-size: 19px;
            margin-right: 10px;
        }

        a {
            text-decoration: none;
            color: #07bc4c;
        }
    }

`; 