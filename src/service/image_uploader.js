class ImageUploadApp {
  async upload(file){
    // POST에 추가하는 데이터
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'clpjntmu')

    // POST로 데이터 전송
    const result = await fetch(
      'https://api.cloudinary.com/v1_1/dxb2t5sxu/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    // 리턴 받은걸 JSON으로 변환
    return await result.json(); 
  }
}

export default ImageUploadApp;