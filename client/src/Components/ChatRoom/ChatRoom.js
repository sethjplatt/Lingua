import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getActiveUser } from '../../Utils/UserService';
import { joinRoom, saveMessageToDb } from '../../Utils/ChatService';
import { detectLanguage, translate } from '../../Utils/TranslateService';
import { v4 as uuidv4 } from 'uuid';
import { Message } from '../Message/Message.js';
import('./ChatRoom.css');

export default function ChatRoom() {
  const { roomId, activeUserName } = useParams();
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);
  const otherUser = roomId.replace(activeUserName, '');
  const [activeUser, setActiveUser] = useState({});
  const [translation, setTranslation] = useState('');

  const socket = io('http://localhost:3001');

  useEffect(() => {
    const fetchActiveUser = async () => {
      const user = await getActiveUser();
      setActiveUser(user);
    };
    fetchActiveUser();

    socket.on('connect', () => {
      socket.emit('join', { room: roomId, activeUserName, otherUser });
    });
    const getMessageHistory = async () => {
      let messageHistory = await joinRoom({
        roomId,
        activeUserName,
        otherUser,
      });
      if (messageHistory) {
        setMessages((prevMessages) => [...prevMessages, ...messageHistory]);
      }
    };
    getMessageHistory();
  }, []);

  socket.on('message', (data) => {
    setMessages((prevMessages) => [...prevMessages, data]);
  });

  function formatDate(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return (
      date.getMonth() +
      1 +
      '/' +
      date.getDate() +
      '/' +
      date.getFullYear() +
      '  ' +
      strTime
    );
  }

  function sendMessage() {
    const formattedDate = formatDate(new Date());
    const data = {
      room: roomId,
      author: activeUserName,
      text: inputText,
      timestamp: formattedDate,
    };
    socket.emit('message', data);

    saveMessageToDb(data);
  }

  return (
    <div className='container'>
      <div id='header'>
        <div className='user-name'>{otherUser}</div>
      </div>
      {translation ? (
        <div id='translation-banner'>Translation: {translation}</div>
      ) : null}
      <div className='messages-container'>
        {messages.map((message) => {
          return (
            <Message message={message} activeUser={activeUser} key={uuidv4()} />
          );
        })}
      </div>
      <div className='input-container'>
        <div className='input'>
          <input
            id='message-input'
            type='text'
            className='input-box'
            placeholder='Message'
            onChange={(event) => {
              setInputText(event.target.value);
            }}
          />
          <input
            id='send-button'
            className='button'
            type='button'
            value='Send'
            onClick={sendMessage}
          />
        </div>
      </div>
    </div>
  );
}
