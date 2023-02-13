import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getActiveUser } from '../../Utils/UserService';
import { joinRoom, saveMessageToDb } from '../../Utils/ChatService';
import { v4 as uuidv4 } from 'uuid';
import { Message } from '../Message/Message.js';
import { useNavigate } from 'react-router-dom';
import('./ChatRoom.css');

export default function ChatRoom() {
  const { roomId, activeUserName } = useParams();
  const [messages, setMessages] = useState([]);
  const otherUser = roomId.replace(activeUserName, '');
  const [activeUser, setActiveUser] = useState({});

  const navigate = useNavigate();

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

  function sendMessage(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formattedDate = formatDate(new Date());
    const data = {
      room: roomId,
      author: activeUserName,
      text: formData.get('text'),
      timestamp: formattedDate,
    };
    socket.emit('message', data);

    saveMessageToDb(data);
  }

  function handleReturnHomeClick() {
    socket.emit('leave', { room: roomId, activeUserName, otherUser });
    navigate('/dashboard');
  }

  return (
    <div
      className='container'
      style={{
        backgroundImage: `url(/landmarks-dash.jpg)`,
      }}
    >
      <div className='chat-header'>
        <img
          alt='home'
          src='https://user-images.githubusercontent.com/108771602/218269984-cb9e4154-cd86-4ed1-9673-2ab6f91731bf.png'
          className='icons home'
          onClick={() => {
            handleReturnHomeClick();
          }}
        />
        <div>{otherUser}</div>
        <svg
          height='35px'
          width='35px'
          viewBox='0 0 18 18'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill='#ffffff'
            d='M9 0a9 9 0 0 0-9 9 8.654 8.654 0 0 0 .05.92 9 9 0 0 0 17.9 0A8.654 8.654 0 0 0 18 9a9 9 0 0 0-9-9zm5.42 13.42c-.01 0-.06.08-.07.08a6.975 6.975 0 0 1-10.7 0c-.01 0-.06-.08-.07-.08a.512.512 0 0 1-.09-.27.522.522 0 0 1 .34-.48c.74-.25 1.45-.49 1.65-.54a.16.16 0 0 1 .03-.13.49.49 0 0 1 .43-.36l1.27-.1a2.077 2.077 0 0 0-.19-.79v-.01a2.814 2.814 0 0 0-.45-.78 3.83 3.83 0 0 1-.79-2.38A3.38 3.38 0 0 1 8.88 4h.24a3.38 3.38 0 0 1 3.1 3.58 3.83 3.83 0 0 1-.79 2.38 2.814 2.814 0 0 0-.45.78v.01a2.077 2.077 0 0 0-.19.79l1.27.1a.49.49 0 0 1 .43.36.16.16 0 0 1 .03.13c.2.05.91.29 1.65.54a.49.49 0 0 1 .25.75z'
          />
        </svg>
      </div>

      <div className='messages-container'>
        {messages.map((message) => {
          return (
            <Message message={message} activeUser={activeUser} key={uuidv4()} />
          );
        })}
      </div>
      <form className='input-container' onSubmit={sendMessage}>
        <input
          id='message-input'
          type='text'
          name='text'
          placeholder='Message'
        />
        <button className='send' type='submit'>
          Send
        </button>
      </form>
    </div>
  );
}
