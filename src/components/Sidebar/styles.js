import styled from 'styled-components';

export const Sidebar = styled.section`
    width: 35%;
    max-width: 415px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #DDD;

`;


export const Header = styled.header`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    background-color: #ededed;
    flex-shrink: 0;

    .header-image {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        cursor: pointer;
        overflow: hidden; 

        img {
            width: 100%; 
        }
    }

    .header-buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 140px;

        button {
            background-color: transparent;
            border: none;
            cursor: pointer;

            svg {
                color: #919191;
            }
        }

    }
`;

export const Notification = styled.div`
    background-color: #9de1fe;
    padding: 1.3rem 1rem ;
    display: flex;
    flex-shrink: 0;

    .icon {
        width: 43px;
        height: 43px;
        background-color: rgba(255, 255, 255, .9);
        border-radius: 50%; 
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        color: #9de1fe;
        margin-right: 1rem;
    }

    .notification-details {
        span {
            font-size: 16px;
            display: block;
            line-height: 21px;
            color: #242424;
        }

        button {
            border: none;
            display: flex;
            align-items: center;
            background-color: transparent;
            outline: none;
            padding-left: 0;
            color: #666;
            font-size: .806rem;
            
            svg {
                font-size: 19px;
            }

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;

export const Search = styled.div`
    background-color: #f6f6f6;
    height: 49px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    flex-shrink: 0;

    .search-wrap {
        width: 100%;
        height: 35px;
        background: white;
        padding: 4px 30px 3px 12px;
        border-radius: 20px;
        display: flex;
        align-items: center;


        svg {
            color: #919191;
            font-size: 1rem;
            margin-right: 30px;
        }

        input[type="text"], 
        input[type="search"] {
            height: 100%;
            width: 100%;
            border: none;
            outline: none;
            font-size: 14px;
            color: #4a4a4a;
            
            &::placeholder {
                color: #919191;
            }
        }
    }
`;

export const ChatList = styled.ul`

    list-style: none; 
    margin: 0%;
    padding: 0; 
    overflow-y: auto;
    background: #fff;
    scrollbar-width: thin;
    scrollbar-color: #ccc white;
    
    -webkit-scrollbar {
        width: 10px;
    }

    -webkit-scrollbar-track {
        background: white;
    }

    -webkit-scrollbar-thumb {
        background-color: blue;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        border: 3px solid orange;  /* creates padding around scroll thumb */
    }

    li {
        height: 72px;
        background: white;
        display: flex;
        align-items: center;
        padding: 0 14px 0 16px;
        transition: background-color .05s linear;

        &.active {
            background-color: #ececec;

            &:hover {
                background-color: #ececec;

                .details .details-secondary .actions{
                    right: 0px;
                    background: #ececec;
                }
            }
        }

        img {
            width: 49px;
            height: 49px;
            border-radius: 50%;
            margin-right: 15px;
        }

        &:hover {
            background-color: #f5f5f5;
            cursor: pointer;

            .details .details-secondary .actions{
                right: 0px;
                background: #f5f5f5;
            }
        }

        .details {
            display: flex;
            flex: 1;
            flex-direction: column; 
            justify-content: space-between;
            border-bottom: 1px solid #f5f5f5;
            height: 100%;
            padding: 1rem 0;
            overflow: hidden;

            &-primary {
                display: flex;
                justify-content: space-between;
                align-items: center; 

                span {
                    font-size: 106%;
                    color: #000;
                }

                small {
                    font-size: 12px;
                    color: rgba(0,0,0,.42);
                }
            }


            &-secondary {

                position: relative;

                span {
                    font-size: 14px;
                    color: rgba(0,0,0,.42);
                }

                .actions {
                    display: flex;
                    position: absolute;
                    bottom: -4px;
                    right: -28px;
                    align-items: center;
                    transition: all .02s ease-in;

                    .unread,
                    svg {
                        color: #919191;
                        margin-right: 5px; 
                    }

                    .unread {
                        padding: .3em .4em .4em;
                        text-align: center;
                        background-color: #06d755;
                        border-radius: 1.1em;
                        color: white;
                        display: inline-block;
                        min-width: .9em;
                        min-height: 1em;
                        font-size: 12px;
                        font-weight: 600;
                        line-height: 1em;
                        vertical-align: top;
                        font-weight: 400;
                    }

                    .muted {
                        font-size: 1rem;
                    }

                    .expand {
                        margin-right: 0px;    
                    }

                }
            }
        }
    }
`;