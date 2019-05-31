import React from 'react';

import '../css/ChatMessageQuote.css';

import QuoteDesignMessage from './QuoteDesignMessage.js';

const ChatMessageQuote = props => {
  /* Shares the text of quote with twitter api - opening in new tab */
  const onShareBtnClick = (textToShare) => {
    var win = window.open('https://twitter.com/intent/tweet?text='+textToShare.split(' ').join('%20'), '_blank');
    win.focus();
  }

  return (
    <div className="chat_message_quote">
      <div className="chat_message_img">
        <img alt="user-img" src={props.userImgSrc}/>
      </div>
      <QuoteDesignMessage
        quoteText={props.quoteText}
        quoteAuthor={props.quoteAuthor}
        onShareBtnClick={onShareBtnClick}
      />
    </div>
  )
}

export default ChatMessageQuote;