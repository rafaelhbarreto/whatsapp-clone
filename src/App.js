import { useState } from 'react';
import {AppWindow} from './components/Template/styles'; 
import {ChatItem} from './components/ChatItem';
import {ChatWindow} from './components/ChatWindow';
import {
  Sidebar, 
  Header, 
  Search, 
  ChatList,
  Notification
} from './components/Sidebar/styles'; 

import {ChatIntro} from './components/ChatIntro'
import {ContentArea} from './components/ContentArea/styles'; 
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SearchIcon from '@material-ui/icons/Search';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function App() {

  const [activeChat, setActiveChat] = useState({}); 
  const [chatList, setChatList] = useState([
    {chatId: 1}, 
    {chatId: 2}, 
    {chatId: 3}, 
    {chatId: 4}, 
    {chatId: 5}, 
    {chatId: 6}, 
    {chatId: 7}, 
    {chatId: 8}, 
    {chatId: 9}, 
    {chatId: 10}, 
    {chatId: 12}, 
    {chatId: 13}, 
    {chatId: 14}, 
    {chatId: 15}, 
    {chatId: 16}, 
    {chatId: 17}, 
  ]); 

  return (
    <>
      <AppWindow>
        <Sidebar>
          <Header>
            <div className="header-image">
              <img src="/img/rafael-avatar.jpg" alt="Avatar"/>
            </div>
            <div className="header-buttons">
              <button>
                <DonutLargeIcon />
              </button>
              <button>
                <ChatIcon />
              </button>
              <button>
                <MoreVertIcon />
              </button>
            </div>
          </Header>
          <Notification>
            <div className="icon">
              <NotificationsOffIcon />
            </div>
            <div className="notification-details">
              <span>Receba notificações de novas mensagens</span>
              <button>
                Ativar notificações na área de trabalho
                <KeyboardArrowRightIcon />
              </button>
            </div>
          </Notification>

          <Search>
            <div className="search-wrap">
              <SearchIcon />
              <input type="search" placeholder="Pesquisar ou começar uma nova conversa"/>
            </div>
          </Search>
          <ChatList>
            {chatList.map((item, index) => (
              <ChatItem 
                key={index} 
                active={activeChat.chatId === item.chatId}
                onClick={() => setActiveChat(item)}
              />
            ))}
          </ChatList>
        </Sidebar>

        <ContentArea>
          {activeChat.chatId === undefined &&
            <ChatIntro /> 
          } 

          {activeChat.chatId !== undefined &&
           <ChatWindow />
          }
        </ContentArea>

      </AppWindow>
    </>
  );
}

export default App;
