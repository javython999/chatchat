import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../header/header';
import stlyes from './login.module.css';

const Login = ({ authService }) => {
  
  // 로그인 처리를 위한 history 생성
  const history = useHistory();

  // 로그인
  const onLogin = (event) => {
    authService
    .login(event.currentTarget.textContent)
    .then(data => goToChat(data.user.uid));
  };

  // 로그인 성공시 페이지 이동, 로그인 데이터 전달
  const goToChat = (userId) => {
    history.push({
      pathname: '/chat',
      state: {id: userId},
    });
  };

  // 사용자의 로그인 상태 확인
  useEffect(() =>{
      authService.onAuthChange(user => {
        // 로그인을 한 유저라면 /chat으로 이동시킴
        user && goToChat(user.uid);
      });
  });

  return(
    <div className={stlyes.login}>
      <Header/>
      <h1 className={stlyes.title}>Login</h1>
      <ul className={stlyes.list}>
        <li><button onClick={onLogin}>Google</button></li>
        <li><button onClick={onLogin}>Facebook</button></li>
        {/* <li><button onClick={onLogin}>Twitter</button></li> */}
      </ul>
    </div>
    
  )
};

export default Login;