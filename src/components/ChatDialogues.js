import React from 'react';

import ChatMessageSelf from './ChatMessageSelf.js';
import ChatMessageOther from './ChatMessageOther';

import '../css/ChatDialogues.css';

const ChatDialogues = props => {
  return (
    <div className="chat_dialogues">
      <ChatMessageSelf/>
      <ChatMessageOther/>
      <ChatMessageOther/>
      <ChatMessageSelf/>
      <ChatMessageOther/>
    </div>
  )
}

export default ChatDialogues;