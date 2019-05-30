import React from 'react';

import '../css/ChatHeader.css';

const ChatHeader = props => {
  return(
    <div className="chat_header">
      <div class="chat-title">{props.chatTitle}</div>
    </div>
  )
}

export default ChatHeader;