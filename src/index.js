import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AuthService from './service/auth_service';
import ChatRepository from './service/chat_repository';
import ProfileImgRepository from './service/profileImg_repository';
import ImageUploadApp from './service/image_uploader';
import ImageUploader from './components/imageUploader/imageUploader';



const authService = new AuthService();
const chatRepository = new ChatRepository();
const profileImgRepository = new ProfileImgRepository();
const imageUploadApp = new ImageUploadApp();
const FileInput = props => (<ImageUploader {...props} ImageUploadApp={imageUploadApp}/>);

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService} 
      chatRepository={chatRepository}
      profileImgRepository={profileImgRepository}
      FileInput={FileInput}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
