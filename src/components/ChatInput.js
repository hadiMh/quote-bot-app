import React from 'react';

import '../css/ChatInput.css';
import sendImg from '../imgs/send-img.png';

const ChatInput = props => {
  return (
    <div className="chat_input">
      <div className="chat_input_input-div">
        <input/>
      </div>
      <div className="chat_input-send-btn">
        <img src={sendImg}/>
      </div>
    </div>
  )
}

export default ChatInput;