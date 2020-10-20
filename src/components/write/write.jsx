import React, { useRef } from 'react';
import { useState } from 'react';
import styles from './write.module.css';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/dxb2t5sxu/image/upload/v1603180201/fy3fttdlp5binlzarb2u.png';

const Write = ({ FileInput, onAdd, userId, onProfileAdd }) => {
  const nickNameRef = useRef();
  const messageRef = useRef();  
  const buttonRef = useRef();
  const wirterIdRef = useRef();
  const loginId = userId;

  // 프로필 이미지
  const [file, setFile] = useState({fileName: null, fileURL: null});
  
  const [profile, setProfile] = useState({nickName: null, file: null});

  // 프로필 이미지 업로드시
  const onFileChange = file => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
    
    setProfile({
      nickName: nickNameRef.current.value,
      file: file.url,
    });
    
    /*onProfileAdd(loginId, profile); */
    console.log(profile);   
  };


  // 메세지 입력후 엔터키 누르면 전송
  const handleeKyPress = (event) => {
    if (event.key === "Enter") {
      buttonRef.current.click();
    }
  };

  // 메세지 등록
  const onSubmit = (event) => {
    event.preventDefault();
    const chat = {
      id: Date.now(),
      wirterId: wirterIdRef.current.value,
      nickName: nickNameRef.current.value || 'unknown',
      message: messageRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    onAdd(chat);
    messageRef.current.value = null;
    messageRef.current.focus();
  };
  
  return(
      <div className={styles.writeWrap}>
        <section className={styles.profileSection}>
          <img className={styles.profileImg} src={file.fileURL || DEFAULT_IMAGE} alt='profile' />
            <FileInput name={file.fileName} onFileChange={onFileChange} />
        </section>
        <section className={styles.textWriteSection}>
          <form className={styles.from}>
            <input ref={wirterIdRef} className={styles.hidden} name='wirterId' value={loginId}/>
            <input ref={nickNameRef} className={styles.nickName} name='nickName' placeholder='닉네임'/>  
            <textarea ref={messageRef} className={styles.textarea} name='message' placeholder='메세지를 입력해주세요' onKeyPress={handleeKyPress} maxLength={36}/>
            <button ref={buttonRef} onClick={onSubmit} className={styles.button}>전송</button>
          </form>
        </section>
      </div>
  )
};

export default Write;