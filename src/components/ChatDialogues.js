import React, {useState, useEffect} from 'react';

import ChatMessageSelf from './ChatMessageSelf.js';
import ChatMessageOther from './ChatMessageOther.js';
import ChatButtonMessage from './ChatButtonMessage.js';
import ChatMessageQuote from './ChatMessageQuote.js';

import '../css/ChatDialogues.css';

const ChatDialogues = props => {
  let today = new Date();

  const getNowTime = (() => {
    return today.getHours()%12 + ':' + today.getMinutes() + ':' + today.getSeconds();
  })

  const [createNewPost, setCreateNewPost] = useState(false);
  const [messages, setMessages] = useState([{
      messageText: 'سلام',
      messageTime: getNowTime(),
      userImgSrc: "https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/wufoo/600x500_clocks_yellow.png",
      type: 'normal-other-message'
    },
    {
      messageText: 'به ربات خوش آمدید',
      messageTime: getNowTime(),
      userImgSrc: "https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/wufoo/600x500_clocks_yellow.png",
      type: 'normal-other-message'
    },
    {
      messageText: 'از لیست زیر، فرد مورد نظرخود را انتخاب کنید:',
      messageTime: getNowTime(),
      userImgSrc: "https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/wufoo/600x500_clocks_yellow.png",
      type: 'normal-other-message'
    },
    
  ]);
  
  const showTheListOfAuthorsButtonsMessage = () => {
    setMessages([...messages, {
      messageButtons: [...props.listOfAuthors],
      messageTime: getNowTime(),
      userImgSrc: "https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/wufoo/600x500_clocks_yellow.png",
      type: 'button-message'
    },])
  }

  const addThisQuoteToMessages = (quoteText, quoteAuthor) => {
    setMessages([...messages, {
      messageText: quoteAuthor,
      messageTime: getNowTime(),
      userImgSrc: "https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/wufoo/600x500_clocks_yellow.png",
      type: 'normal-self-message'
    },{
      quoteText: quoteText,
      quoteAuthor: quoteAuthor,
      messageTime: getNowTime(),
      userImgSrc: "https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/wufoo/600x500_clocks_yellow.png",
      type: 'quote-message'
    },{
      messageButtons: [...props.listOfAuthors],
      messageTime: getNowTime(),
      userImgSrc: "https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/wufoo/600x500_clocks_yellow.png",
      type: 'button-message'
    }])
  }

  const onAuthorNameClick = (authorName) => {
    const authorQuotes = props.getAuthorQuoteFunc(authorName);
    console.log(authorQuotes);
    const randomQuote = authorQuotes.authorQuotes[Math.floor(Math.random(authorQuotes.length))];
    addThisQuoteToMessages(randomQuote, authorName);
  }

  useEffect(()=>{
    showTheListOfAuthorsButtonsMessage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.listOfAuthors])

  let listOfMessages = messages.map( message => {
    if(message.type === 'normal-other-message')
      return <ChatMessageOther
        messageText={message.messageText}
        messageTime={message.messageTime}
        userImgSrc={message.userImgSrc}
      />
    else if(message.type === 'button-message') {
      if(message.messageButtons.length != 0){
        return <ChatButtonMessage
          messageButtons={message.messageButtons}
          onAuthorNameClickFunc={onAuthorNameClick}
          messageTime={message.messageTime}
          userImgSrc={message.userImgSrc}
        />
      }
    }
    else if(message.type === 'quote-message') {
      return <ChatMessageQuote
              quoteText={message.quoteText}
              quoteAuthor={message.quoteAuthor}
              userImgSrc="https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/wufoo/600x500_clocks_yellow.png"
            />
    }
    else if(message.type === 'normal-self-message') {
      return <ChatMessageSelf
        messageText = {message.messageText}
        messageTime = {message.messageTime}
        userImgSrc = {message.userImgSrc}
      />
    }
  })
  
  return (
    <div className="chat_dialogues">
      {listOfMessages}
    </div>
  )
}

export default ChatDialogues;