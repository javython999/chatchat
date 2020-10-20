import React, { useRef } from 'react';
import styles from './chat.module.css';

// 프로필 사진이 없는 경우 사용할 이미지
const DEFAULT_IMAGE = 'https://res.cloudinary.com/dxb2t5sxu/image/upload/v1603180201/fy3fttdlp5binlzarb2u.png';

const Chat = ({ chat, userId }) => {
  const {id, nickName, message, fileName, fileURL, wirterId} = chat;
  const wirterIdRef = useRef();

  // 프로필 사진이 있는 경우 해당 이미지 사용, 없는 경우 디폴트 이미지 사용
  const url = fileURL || DEFAULT_IMAGE;
  
  // 작성자 아이디와 로그인 아이디를 비교
  const loginId = userId;
  const test = chat.wirterId

  return(
    <div className={styles.chatWrap}>
      <div className={styles.chat}>
        <section className={(loginId === test)? styles.profileTrue : styles.profileFalse}>
          <img className={styles.profilePic} src={url} alt='profile'/>
          <span className={styles.nickName}>{nickName}</span>
          <input ref={wirterIdRef} className={styles.hidden} value={wirterId} />
        </section>
        <section className={styles.messageBox}>
          <div className={(loginId === test)? styles.messageTrue : styles.messageFalse}>{message}</div>
        </section>
      </div>
    </div>
  );
};

export default Chat;