import React from 'react';

import '../css/QuoteDesignMessage.css';

const PaperNote = props => {
  return <div class="blockquote-wrapper">
          <div class="blockquote">
            <h1>
              {props.quoteText}
            </h1>
            <h4>{props.quoteAuthor}</h4>
          </div>
        </div>
}

export default PaperNote;