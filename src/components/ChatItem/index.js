import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

export const ChatItem = ({onClick, active}) => {
    return (
        <li 
            onClick={onClick}
            className={`${active ? 'active': ''}`}
        >
            <img src="/img/rafael-avatar.jpg" alt="Avatar"/>
            <div className="details">
                <div className="details-primary">
                <span>Rafael Barreto</span>
                <small>02/04/2021</small>
                </div>
                <div className="details-secondary">
                <span>Lidia: Seria legal ele dizer qual ele que ...</span>
                <div className="actions">
                    <VolumeOffIcon className="muted"/>
                    <div className="unread">979</div>
                    <ExpandMoreIcon className="expand"/>
                </div>
                </div>
            </div>
        </li>
    ); 
}