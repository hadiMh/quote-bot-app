import React from 'react';

import '../css/QuoteDesignMessage.css';

const QuoteDesignMessage = props => {
  const onShareButtonClick = (e) => {
    props.onShareBtnClick(props.quoteText + '\n' + props.quoteAuthor);
  }

  return <div className="blockquote-wrapper">
          <div className="blockquote">
            <h1>
              {props.quoteText}
            </h1>
            <h4>
              <img 
                className="twitter-share-img"
                src="https://img.icons8.com/color/48/000000/twitter.png"
                onClick={e => {onShareButtonClick(e)}}
              ></img>
              {props.quoteAuthor}
            </h4>
          </div>
        </div>
}

export default QuoteDesignMessage;