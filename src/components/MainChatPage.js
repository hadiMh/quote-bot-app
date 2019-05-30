import React from 'react';

import ChatHeader from './ChatHeader.js';
import ChatInput from './ChatInput.js';
import ChatDialogues from './ChatDialogues.js';

import '../css/MainChatPage.css';

const MainChatPage = props => {
  return(
    <div className="main-chat-page">
      <ChatHeader chatTitle="Quote Bot"/>
      
      <ChatDialogues/>

      <div className="main_chat_page_chat-input">
        <ChatInput/>
      </div>
    </div>
  )
}

export default MainChatPage;