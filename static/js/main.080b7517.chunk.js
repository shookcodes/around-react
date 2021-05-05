(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{16:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(7),r=a.n(s),i=(a(4),a(10)),l=a(2),o=a.p+"static/media/header__logo.c7581985.svg",u=a(0);function d(){return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("img",{className:"header__logo",src:o,alt:"Around the U.S."})})}var p=c.a.createContext();function b(e){var t=Object(n.useContext)(p);var a=t._id===e.card.owner._id,c="btn btn_style_delete ".concat(a?"btn_style_delete-active":""),s=e.card.likes.some((function(e){return e._id===t._id})),r="btn btn_style_like ".concat(s?"btn_style_like-active":"");return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("button",{className:c,"aria-label":"Delete place",onClick:function(){e.onCardDelete(e.card)}}),Object(u.jsx)("div",{className:"card__image",style:{backgroundImage:"url(".concat(e.card.link,")")},onClick:function(){e.onCardClick(e.card)}}),Object(u.jsxs)("div",{className:"card__content",children:[Object(u.jsx)("h2",{className:"card__title",children:e.card.name}),Object(u.jsxs)("div",{className:"card__like",children:[Object(u.jsx)("button",{className:r,type:"button","aria-label":"Like location",onClick:function(){e.onCardLike(e.card)}}),Object(u.jsx)("span",{className:"card__like-text",children:e.card.likes.length})]})]})]})}function h(e){var t=Object(n.useContext)(p);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("section",{className:"profile",children:[Object(u.jsxs)("div",{className:"profile__avatar-container",children:[Object(u.jsx)("button",{className:"profile__avatar-edit",type:"button","aria-label":"Edit Avatar",onClick:e.onEditAvatar}),Object(u.jsx)("div",{className:"profile__avatar",alt:"Profile picture",style:{backgroundImage:"url(".concat(t.avatar,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat"}})]}),Object(u.jsxs)("div",{className:"profile__info",children:[Object(u.jsxs)("div",{className:"profile__name-info",children:[Object(u.jsx)("h1",{className:"profile__name",id:"name",children:t.name}),Object(u.jsx)("button",{className:"btn btn_style_edit-profile",type:"button","aria-label":"Edit profile",onClick:e.onEditProfile})]}),Object(u.jsx)("p",{className:"profile__title",children:t.about})]}),Object(u.jsx)("button",{className:"btn btn_style_add",type:"button","aria-label":"Add location",onClick:e.onAddPlace})]}),Object(u.jsx)("section",{className:"cards",children:e.cards.map((function(t){return Object(u.jsx)(b,{card:t,link:t.link,name:t.name,selectedCard:e.card,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})}function j(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("p",{className:"footer__paragraph",children:"\xa9 2020 Around The U.S."})})}function _(e){var t=e.selectedCard;return Object(u.jsx)("div",{className:"popup popup_style_image ".concat(e.selectedCard&&t.name&&""!==t.link?"popup_opened":""),children:Object(u.jsxs)("div",{className:"popup__image-container",children:[Object(u.jsx)("button",{className:"btn btn_style_close btn_style_close-image",onClick:e.onClose}),Object(u.jsxs)("figure",{className:"popup__figure",children:[Object(u.jsx)("img",{className:"popup__image",src:e.selectedCard?t.link:"about:blank",alt:t.name}),Object(u.jsx)("figcaption",{className:"popup__caption",children:t.name})]})]})})}function m(e){return Object(u.jsx)("div",{className:"popup popup_style_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(u.jsx)("form",{className:"popup__form",name:e.name,noValidate:!0,onSubmit:e.onSubmit,children:Object(u.jsxs)("fieldset",{className:"popup__fields",children:[Object(u.jsx)("button",{className:"btn btn_style_close btn_style_close-popup",type:"reset","aria-label":"Close ".concat(e.name," modal"),onClick:e.onClose}),Object(u.jsx)("h2",{className:"popup__title",children:e.title}),Object(u.jsx)("div",{className:"popup__inputs",children:e.children}),Object(u.jsx)("button",{className:"btn btn_style_save",type:"submit","aria-label":e.ariaLabel,children:"Save"})]})})})}function f(e){var t=Object(n.useContext)(p),a=Object(n.useState)(t.name),c=Object(l.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)(t.about),o=Object(l.a)(i,2),d=o[0],b=o[1];return Object(n.useEffect)((function(){r(t.name),b(t.about)}),[t]),Object(u.jsx)(m,{isOpen:e.isOpen,onClose:e.onClose,name:"profile",title:"Edit Profile",ariaLabel:"Save profile",onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:d})},children:Object(u.jsxs)("label",{className:"popup__field",htmlFor:"user-name",children:[Object(u.jsx)("input",{className:"popup__input popup__input_type_user-name",type:"text",id:"user-name",name:"user-name",placeholder:"Name","aria-label":"User Name",required:!0,minLength:"2",value:s,onChange:function(e){r(e.target.value)}}),Object(u.jsx)("input",{className:"popup__input popup__input_type_about-me",type:"text",id:"about-me",name:"about-me",placeholder:"About Me","aria-label":"About me",required:!0,minLength:"2",value:d,onChange:function(e){b(e.target.value)}})]})})}function O(e){Object(n.useContext)(p);var t=Object(n.useRef)(null);return Object(u.jsx)(m,{isOpen:e.isOpen,onClose:e.onClose,name:"avatar",title:"Change Profile Picture",ariaLabel:"Save profile picture",onSubmit:function(a){a.preventDefault();var n=t.current.value;e.onUpdateAvatar({avatar:n})},children:Object(u.jsx)("label",{className:"popup__field",htmlFor:"avatar-url",children:Object(u.jsx)("input",{className:"popup__input popup__input_type_avatar-image",type:"url",id:"avatar-url",name:"avatar-url",placeholder:"Avatar URL","aria-label":"Avatar URL",required:!0,minLength:"2",ref:t})})})}function v(e){Object(n.useContext)(p);var t=Object(n.useState)(null),a=Object(l.a)(t,2),c=(a[0],a[1],Object(n.useState)(null)),s=Object(l.a)(c,2),r=(s[0],s[1],Object(n.useRef)(null)),i=Object(n.useRef)(null);return Object(u.jsxs)(m,{isOpen:e.isOpen,onClose:e.onClose,name:"place",title:"New Place",ariaLabel:"Save new place",onSubmit:function(t){t.preventDefault();var a=r.current,n=i.current,c=a.value,s=n.value;e.onAddPlace({name:c,link:s})},children:[Object(u.jsx)("label",{className:"popup__field",htmlFor:"place-name",children:Object(u.jsx)("input",{className:"popup__input popup__input_type_place-name",type:"text",id:"place-name",name:"place-name",placeholder:"Title",required:!0,minLength:"2",maxLength:"30",ref:r})}),Object(u.jsx)("label",{className:"popup__field",htmlFor:"place-link",children:Object(u.jsx)("input",{className:"popup__input popup__input_type_place-link",type:"url",id:"place-link",name:"place-link",placeholder:"Image link",required:!0,ref:i})})]})}var k=a(8),x=a(9),C=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(k.a)(this,e),this._baseUrl=a,this._headers=n}return Object(x.a)(e,[{key:"_checkResponse",value:function(e,t){return e.ok?e.json():Promise.reject(t)}},{key:"getCardList",value:function(){return fetch(this._baseUrl+"/cards",{headers:this._headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch(this._baseUrl+"/users/me",{headers:this._headers}).then(this._checkResponse)}},{key:"getAppInfo",value:function(){return Promise.all([this.getCardList(),this.getUserInfo()])}},{key:"addCard",value:function(e){var t=e.name,a=e.link;return fetch(this._baseUrl+"/cards/",{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:a})}).then(this._checkResponse)}},{key:"removeCard",value:function(e){return fetch(this._baseUrl+"/cards/"+e,{method:"DELETE",headers:this._headers,body:JSON.stringify({cardId:e})}).then(this._checkResponse)}},{key:"getCardLikes",value:function(e){return fetch(this._baseUrl+"/cards/likes/"+e,{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"addCardLike",value:function(e,t){return fetch(this._baseUrl+"/cards/likes/"+e,{method:"PUT",headers:this._headers,body:JSON.stringify({cardId:e,like:t})}).then(this._checkResponse)}},{key:"removeCardLike",value:function(e,t){return fetch(this._baseUrl+"/cards/likes/"+e,{method:"DELETE",headers:this._headers,body:JSON.stringify({cardId:e,like:t})}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){var t=e.name,a=e.about;return fetch(this._baseUrl+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:a})}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e){var t=e.avatar;return fetch(this._baseUrl+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then(this._checkResponse)}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-9",headers:{authorization:"260d5980-6d5e-481f-83d5-bd34d23b0619","Content-Type":"application/json"}});var g=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)({}),o=Object(l.a)(r,2),b=o[0],m=o[1];Object(n.useEffect)((function(){C.getCardList().then((function(e){s(e)})).catch((function(e){return console.log(e)}))}),[]);var k=Object(n.useState)({name:"",about:"",avatar:"",_id:""}),x=Object(l.a)(k,2),g=x[0],y=x[1],N=Object(n.useState)(!1),S=Object(l.a)(N,2)[1],U=Object(n.useState)(!1),L=Object(l.a)(U,2),A=L[0],P=L[1],E=Object(n.useState)(!1),R=Object(l.a)(E,2),I=R[0],T=R[1],D=Object(n.useState)(!1),F=Object(l.a)(D,2),J=F[0],w=F[1];function q(){S(!1),P(!1),T(!1),w(!1),m({name:null,link:null})}return Object(n.useEffect)((function(){C.getUserInfo().then((function(e){y(e)})).catch((function(e){return console.log(e)}))}),[]),Object(u.jsx)(p.Provider,{value:g,children:Object(u.jsxs)("div",{className:"page",children:[Object(u.jsx)(d,{}),Object(u.jsx)(h,{onEditAvatar:function(){P(!0)},onEditProfile:function(){T(!0)},onCardClick:function(e){m(e)},onCardLike:function(e){(!1===e.likes.some((function(e){return e._id===g._id}))?C.addCardLike(e._id):C.removeCardLike(e._id)).then((function(t){var a=c.map((function(a){return a._id===e._id?t:a}));s(a)})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){C.removeCard(e._id).then((function(){var t=c.filter((function(t){return t._id!==e._id}));s(t)}))},onAddPlace:function(){w(!0)},cards:c}),Object(u.jsx)(j,{}),Object(u.jsx)(_,{selectedCard:b,card:e.card,name:e.name,link:e.link,onClose:q}),Object(u.jsx)(O,{isOpen:A,onClose:q,onUpdateAvatar:function(e){C.setUserAvatar(e).then((function(e){y(e)})).then(q).catch((function(e){return console.log(e)}))}}),Object(u.jsx)(v,{isOpen:J,onClose:q,onAddPlace:function(e){C.addCard(e).then((function(e){return s([e].concat(Object(i.a)(c)))})).then(q).catch((function(e){return console.log(e)}))}}),Object(u.jsx)(f,{isOpen:I,onClose:q,onUpdateUser:function(e){C.setUserInfo(e).then((function(e){y(e)})).then(q).catch((function(e){return console.log(e)}))}})]})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),y()},4:function(e,t,a){}},[[16,1,2]]]);
//# sourceMappingURL=main.080b7517.chunk.js.map