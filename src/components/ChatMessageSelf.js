import React from 'react';

import '../css/ChatMessageSelf.css';

const ChatMessageSelf = props => {
  return (
    <div className="chat_message_self">
      <div className="chat_message_img">
        <img src="https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/wufoo/600x500_clocks_yellow.png"/>
      </div>
      <div className="chat_message-message self-message">
        <p>سمشهتزکرخهیتکبخهت</p>
        <div className="chat_message-time">
          12:16:43 PM
        </div>
      </div>
    </div>
  )
}

export default ChatMessageSelf;