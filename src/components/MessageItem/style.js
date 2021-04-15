import styled from 'styled-components';

export const MessageItemWrap = styled.div`
    padding: 6px 7px 8px 9px; 
    background-color: #fff; 
    border-radius: 4px;
    max-width: 60%;
    box-shadow: 0 1px 1px #ccc;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 12px;

    span {
        color: #f44336; 
        font-size: 13px;
        display: block;
        font-weight: 500; 
    }

    .details {

        display: flex;
        justify-content: space-between;
        align-items: center; 

        p {
            padding: 0;
            margin: 5px 0;
            color: #303030;
            font-size: 15px;
        }

        small {
            font-size: 12px;
            color: #919191;
            position: relative;
            bottom: -9px;
            margin-left: 30px;
        }
    }
`;