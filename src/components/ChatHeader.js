import React from 'react';

import '../css/ChatHeader.css';

const ChatHeader = props => {
  return(
    <div class="chat-title">{props.chatTitle}</div>
  )
}

export default ChatHeader;