import React, {useState, useEffect} from 'react';

import ChatMessageSelf from './ChatMessageSelf.js';
import ChatMessageOther from './ChatMessageOther.js';
import ChatButtonMessage from './ChatButtonMessage.js';
import ChatMessageQuote from './ChatMessageQuote.js';

import '../css/ChatDialogues.css';

const ChatDialogues = props => {
  let today = new Date();

  /* Get the current time */
  const getNowTime = (() => {
    return today.getHours()%12 + ':' + today.getMinutes() + ':' + today.getSeconds();
  })

  /* Create messages variable for keeping the chat message and initialize it with the first greeding messages */
  const [messages, setMessages] = useState([{
      messageText: 'سلام',
      messageTime: getNowTime(),
      userImgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-OMosn8iATqVgi85l_pvgY001mV1QqR8PN-9uF8ZD4SE173Cv6A",
      type: 'normal-other-message',
      messageId: 0
    },
    {
      messageText: 'به ربات خوش آمدید',
      messageTime: getNowTime(),
      userImgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-OMosn8iATqVgi85l_pvgY001mV1QqR8PN-9uF8ZD4SE173Cv6A",
      type: 'normal-other-message',
      messageId: 1
    },
    {
      messageText: 'از لیست زیر، فرد مورد نظرخود را انتخاب کنید:',
      messageTime: getNowTime(),
      userImgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-OMosn8iATqVgi85l_pvgY001mV1QqR8PN-9uF8ZD4SE173Cv6A",
      type: 'normal-other-message',
      messageId: 2
    },
    
  ]);
  
  /* This function send another message in chat to the user to show the authors buttons */
  const showTheListOfAuthorsButtonsMessage = () => {
    setMessages([...messages, {
      messageButtons: [...props.listOfAuthors],
      messageTime: getNowTime(),
      userImgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-OMosn8iATqVgi85l_pvgY001mV1QqR8PN-9uF8ZD4SE173Cv6A",
      type: 'button-message',
      messageId: messages.length
    },])
  }

  /* This function adds the quote message to the chat messages alogside the user message asking the authors name and the list of authors again */
  const addThisQuoteToMessages = (quoteText, quoteAuthor) => {
    setMessages([...messages, {
      messageText: quoteAuthor,
      messageTime: getNowTime(),
      userImgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStzEfgpFZgok3ov95r_dbthnJifJyE0K-Wkfrulp0NKsudL2FwiA",
      type: 'normal-self-message',
      messageId: messages.length
    },{
      quoteText: quoteText,
      quoteAuthor: quoteAuthor,
      messageTime: getNowTime(),
      userImgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-OMosn8iATqVgi85l_pvgY001mV1QqR8PN-9uF8ZD4SE173Cv6A",
      type: 'quote-message',
      messageId: messages.length + 1
    },{
      messageButtons: [...props.listOfAuthors],
      messageTime: getNowTime(),
      userImgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-OMosn8iATqVgi85l_pvgY001mV1QqR8PN-9uF8ZD4SE173Cv6A",
      type: 'button-message',
      messageId: messages.length + 2
    }])
  }

  /* When an author name button is clicked, this function runs and get a random quote from the author and shows it in the chat messages */
  const onAuthorNameClick = (authorName) => {
    const authorQuotes = props.getAuthorQuoteFunc(authorName);
    // console.log(authorQuotes);
    const randomQuote = authorQuotes.authorQuotes[Math.floor(Math.random()*authorQuotes.authorQuotes.length)];
    addThisQuoteToMessages(randomQuote, authorName);
  }

  /* This effect runs for the creation of component and when the props.listOfAuthors is changed(this would not change) */
  useEffect(()=>{
    showTheListOfAuthorsButtonsMessage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.listOfAuthors])

  /* map function to create the html list of messages based of the list of message json array that is created before */
  let listOfMessages = messages.map( message => {
    if(message.type === 'normal-other-message'){
      return <ChatMessageOther
        messageText={message.messageText}
        messageTime={message.messageTime}
        userImgSrc={message.userImgSrc}
        key={message.messageId}
      />
    }
    else if(message.type === 'button-message') {
      if(message.messageButtons.length !== 0){
        return <ChatButtonMessage
          messageButtons={message.messageButtons}
          onAuthorNameClickFunc={onAuthorNameClick}
          messageTime={message.messageTime}
          userImgSrc={message.userImgSrc}
          key={message.messageId}
        />
      }
    }
    else if(message.type === 'quote-message') {
      return <ChatMessageQuote
              quoteText={message.quoteText}
              quoteAuthor={message.quoteAuthor}
              userImgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-OMosn8iATqVgi85l_pvgY001mV1QqR8PN-9uF8ZD4SE173Cv6A"
              key={message.messageId}
            />
    }
    else if(message.type === 'normal-self-message') {
      return <ChatMessageSelf
        messageText = {message.messageText}
        messageTime = {message.messageTime}
        userImgSrc = {message.userImgSrc}
        key={message.messageId}
      />
    }
    // eslint-disable-next-line array-callback-return
    return;
  });
  
  return (
    <div className="chat_dialogues">
      {listOfMessages}
    </div>
  )
}

export default ChatDialogues;