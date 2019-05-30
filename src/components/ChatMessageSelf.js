import React from 'react';

import '../css/ChatMessageSelf.css';

const ChatMessageSelf = props => {
  return (
    <div className="chat_message_self">
      <div className="chat_message_img">
        <img src={props.userImgSrc}/>
      </div>
      <div className="chat_message-message self-message">
        <p>{props.messageText}</p>
        <div className="chat_message-time">
          {props.messageTime}
        </div>
      </div>
    </div>
  )
}

export default ChatMessageSelf;