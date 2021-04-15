import {ChatIntroWrap} from './style';
import ComputerIcon from '@material-ui/icons/Computer';

export const ChatIntro = () => {

    return (
        <>
            <ChatIntroWrap>
                <img src="/img/intro.png" alt="intro"/>

                <h1>
                    Mantenha seu celular conectado
                </h1>
                <p>
                    O WhatsApp conecta ao seu telefone para sincronizar suas mensagens. Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.
                </p>
                <span>
                <ComputerIcon />
                    O WhatsApp está disponível para Windows. <a href="#">Obtenha-o aqui.</a>
                </span>
            </ChatIntroWrap>
        </>
    );
}