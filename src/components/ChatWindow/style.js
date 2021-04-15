import styled from 'styled-components';

export const ChatWindowWrap = styled.div`
    width: 100%;
    max-width: 950.5px;
    display: flex;
    flex: 1;
    flex-direction: column;

    header {
        width: 100%; 
        height: 59px;
        background-color: #ededed;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 1rem;  
        flex-shrink: 0;

        .info-contact {
            min-width: 140px;
            height: 40px;
            align-items: center;
            display: flex;

            img {
                border-radius: 50%; 
                width: 40px;
                height: 40px;
                margin-right: 13px;
            }

            span {
                font-size: 18px;
                color: #4a4a4a; 
            }
        }

        .actions {
            width: 90px;
            display: flex;
            justify-content: space-around; 
            color: #919191; 
        }

        // 62 + 59 
    }

    .content-body {
        width: 100%; 
        height: calc(100vh - 120px);
        background: #e5ddd5; 
        padding: 0 84px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
    }

    footer {
        background: #ededed; 
        height: 62px; 
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 10px; 

        .actions {
            width: 94px; 
            display: flex;
            justify-content: space-around; 
            align-items: center;
            padding: 5 10px;
            

            svg {
                color: #919191; 
                
                &:hover {
                    cursor: pointer;    
                }

                &:nth-child(2) {
                    transform: rotate(45deg);
                }
            }
        }

        input {
            padding: 9px 12px 11px;
            margin: 5px 10px;
            background-color: #fff;
            border: 1px solid #fff;
            border-radius: 21px;
            flex: 1 1 auto;
            outline: none;
            color: #4a4a4a;
            font-size: 14px;
        }

        svg {
            color: #919191; 
            cursor: pointer;
        }
    }
`; 