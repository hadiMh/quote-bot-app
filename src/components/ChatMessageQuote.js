import React from 'react';

import '../css/ChatMessageQuote.css';

import QuoteDesignMessage from './QuoteDesignMessage.js';

const ChatMessageQuote = props => {
  return (
    <div className="chat_message_quote">
      <div className="chat_message_img">
        <img src={props.userImgSrc}/>
      </div>
      <QuoteDesignMessage
        quoteText={props.quoteText}
        quoteAuthor={props.quoteAuthor}
      />
    </div>
  )
}

export default ChatMessageQuote;