import React from 'react';

import '../css/ChatMessageQuote.css';

import { twitterShare } from '../api/quoteApi.js';

import QuoteDesignMessage from './QuoteDesignMessage.js';

const ChatMessageQuote = props => {
  const onShareBtnClick = async (textToShare) => {
    var win = window.open('https://twitter.com/intent/tweet?text='+textToShare.split(' ').join('%20'), '_blank');
    win.focus();
  }

  return (
    <div className="chat_message_quote">
      <div className="chat_message_img">
        <img src={props.userImgSrc}/>
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