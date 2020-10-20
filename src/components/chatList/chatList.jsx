import React, { Component, useRef } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Chat from '../chat/chat';
import stlyes from './chatList.module.css';

const ChatList = ({ chats, userId }) => {


  return(
      <ScrollToBottom  className={stlyes.chatListWrap}>
        {Object.keys(chats).map(key => (
          <Chat key={key} chat={chats[key]} userId={userId}/>
        ))}
      </ScrollToBottom>
      )
  };


export default ChatList;