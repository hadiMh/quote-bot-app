import React, { useState } from 'react';

import '../css/ChatInput.css';
import sendImg from '../imgs/send-img.png';

const ChatInput = props => {
  const [term, setTerm] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();

    // console.log(term);
    setTerm('');
  }

  return (
    <div className="chat_input">
      <div className="chat_input-atach-btn">
        <img alt="attach-icon" src="https://img.icons8.com/ultraviolet/40/000000/attach.png"/>
      </div>
      <div className="chat_input_input-div">
        <form onSubmit={(e) => onFormSubmit(e)}>
          <input value={term} onChange={(e) => {setTerm(e.target.value)}} placeholder="متن خود را وارد کنید"/>
        </form>
      </div>
      <div className="chat_input-send-btn">
        <img alt="chat-send-btn" src={sendImg}/>
      </div>
    </div>
  )
}

export default ChatInput;