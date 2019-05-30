import React, {useState, useEffect} from 'react';

import '../css/ChatButtonMessage.css';

const ChatButtonMessage = props => {
  let buttons = <div></div>;

  const handleButtonClick = (e) => {
    console.log(e.target.innerHTML)
  }

  if(props.messageButtons){
    buttons = props.messageButtons.map( buttonDetails => {
      return <button 
        className="quote-author-btn"
        key={buttonDetails.buttonId}
        onClick={e => {handleButtonClick(e)}}
        >
          {buttonDetails.buttonText}
        </button>
    })
  }
  return (
    <div className="chat_message_other">
      <div className="chat_message_img">
        <img src={props.userImgSrc}/>
      </div>
      <div className="chat_message-message other-message">
          <div className="buttons-of-authors">
            {buttons}
          </div>
        <div className="chat_message-time">
          {props.messageTime}
        </div>
      </div>
    </div>
  )
}

export default ChatButtonMessage;