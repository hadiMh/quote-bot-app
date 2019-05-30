import React, {useState, useEffect} from 'react';

import ChatMessageSelf from './ChatMessageSelf.js';
import ChatMessageOther from './ChatMessageOther';

import '../css/ChatDialogues.css';

const ChatDialogues = props => {
  let today = new Date();
  let date = today.getHours()%12 + ':' + today.getMinutes() + ':' + today.getSeconds();

  const getNowTime = () => {
    return today.getHours()%12 + ':' + today.getMinutes() + ':' + today.getSeconds();
  }

  const [createNewPost, setCreateNewPost] = useState(false);
  const [messages, setMessage] = useState([
    {
      messageText: 'سلام',
      messageTime: getNowTime(),
      userImgSrc: "https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/wufoo/600x500_clocks_yellow.png"
    },
    {
      messageText: 'به ربات خوش آمدید',
      messageTime: getNowTime(),
      userImgSrc: "https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/wufoo/600x500_clocks_yellow.png"
    },
    {
      messageText: 'از لیست زیر، فرد مورد نظرخود را انتخاب کنید:',
      messageTime: getNowTime(),
      userImgSrc: "https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/wufoo/600x500_clocks_yellow.png"
    },
  ]);

  let listOfMessages = messages.map( message => {
    return <ChatMessageOther
      messageText={message.messageText}
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