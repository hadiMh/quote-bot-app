import React from 'react';

import '../css/ChatMessageOther.css';

const ChatMessageOther = props => {
  return(
    <div className="chat_message_other">
      <div className="chat_message_img">
        <img src={props.userImgSrc}/>
      </div>
      <div className="chat_message-message other-message">
        <p>{props.messageText}</p>
        <div className="chat_message-time">
          {props.messageTime}
        </div>
      </div>
    </div>
  )
}

export default ChatMessageOther;