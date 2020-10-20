import React from 'react'; 
import { useRef } from 'react';
import styles from './imageUploader.module.css';

const ImageUploader = ({ ImageUploadApp, name, onFileChange }) => {
  // input에 접근하기 위해
  const inputRef = useRef();
  
  // button 클릭시 input이 클릭되게 
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  }

  //
  const onChange = async event => {
    const uploaded = await ImageUploadApp.upload(event.target.files[0]);
    
    onFileChange({
    name: uploaded.original_filename,
    url: uploaded.url,
    })
  }

  return <div className={styles.container}>
    <input ref={inputRef} className={styles.input} type='file' accept='image/*' name='file'onChange={onChange}/>
    <button className={styles.button} onClick={onButtonClick}>
      {name || '프로필 이미지 변경'}
    </button>
  </div>
};

export default ImageUploader;