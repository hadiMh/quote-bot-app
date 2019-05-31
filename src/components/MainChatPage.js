import React, { useState, useEffect } from 'react';

import { quoteApi } from '../api/quoteApi.js';

import ChatHeader from './ChatHeader.js';
import ChatInput from './ChatInput.js';
import ChatDialogues from './ChatDialogues.js';

import '../css/MainChatPage.css';

const MainChatPage = props => {
  /* keeping list of quotes based on each author */
  const [listOfQuotes, setListOfQuotes] = useState([]);
  /* list of all authors in corresponding button tags to render in the ChatButtonMessage */
  const [listOfAuthorsButtons, setListOfAuthorsButtons] = useState([]);

  /* create list of quotes and authors button from the json data that was fetched */
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
    
    setListOfAuthorsButtons(authorsButtons); 
  }

  /* return all of the quotes of this author */
  const getThisAuthorQuotes = (authorName) => {
    return listOfQuotes[authorName];
  }

  /* fetch data */
  useEffect( () => {
    async function fetchData() {
      // console.log("use effect runs")
      const response = await quoteApi.get('/');
      // console.log(response);
      organizeJsonData(response);
    }
    fetchData();
  }, [])
  
  return(
    <div className="main-chat-page">
      <ChatHeader chatTitle="Quote Bot"/>
      
      <ChatDialogues listOfAuthors={listOfAuthorsButtons.slice(0, 21)} getAuthorQuoteFunc={getThisAuthorQuotes}/>

      <div className="main_chat_page_chat-input">
        <ChatInput/>
      </div>
    </div>
  )
}

export default MainChatPage;