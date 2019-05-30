import React, { useState, useEffect } from 'react';

import quoteApi from '../api/quoteApi.js';

import ChatHeader from './ChatHeader.js';
import ChatInput from './ChatInput.js';
import ChatDialogues from './ChatDialogues.js';

import '../css/MainChatPage.css';

const MainChatPage = props => {
  const [jsonApiData, setJsonApiData] = useState({})
  const [listOfQuotes, setListOfQuotes] = useState([]);
  const [listOfAuthorsButtons, setListOfAuthorsButtons] = useState([]);

  const onAuthorClick = (authorName) => {
    Math.floor(Math.random() * Math.floor());
  }

  const organizeJsonData = (jsonData) => {
    let result = {};
    let authorsButtons = [];
    jsonData.data.Quotations.forEach(element => {
      if(!result.hasOwnProperty(element.Author)){
        result[element.Author] = {
          authorId: Object.keys(result).length,
          authorQuotes: [element.Quotation]
        }
        authorsButtons.push({
          buttonId: result[element.Author].authorId,
          buttonText: element.Author
        })
      }else{
        result[element.Author].authorQuotes.push(element.Quotation)
      }
    });
    setListOfQuotes(result);
    debugger;
    setListOfAuthorsButtons(authorsButtons);
    debugger;
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
  debugger;
  return(
    <div className="main-chat-page">
      <ChatHeader chatTitle="Quote Bot"/>
      
      <ChatDialogues listOfAuthors={listOfAuthorsButtons.slice(0,22)}/>

      <div className="main_chat_page_chat-input">
        <ChatInput/>
      </div>
    </div>
  )
}

export default MainChatPage;