import React from 'react';

import '../css/ChatInput.css';
import sendImg from '../imgs/send-img.png';

const ChatInput = props => {
  return (
    <div className="chat_input">
      <div className="chat_input-atach-btn">
        <img src="https://img.icons8.com/ultraviolet/40/000000/attach.png"/>
      </div>
      <div className="chat_input_input-div">
        <input placeholder="متن خود را وارد کنید"/>
      </div>
      <div className="chat_input-send-btn">
        <img src={sendImg}/>
      </div>
    </div>
  )
}

export default ChatInput;