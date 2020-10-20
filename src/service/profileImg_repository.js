import firebaseApp from './firebase';

class ProfileImgRepository {
  // 프로필이미지 싱크
  syncProfile(userId, onUpdate) {
    const ref = firebaseApp.database().ref(`/profileImg/${userId}/`);
    ref.on('value', snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }
  
  // DB에 채팅내용 저장
  saveProfile(userId, profile) {
    console.log(`${userId}의 프로필이 업데이트됨`);
    firebaseApp.database().ref(`/profile/${userId}`).set(profile);
  }
}

export default ProfileImgRepository;