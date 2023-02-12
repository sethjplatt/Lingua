import { useState, useEffect } from 'react';
import { detectLanguage, translate } from '../../Utils/TranslateService.js';
import { v4 as uuidv4 } from 'uuid';
import './Message.css';

export const Message = ({ message, activeUser }) => {
  const [translateOption, setTranslateOption] = useState(false);
  const [translation, setTranslation] = useState('');
  const [notYetTranslated, setNotYetTranslated] = useState(true);

  async function inMyLanguage() {
    const messageLanguage = await detectLanguage(message.text);
    setTranslateOption(messageLanguage === activeUser.learnLanguage);
  }

  async function handleTranslate(text) {
    const translation = await translate(text, activeUser.nativeLanguage);
    console.log('translation:', translation);
    setTranslation(translation);
    setNotYetTranslated(false);
  }

  useEffect(() => {
    inMyLanguage();
  });

  return (
    <div
      className={
        message.author === activeUser.userName ? 'message me' : 'message them'
      }
    >
      <div className='message-text'>{message.text}</div>
      {translation ? <div className='translation'>{translation}</div> : null}
      <div className='time-and-translate-icon'>
        <div className='message-time'>{message.timestamp}</div>
        {translateOption && notYetTranslated ? (
          <img
            alt='translate'
            src='/translation.png'
            height={20}
            width={20}
            onClick={() => {
              handleTranslate(message.text);
            }}
          />
        ) : null}
      </div>
    </div>
  );
};
