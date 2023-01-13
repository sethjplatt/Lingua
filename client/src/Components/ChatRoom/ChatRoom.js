import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { joinRoom, saveMessageToDb } from '../../Utils/ChatService';
import('./ChatRoom.css');

export default function ChatRoom() {
  const { roomId, activeUserName } = useParams();
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);
  const otherUser = roomId.replace(activeUserName, '');

  const socket = io('http://localhost:3001');

  useEffect(() => {
    socket.on('connect', () => {
      socket.emit('join', { room: roomId, activeUserName, otherUser });
    });

    joinRoom({ roomId, activeUserName, otherUser });
  }, []);

  socket.on('message', (data) => {
    console.log('message heard from socket', data);
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
      <div id='header'>{otherUser}</div>
      <div className='messages-container'>
        {messages.map((message) => {
          return (
            <div class='message me'>
              <div class='message-text'>{message.text}</div>
              <div class='message-time'>{message.timestamp}</div>
            </div>
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
