import React, { useState, useEffect } from 'react';

import quoteApi from '../api/quoteApi.js';

import ChatHeader from './ChatHeader.js';
import ChatInput from './ChatInput.js';
import ChatDialogues from './ChatDialogues.js';

import '../css/MainChatPage.css';

const MainChatPage = props => {
  const [jsonApiData, setJsonApiData] = useState({})

  const organizeJsonData = (jsonData) => {
    let result = {};
    jsonData.data.Quotations.forEach(element => {
      if(!result.hasOwnProperty(element.Author)){
        result[element.Author] = [element.Quotation]
      }else{
        result[element.Author].push(element.Quotation)
      }
    });
    console.log(result);
  }

  useEffect( () => {
    async function fetchData() {
      console.log("use effect runs")
      const response = await quoteApi.get('/');
      console.log(response);
      organizeJsonData(response);
    }
    fetchData();
  }, [])

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