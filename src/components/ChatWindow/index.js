import {ChatWindowWrap} from './style'; 
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import {MessageItem} from '../MessageItem';  

export const ChatWindow = () => {

    return (
        <ChatWindowWrap>

            <header>
                <div className="info-contact">
                    <img src="/img/rafael-avatar.jpg" alt="Avatar"/>
                    <span>Rafael Barreto</span>
                </div>
                <div className="actions">
                    <SearchIcon />
                    <MoreVertIcon />
                </div>
            </header>

            <section className="content-body">
                <MessageItem 
                    author={false}
                    title=""
                    message="Oi, Boa tarde! Tudo bem?"
                    date="11:52"
                />
                <MessageItem 
                    author={true}
                    title=""
                    message="Oi! Tudo e você?"
                    date="11:52"
                />
                <MessageItem 
                    author={false}
                    title=""
                    message="Bem também!"
                    date="11:52"
                />
                <MessageItem 
                    author={false}
                    title=""
                    message="Consegue me ajudar em uma coisa aqui ?"
                    date="11:53"
                />
                <MessageItem 
                    author={true}
                    title=""
                    message="Claro.. o que vc precisa ?"
                    date="11:53"
                />
                <MessageItem 
                    author={false}
                    title=""
                    message="Esqueci o minha senha de acesso ao sistema rs"
                    date="11:53"
                />
                <MessageItem 
                    author={true}
                    title=""
                    message="hehe.. tranquilo. Foi enviado um e-mail pra vc! É só seguir o fluxo."
                    date="11:54"
                />
                <MessageItem 
                    author={false}
                    title=""
                    message="Ahh! Obrigada rs"
                    date="11:55"
                />
                <MessageItem 
                    author={false}
                    title=""
                    message="Qualquer coisa te chamo novamente, hein?"
                    date="11:55"
                />
                <MessageItem 
                    author={true}
                    title=""
                    message="Pode chamar! rsrs"
                    date="11:55"
                />
            </section>

            <footer>
                <div className="actions">
                    <InsertEmoticonIcon />
                    <AttachFileIcon />
                </div>
                <input type="text" placeholder="Digite uma mensagem"/>
                <MicIcon />
            </footer>
        </ChatWindowWrap>
    )
}