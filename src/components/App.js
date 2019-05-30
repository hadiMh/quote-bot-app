import React from 'react';

import MainChatPage from './MainChatPage.js';

import '../css/App.css';

const App = () => {
  return (
    <div className="height-100 row">
      <div className="col-lg-2 col-xs-0">
        column left
      </div>
      <div className="col-lg-8 col-xs-12">
        <MainChatPage/>
      </div>
      <div className="col-lg-2 col-xs-0">
        column right
      </div>
    </div>
  )
}

export default App;