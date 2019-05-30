import React from 'react';

import ChatMessageSelf from './ChatMessageSelf.js';

import '../css/ChatDialogues.css';

const ChatDialogues = props => {
  return (
    <div className="chat_dialogues">
      <ChatMessageSelf/>
    </div>
  )
}

export default ChatDialogues;