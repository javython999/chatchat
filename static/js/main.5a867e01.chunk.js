(this.webpackJsonpchatchat=this.webpackJsonpchatchat||[]).push([[0],{10:function(e,t,a){e.exports={indigo:"#303f9f",indigoLight:"#666ad1",indigoDark:"#001970",writeWrap:"write_writeWrap__2VpuR",profileSection:"write_profileSection__Ix-lF",profileImg:"write_profileImg__aqaQ_",textWriteSection:"write_textWriteSection__mBFxB",from:"write_from__2y_wO",nickName:"write_nickName__1Vk4h",textarea:"write_textarea__2b3_E",button:"write_button__CaOzm",hidden:"write_hidden__314Zw"}},24:function(e,t,a){e.exports={indigo:"#303f9f",indigoLight:"#666ad1",indigoDark:"#001970",headerWrap:"header_headerWrap__mZ537",logo:"header_logo__2fWyJ",logOut:"header_logOut__B0oWF"}},25:function(e,t,a){e.exports={indigo:"#303f9f",indigoLight:"#666ad1",indigoDark:"#001970",login:"login_login__2GGt-",title:"login_title__2nSIo",list:"login_list__SBdHV"}},26:function(e,t,a){e.exports={container:"imageUploader_container__2xNDm",input:"imageUploader_input__xeCkA",button:"imageUploader_button__3vlJd"}},48:function(e,t,a){e.exports={indigo:"#303f9f",indigoLight:"#666ad1",indigoDark:"#001970",chatListWrap:"chatList_chatListWrap__2miJJ"}},49:function(e,t,a){e.exports={indigo:"#303f9f",indigoLight:"#666ad1",indigoDark:"#001970",chatWrap:"chatUI_chatWrap__2TuXB"}},50:function(e,t,a){e.exports=a(92)},55:function(e,t,a){},56:function(e,t,a){},8:function(e,t,a){e.exports={indigo:"#303f9f",indigoLight:"#666ad1",indigoDark:"#001970",chatWrap:"chat_chatWrap__bI7iV",chat:"chat_chat__j8Rnq",profileTrue:"chat_profileTrue__3qqHV",profileFalse:"chat_profileFalse__2lJ6q",profilePic:"chat_profilePic__SgX_y",messageBox:"chat_messageBox__2wjwj",messageTrue:"chat_messageTrue__20g1p",messageFalse:"chat_messageFalse__3BXaM",hidden:"chat_hidden__341NE"}},92:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(45),c=a.n(i),o=(a(55),a(56),a(22)),l=a(3),u=a(24),s=a.n(u),f=function(e){var t=e.onLogout;return r.a.createElement("div",{className:s.a.headerWrap},r.a.createElement("h1",null,"ChatChat"),r.a.createElement("img",{className:s.a.logo,src:"https://res.cloudinary.com/dxb2t5sxu/image/upload/v1603180284/segsnloldaod0ogus9as.png",alt:"logo"}),t&&r.a.createElement("button",{className:s.a.logOut,onClick:t},"LogOut"))},m=a(25),p=a.n(m),h=function(e){var t=e.authService,a=Object(l.f)(),i=function(e){t.login(e.currentTarget.textContent).then((function(e){return c(e.user.uid)}))},c=function(e){a.push({pathname:"/chat",state:{id:e}})};return Object(n.useEffect)((function(){t.onAuthChange((function(e){e&&c(e.uid)}))})),r.a.createElement("div",{className:p.a.login},r.a.createElement(f,null),r.a.createElement("h1",{className:p.a.title},"Login"),r.a.createElement("ul",{className:p.a.list},r.a.createElement("li",null,r.a.createElement("button",{onClick:i},"Google")),r.a.createElement("li",null,r.a.createElement("button",{onClick:i},"Facebook"))))},d=a(17),g=a(47),_=a.n(g),v=a(8),b=a.n(v),E=function(e){var t=e.chat,a=e.userId,i=(t.id,t.nickName),c=t.message,o=(t.fileName,t.fileURL),l=t.wirterId,u=Object(n.useRef)(),s=o||"https://res.cloudinary.com/dxb2t5sxu/image/upload/v1603180201/fy3fttdlp5binlzarb2u.png",f=a,m=t.wirterId;return r.a.createElement("div",{className:b.a.chatWrap},r.a.createElement("div",{className:b.a.chat},r.a.createElement("section",{className:f===m?b.a.profileTrue:b.a.profileFalse},r.a.createElement("img",{className:b.a.profilePic,src:s,alt:"profile"}),r.a.createElement("span",{className:b.a.nickName},i),r.a.createElement("input",{ref:u,className:b.a.hidden,value:l})),r.a.createElement("section",{className:b.a.messageBox},r.a.createElement("div",{className:f===m?b.a.messageTrue:b.a.messageFalse},c))))},N=a(48),O=a.n(N),k=function(e){var t=e.chats,a=e.userId;return r.a.createElement(_.a,{className:O.a.chatListWrap},Object.keys(t).map((function(e){return r.a.createElement(E,{key:e,chat:t[e],userId:a})})))},j=a(10),w=a.n(j),y=function(e){var t=e.FileInput,a=e.onAdd,i=e.userId,c=(e.onProfileAdd,Object(n.useRef)()),o=Object(n.useRef)(),l=Object(n.useRef)(),u=Object(n.useRef)(),s=i,f=Object(n.useState)({fileName:null,fileURL:null}),m=Object(d.a)(f,2),p=m[0],h=m[1],g=Object(n.useState)({nickName:null,file:null}),_=Object(d.a)(g,2),v=_[0],b=_[1];return r.a.createElement("div",{className:w.a.writeWrap},r.a.createElement("section",{className:w.a.profileSection},r.a.createElement("img",{className:w.a.profileImg,src:p.fileURL||"https://res.cloudinary.com/dxb2t5sxu/image/upload/v1603180201/fy3fttdlp5binlzarb2u.png",alt:"profile"}),r.a.createElement(t,{name:p.fileName,onFileChange:function(e){h({fileName:e.name,fileURL:e.url}),b({nickName:c.current.value,file:e.url}),console.log(v)}})),r.a.createElement("section",{className:w.a.textWriteSection},r.a.createElement("form",{className:w.a.from},r.a.createElement("input",{ref:u,className:w.a.hidden,name:"wirterId",value:s}),r.a.createElement("input",{ref:c,className:w.a.nickName,name:"nickName",placeholder:"\ub2c9\ub124\uc784"}),r.a.createElement("textarea",{ref:o,className:w.a.textarea,name:"message",placeholder:"\uba54\uc138\uc9c0\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",onKeyPress:function(e){"Enter"===e.key&&l.current.click()},maxLength:36}),r.a.createElement("button",{ref:l,onClick:function(e){e.preventDefault();var t={id:Date.now(),wirterId:u.current.value,nickName:c.current.value||"unknown",message:o.current.value||"",fileName:p.fileName||"",fileURL:p.fileURL||""};a(t),o.current.value=null,o.current.focus()},className:w.a.button},"\uc804\uc1a1"))))},x=a(49),I=a.n(x),L=function(e){var t=e.FileInput,a=e.authService,i=e.chatRepository,c=e.profileImgRepository,o=Object(n.useState)({}),u=Object(d.a)(o,2),s=u[0],m=u[1],p=Object(l.f)().state,h=Object(n.useState)(p&&p.id),g=Object(d.a)(h,2),_=g[0],v=g[1],b=Object(n.useState)({}),E=Object(d.a)(b,2),N=(E[0],E[1]),O=Object(l.f)();Object(n.useEffect)((function(){a.onAuthChange((function(e){e?v(e.uid):(O.push("/"),console.log("\ub85c\uadf8\uc544\uc6c3"))}))})),Object(n.useEffect)((function(){if(_){var e=i.syncChat(_,(function(e){m(e)}));return function(){e()}}}),[_]);Object(n.useEffect)((function(){if(_){var e=c.syncProfile(_,(function(e){N(e)}));return function(){e()}}}),[_]);return r.a.createElement("div",{className:I.a.chatWrap},r.a.createElement(f,{onLogout:function(){a.logout()}}),r.a.createElement(k,{chats:s,userId:_}),r.a.createElement(y,{FileInput:t,onAdd:function(e){m([e]),i.saveChat(e)},userId:_,onProfileAdd:function(e,t){N([t]),c.saveProfile(e,t)}}))};var S=function(e){var t=e.FileInput,a=e.authService,n=e.chatRepository,i=e.profileImgRepository;return r.a.createElement(o.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0},r.a.createElement(h,{authService:a})),r.a.createElement(l.a,{path:"/chat",exact:!0},r.a.createElement(L,{authService:a,chatRepository:n,FileInput:t,profileImgRepository:i}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=a(12),W=a(13),C=a(16),F=a.n(C),A=F.a.initializeApp({apiKey:"AIzaSyB2XNiJOoDL2BxAQfuXd0EKgYGw4SXiCaY",authDomain:"chatchat-f51f5.firebaseapp.com",databaseURL:"https://chatchat-f51f5.firebaseio.com",projectId:"chatchat-f51f5"}),B=function(){function e(){Object(R.a)(this,e)}return Object(W.a)(e,[{key:"login",value:function(e){var t=new(F.a.auth["".concat(e,"AuthProvider")]);return F.a.auth().signInWithPopup(t)}},{key:"onAuthChange",value:function(e){F.a.auth().onAuthStateChanged((function(t){e(t)}))}},{key:"logout",value:function(){F.a.auth().signOut()}}]),e}(),D=function(){function e(){Object(R.a)(this,e)}return Object(W.a)(e,[{key:"syncChat",value:function(e,t){var a=A.database().ref("/chatList/");return a.on("value",(function(e){var a=e.val();a&&t(a)})),function(){return a.off()}}},{key:"saveChat",value:function(e){A.database().ref("/chatList/".concat(e.id)).set(e)}}]),e}(),P=function(){function e(){Object(R.a)(this,e)}return Object(W.a)(e,[{key:"syncProfile",value:function(e,t){var a=A.database().ref("/profileImg/".concat(e,"/"));return a.on("value",(function(e){var a=e.val();a&&t(a)})),function(){return a.off()}}},{key:"saveProfile",value:function(e,t){console.log("".concat(e,"\uc758 \ud504\ub85c\ud544\uc774 \uc5c5\ub370\uc774\ud2b8\ub428")),A.database().ref("/profile/".concat(e)).set(t)}}]),e}(),U=a(18),T=a.n(U),J=a(23),X=function(){function e(){Object(R.a)(this,e)}return Object(W.a)(e,[{key:"upload",value:function(){var e=Object(J.a)(T.a.mark((function e(t){var a,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("file",t),a.append("upload_preset","clpjntmu"),e.next=5,fetch("https://api.cloudinary.com/v1_1/dxb2t5sxu/image/upload",{method:"POST",body:a});case 5:return n=e.sent,e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),q=a(26),z=a.n(q),V=function(e){var t=e.ImageUploadApp,a=e.name,i=e.onFileChange,c=Object(n.useRef)(),o=function(){var e=Object(J.a)(T.a.mark((function e(a){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.upload(a.target.files[0]);case 2:n=e.sent,i({name:n.original_filename,url:n.url});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:z.a.container},r.a.createElement("input",{ref:c,className:z.a.input,type:"file",accept:"image/*",name:"file",onChange:o}),r.a.createElement("button",{className:z.a.button,onClick:function(e){e.preventDefault(),c.current.click()}},a||"\ud504\ub85c\ud544 \uc774\ubbf8\uc9c0 \ubcc0\uacbd"))},G=new B,K=new D,H=new P,M=new X;c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,{authService:G,chatRepository:K,profileImgRepository:H,FileInput:function(e){return r.a.createElement(V,Object.assign({},e,{ImageUploadApp:M}))}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.5a867e01.chunk.js.map