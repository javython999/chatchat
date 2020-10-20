import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/login'
import Chat from './components/chatUI/chatUI';


function App({ FileInput, authService, chatRepository, profileImgRepository }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Login authService={authService} />
        </Route>
        <Route path='/chat' exact>
          <Chat authService={authService} chatRepository={chatRepository} FileInput={FileInput} profileImgRepository={profileImgRepository}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
