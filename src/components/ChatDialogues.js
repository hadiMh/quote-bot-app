import React, {useState, useEffect} from 'react';

import ChatMessageSelf from './ChatMessageSelf.js';
import ChatMessageOther from './ChatMessageOther.js';
import ChatButtonMessage from './ChatButtonMessage.js';

import '../css/ChatDialogues.css';

const ChatDialogues = props => {
  let today = new Date();

  const getNowTime = () => {
    return today.getHours()%12 + ':' + today.getMinutes() + ':' + today.getSeconds();
  }

  const [createNewPost, setCreateNewPost] = useState(false);
  const [messages, setMessage] = useState([
    {
      messageText: 'سلام',
      messageTime: getNowTime(),
      userImgSrc: "https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/wufoo/600x500_clocks_yellow.png",
      type: 'normal-message'
    },
    {
      messageText: 'به ربات خوش آمدید',
      messageTime: getNowTime(),
      userImgSrc: "https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/wufoo/600x500_clocks_yellow.png",
      type: 'normal-message'
    },
    {
      messageText: 'از لیست زیر، فرد مورد نظرخود را انتخاب کنید:',
      messageTime: getNowTime(),
      userImgSrc: "https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/wufoo/600x500_clocks_yellow.png",
      type: 'normal-message'
    },
    {
      messageButtons: [
        {
          buttonText: 'افلاطون',
          buttonId: '1'
        },
        {
          buttonText: 'سعدی',
          buttonId: '2'
        },
        {
          buttonText: 'افلاطون',
          buttonId: '1'
        },
        {
          buttonText: 'سعدی',
          buttonId: '2'
        },
        {
          buttonText: 'افلاطون',
          buttonId: '1'
        },
        {
          buttonText: 'سعدی',
          buttonId: '2'
        },
      ],
      messageTime: getNowTime(),
      userImgSrc: "https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/wufoo/600x500_clocks_yellow.png",
      type: 'button-message'
    },
  ]);

  let listOfMessages = messages.map( message => {
    if(message.type === 'normal-message')
      return <ChatMessageOther
        messageText={message.messageText}
        messageTime={message.messageTime}
        userImgSrc={message.userImgSrc}
      />
    else if(message.type === 'button-message') 
      return <ChatButtonMessage
        messageButtons={message.messageButtons}
        messageTime={message.messageTime}
        userImgSrc={message.userImgSrc}
      />
  })

  return (
    <div className="chat_dialogues">
      {listOfMessages}
    </div>
  )
}

export default ChatDialogues;