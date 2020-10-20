import firebaseApp from './firebase';

class ChatRepository {
  // 채팅리스트 싱크
  syncChat(userId, onUpdate) {
    const ref = firebaseApp.database().ref(`/chatList/`);
    ref.on('value', snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }

  // DB에 채팅내용 저장
  saveChat(chat) {
    firebaseApp.database().ref(`/chatList/${chat.id}`).set(chat);
  }
}

export default ChatRepository;