import {MessageItemWrap} from './style';

export const MessageItem = ({title, message, date, author}) => {
    return (
        <MessageItemWrap 
            style={{
                marginLeft: author ? 'auto' : '',
                marginRight: author ? '' : 'auto',
                backgroundColor: author ? '#dcf8c6' : '#fff' 
            }}
        >
            <span>{title}</span>
            <div className="details">
                <p>{message}</p>
                <small>{date}</small>
            </div>
        </MessageItemWrap>
    );
}