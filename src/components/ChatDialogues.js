import React, {useState, useEffect} from 'react';

import ChatMessageSelf from './ChatMessageSelf.js';
import ChatMessageOther from './ChatMessageOther.js';
import ChatButtonMessage from './ChatButtonMessage.js';

import '../css/ChatDialogues.css';

const ChatDialogues = props => {
  let today = new Date();

  const getNowTime = (() => {
    return today.getHours()%12 + ':' + today.getMinutes() + ':' + today.getSeconds();
  })
debugger;
  const [createNewPost, setCreateNewPost] = useState(false);
  const [messages, setMessages] = useState([{
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
    
  ]);
  
  useEffect(()=>{
    debugger;
    setMessages([...messages, {
      messageButtons: [...props.listOfAuthors],
      messageTime: getNowTime(),
      userImgSrc: "https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/wufoo/600x500_clocks_yellow.png",
      type: 'button-message'
    },])
    
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.listOfAuthors])
  
  // useEffect( () => {

  // }, messages)

  let listOfMessages = messages.map( message => {
    if(message.type === 'normal-message')
      return <ChatMessageOther
        messageText={message.messageText}
        messageTime={message.messageTime}
        userImgSrc={message.userImgSrc}
      />
    else if(message.type === 'button-message') {
      if(message.messageButtons.length != 0){
        return <ChatButtonMessage
          messageButtons={message.messageButtons}
          messageTime={message.messageTime}
          userImgSrc={message.userImgSrc}
        />
      }
    }
  })
  
  return (
    <div className="chat_dialogues">
      {listOfMessages}
    </div>
  )
}

export default ChatDialogues;