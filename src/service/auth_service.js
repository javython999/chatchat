import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  // 로그인
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  // 유저 로그인 상태 확인
  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged(user =>{
      onUserChanged(user);
    })
  }

  // 로그아웃 처리
  logout() {
    firebase.auth().signOut();
  }
}

export default AuthService;