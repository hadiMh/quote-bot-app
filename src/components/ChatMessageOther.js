import React from 'react';

import '../css/ChatMessageOther.css';

const ChatMessageOther = props => {
  return(
    <div className="chat_message_other">
      <div className="chat_message_img">
        <img src="https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/wufoo/600x500_clocks_yellow.png"/>
      </div>
      <div className="chat_message-message other-message">
        <p>سمشنیبتشسیمنبت شسکمیبتشس کیهخبتشکسیخهتب سهتبثکهخصت یسمنتبشکخسیمتبکشسیهمتب مسیشتبشثصخهتزکرخهیتکبخهت</p>
        <div className="chat_message-time">
          12:16:43 PM
        </div>
      </div>
    </div>
  )
}

export default ChatMessageOther;