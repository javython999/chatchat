import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ChatList from '../chatList/chatList';
import Header from '../header/header';
import Write from '../write/write';
import styles from './chatUI.module.css';

const ChatUI = ({ FileInput, authService, chatRepository, profileImgRepository }) => {
  const [chats, setChats] = useState({});
  const histroyState = useHistory().state;
  const [userId, setUserId] = useState(histroyState && histroyState.id);
  const [profile, setProfile] = useState({});
  const history = useHistory();

  // 로그아웃 처리
  const onLogout = () => {
    authService.logout();
  };

  useEffect(()=>{
    authService.onAuthChange(user => {
      // 로그아웃시(유저 정보가 없을시) 홈으로 이동
      if(user) {
        setUserId(user.uid);
      } else {
        history.push('/');
        console.log('로그아웃');
      }
    });
  });

  // 채팅 sync
  useEffect(() => {
    if(!userId) {
      return;
    }
    const stopSync = chatRepository.syncChat(userId, chats => {
      setChats(chats);
    })
    return () => { stopSync(); }
  }, [userId])

  // 채팅 추가
  const addChat = (chat) => {
    const updated = [chat]
    setChats(updated);
    chatRepository.saveChat(chat);
  };

  // 프로필 이미지 sync
  useEffect(()=>{
    if(!userId) {
      return;
    }
    const stopSync = profileImgRepository.syncProfile(userId, profile => {
      setProfile(profile);
    })
    return () => { stopSync(); }
  }, [userId])
  

  // 프로필 이미지 추가
  const addProfile = (loginId, profile) => {
    const updated = [profile]
    setProfile(updated);
    profileImgRepository.saveProfile(loginId, profile);
  };

  return (
    <div className={styles.chatWrap}>
      <Header onLogout={onLogout}/>
      <ChatList chats={chats} userId={userId}/>
      <Write FileInput={FileInput} onAdd={addChat} userId={userId} onProfileAdd={addProfile}/>
    </div>
  );
};

export default ChatUI;