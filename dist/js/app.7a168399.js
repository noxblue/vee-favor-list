(function(e){function a(a){for(var r,n,i=a[0],l=a[1],c=a[2],d=0,m=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&m.push(s[n][0]),s[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(a);while(m.length)m.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t=o[a],r=!0,i=1;i<t.length;i++){var l=t[i];0!==s[l]&&(r=!1)}r&&(o.splice(a--,1),e=n(n.s=t[0]))}return e}var r={},s={app:0},o=[];function n(a){if(r[a])return r[a].exports;var t=r[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=r,n.d=function(e,a,t){n.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,a){if(1&a&&(e=n(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)n.d(t,r,function(a){return e[a]}.bind(null,r));return t},n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,"a",a),a},n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},n.p="/vee-favor-list/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=a,i=i.slice();for(var c=0;c<i.length;c++)a(i[c]);var u=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"56d7":function(e,a,t){"use strict";t.r(a);t("99af"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],n=(t("5c0b"),t("2877")),i={},l=Object(n["a"])(i,s,o,!1,null,null,null),c=l.exports,u=t("8c4f"),d=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("router-view",{attrs:{loginuser:e.loginUser},on:{userlogin:e.getLoginData,userlogout:e.userLogout}})],1)},m=[],v=(t("4160"),t("159b"),{data:function(){return{loginUser:{username:"",nickname:""}}},methods:{getLoginData:function(e){var a=this,t=JSON.parse(localStorage.getItem("users"));t&&t.forEach((function(t){t.username==e&&(a.loginUser.username=t.username,a.loginUser.nickname=t.nickname)}))},userLogout:function(){var e=this;e.loginUser={username:"",nickname:""},this.errors.clear(),this.$validator.reset()}}}),p=v,f=Object(n["a"])(p,d,m,!1,null,null,null),g=f.exports,h=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"container"},[t("div",{staticClass:"row mt-5 justify-content-center"},[t("div",{staticClass:"col-6 rounded border py-3"},[t("h1",{staticClass:"text-primary font-weight-bold"},[e._v("記錄我的最愛")]),t("h3",{staticClass:"text-secondary"},[e._v("Login")]),t("form",{attrs:{action:""}},[t("div",{staticClass:"form-group form-row mb-0 mt-3"},[t("label",{staticClass:"col-form-label col-3",attrs:{for:"username"}},[e._v("使用者帳號")]),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|username",expression:"'required|username'"},{name:"model",rawName:"v-model",value:e.userdata.username,expression:"userdata.username"}],staticClass:"form-control col-9",class:{"is-invalid":e.errors.has("username"),"is-valid":!e.errors.has("username")&&""!==e.userdata.username},attrs:{type:"text",id:"username",name:"username","data-vv-as":"使用者名稱",placeholder:"請輸入使用者名稱"},domProps:{value:e.userdata.username},on:{input:function(a){a.target.composing||e.$set(e.userdata,"username",a.target.value)}}})]),t("div",{staticClass:"col-form-label col py-0"},[e.errors.has("username")?t("span",{staticClass:"text-danger text-center small"},[e._v(e._s(e.errors.first("username")))]):e._e()]),t("div",{staticClass:"form-group form-row mb-0 mt-3"},[t("label",{staticClass:"col-form-label col-3",attrs:{for:"password"}},[e._v("使用者密碼")]),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|password",expression:"'required|password'"},{name:"model",rawName:"v-model",value:e.userdata.password,expression:"userdata.password"}],staticClass:"form-control col-9",class:{"is-invalid":e.errors.has("password"),"is-valid":!e.errors.has("password")&&""!==e.userdata.password},attrs:{type:"password",id:"password",name:"password","data-vv-as":"使用者密碼",placeholder:"請輸入使用者密碼"},domProps:{value:e.userdata.password},on:{input:function(a){a.target.composing||e.$set(e.userdata,"password",a.target.value)}}}),t("div",{staticClass:"col-form-label col py-0"},[e.errors.has("password")?t("span",{staticClass:"text-danger text-center small"},[e._v(e._s(e.errors.first("password")))]):e._e()])])]),t("router-link",{staticClass:"btn btn-outline-info mt-3 mx-3",attrs:{to:"/signup"}},[e._v("註冊帳號")]),t("div",{staticClass:"btn btn-primary mt-3 mx-3",on:{click:e.login}},[e._v("登入系統")]),e._m(0)],1)])])])},w=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"row pt-4"},[t("div",{staticClass:"col"},[t("div",{staticClass:"wrongMsg text-center small text-danger"})])])}],b={data:function(){return{userdata:{username:"",password:""}}},beforeCreate:function(){document.title=this.$route.meta.title},methods:{login:function(){var e=this;e.$validator.validateAll().then((function(a){if(a){var t=JSON.parse(localStorage.getItem("users"));if(t)t.forEach((function(a){if(a.username==e.userdata.username&&a.password==e.userdata.password)e.$emit("userlogin",a.username),e.$router.push("/favor");else{var t=document.querySelector(".wrongMsg");t.innerHTML="帳號或密碼錯誤"}}));else{var r=document.querySelector(".wrongMsg");r.innerHTML="您沒有註冊過哦！"}}}))}}},C=b,_=Object(n["a"])(C,h,w,!1,null,null,null),x=_.exports,y=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"container pt-5"},[t("div",{staticClass:"row py-1 justify-content-center"},[t("div",{staticClass:"col-8 d-flex justify-content-start"},[t("router-link",{staticClass:"btn btn-secondary",attrs:{to:"/"}},[e._v("回到登入頁")])],1)]),t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-8 rounded border py-3 px-5"},[t("h1",{staticClass:"font-weight-bold"},[e._v("註冊我的最愛系統")]),t("form",{attrs:{action:""}},[t("div",{staticClass:"form-group form-row mb-0 mt-3"},[t("label",{staticClass:"col-form-label col-3",attrs:{for:"username"}},[e._v("使用者帳號")]),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|username",expression:"'required|username'"},{name:"model",rawName:"v-model",value:e.userdata.username,expression:"userdata.username"}],staticClass:"form-control col-9",class:{"is-invalid":e.errors.has("username"),"is-valid":!e.errors.has("username")&&""!==e.userdata.username},attrs:{type:"text",id:"username",name:"username","data-vv-as":"使用者名稱",placeholder:"請輸入使用者名稱"},domProps:{value:e.userdata.username},on:{input:function(a){a.target.composing||e.$set(e.userdata,"username",a.target.value)}}})]),t("div",{staticClass:"col-form-label col py-0"},[e.errors.has("username")?t("span",{staticClass:"text-danger text-center small"},[e._v(e._s(e.errors.first("username")))]):e._e()]),t("div",{staticClass:"form-group form-row mb-0 mt-3"},[t("label",{staticClass:"col-form-label col-3",attrs:{for:"password"}},[e._v("使用者密碼")]),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|password",expression:"'required|password'"},{name:"model",rawName:"v-model",value:e.userdata.password,expression:"userdata.password"}],ref:"password",staticClass:"form-control col-9",class:{"is-invalid":e.errors.has("password"),"is-valid":!e.errors.has("password")&&""!==e.userdata.password},attrs:{type:"password",id:"password",name:"password","data-vv-as":"使用者密碼",placeholder:"請輸入使用者密碼"},domProps:{value:e.userdata.password},on:{input:function(a){a.target.composing||e.$set(e.userdata,"password",a.target.value)}}}),t("div",{staticClass:"col-form-label col py-0"},[e.errors.has("password")?t("span",{staticClass:"text-danger text-center small"},[e._v(e._s(e.errors.first("password")))]):e._e()])]),t("div",{staticClass:"form-group form-row mb-0 mt-3"},[t("label",{staticClass:"col-form-label col-3",attrs:{for:"password-confirm"}},[e._v("確認密碼")]),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|confirmed:password",expression:"'required|confirmed:password'"},{name:"model",rawName:"v-model",value:e.checkdata.password,expression:"checkdata.password"}],staticClass:"form-control col-9",class:{"is-invalid":e.errors.has("password-confirm"),"is-valid":!e.errors.has("password-confirm")&&e.checkdata.password==e.userdata.password&&""!==e.userdata.password},attrs:{type:"password",id:"password-confirm",name:"password-confirm","data-vv-as":"確認密碼",placeholder:"請再次輸入密碼"},domProps:{value:e.checkdata.password},on:{input:function(a){a.target.composing||e.$set(e.checkdata,"password",a.target.value)}}}),t("div",{staticClass:"col-form-label col py-0"},[e.errors.has("password-confirm")&&""!==e.checkdata.password?t("span",{staticClass:"text-danger text-center small"},[e._v("兩次密碼輸入不相同哦！")]):e._e(),e.errors.has("password-confirm")&&""==e.checkdata.password?t("span",{staticClass:"text-danger text-center small"},[e._v("確認密碼欄位是必填的哦！")]):e._e()])]),t("div",{staticClass:"form-group form-row mb-0 mt-3"},[t("label",{staticClass:"col-form-label col-3",attrs:{for:"password-confirm"}},[e._v("用戶暱稱")]),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"min:2",expression:"'min:2'"},{name:"model",rawName:"v-model",value:e.userdata.nickname,expression:"userdata.nickname"}],staticClass:"form-control col-9",class:{"is-invalid":e.errors.has("nickname"),"is-valid":!e.errors.has("nickname")&&""!==e.userdata.nickname},attrs:{type:"text",id:"nickname",name:"nickname","data-vv-as":"用戶暱稱",placeholder:"請輸入暱稱 (option)"},domProps:{value:e.userdata.nickname},on:{input:function(a){a.target.composing||e.$set(e.userdata,"nickname",a.target.value)}}}),t("div",{staticClass:"col-form-label col py-0"},[e.errors.has("nickname")?t("span",{staticClass:"text-danger text-center small"},[e._v(e._s(e.errors.first("nickname")))]):e._e()])])]),t("div",{staticClass:"btn btn-primary mt-3 mx-3",on:{click:e.signup}},[e._v("註冊系統")])])])])])},k=[],$={data:function(){return{userdata:{username:"",password:"",nickname:""},checkdata:{password:""}}},beforeCreate:function(){document.title=this.$route.meta.title},methods:{signup:function(){var e=this;e.$validator.validateAll().then((function(a){if(a){var t=JSON.parse(localStorage.getItem("users"));t?t.forEach((function(a){a.username==e.userdata.username?(alert("使用者帳號已被註冊過，請直接登入"),e.$router.push("/")):(t.push(e.userdata),localStorage.setItem("users",JSON.stringify(t)),alert("註冊成功！"),e.$emit("userlogin",e.userdata.username),e.$router.push("/favor"))})):(t=[],t.push(e.userdata),localStorage.setItem("users",JSON.stringify(t)),alert("註冊成功！"),e.$emit("userlogin",e.userdata.username),e.$router.push("/favor"))}}))}}},I=$,N=Object(n["a"])(I,y,k,!1,null,null,null),S=N.exports,O=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"container my-5"},[t("div",{staticClass:"row py-3 justify-content-center"},[t("div",{staticClass:"col-9 d-flex justify-content-end"},[t("button",{staticClass:"btn btn-outline-danger",on:{click:e.logout}},[e._v("登出")])])]),t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-9 p-3 rounded border"},[t("h1",{staticClass:"font-weight-bold"},[e._v("我的最愛清單")]),t("div",{staticClass:"text-center text-primary h4"},[e._v("Hi 親愛的 "),t("span",{staticClass:"text-warning h5"},[e._v(e._s(e.userData.nickname))]),e._v("您好！")]),t("div",{staticClass:"text-center text-secondary"},[e._v("請填入名稱與網址，將網站加入我的最愛清單")]),t("form",{staticClass:"py-3",attrs:{action:""}},[t("div",{staticClass:"container"},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"form-group col-3 mb-0"},[t("label",{staticClass:"text-left",attrs:{for:"name"}},[e._v("網站名稱")]),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:2",expression:"'required|min:2'"},{name:"model",rawName:"v-model",value:e.tempFavorItem.name,expression:"tempFavorItem.name"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("name"),"is-valid":!e.errors.has("name")&&""!==e.tempFavorItem.name},attrs:{type:"text",id:"name",placeholder:"請輸入名稱","data-vv-as":"網站名稱",name:"name"},domProps:{value:e.tempFavorItem.name},on:{input:function(a){a.target.composing||e.$set(e.tempFavorItem,"name",a.target.value)}}})]),t("div",{staticClass:"form-group col-7 mb-0"},[t("label",{attrs:{for:"url"}},[e._v("網址")]),t("input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,url:{require_protocol:!0}},expression:"{required:true,url:{require_protocol:true}}"},{name:"model",rawName:"v-model",value:e.tempFavorItem.content,expression:"tempFavorItem.content"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("url"),"is-valid":!e.errors.has("url")&&""!==e.tempFavorItem.content},attrs:{type:"text",id:"url",placeholder:"請輸入網址","data-vv-as":"網址",name:"url"},domProps:{value:e.tempFavorItem.content},on:{input:function(a){a.target.composing||e.$set(e.tempFavorItem,"content",a.target.value)}}})]),t("div",{staticClass:"form-group col-2 align-self-end mb-0"},[t("div",{staticClass:"btn btn-primary",on:{click:e.addFavorItem}},[e._v("加入")])])]),t("div",{staticClass:"form-row"},[t("div",{staticClass:"form-group col-3"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("name"),expression:"errors.has('name')"}]},[t("span",{staticClass:"small text-danger"},[e._v(e._s(e.errors.first("name")))])])]),t("div",{staticClass:"form-group col-7"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("url"),expression:"errors.has('url')"}]},[t("span",{staticClass:"small text-danger"},[e._v(e._s(e.errors.first("url"))+"應如：https://www.google.com")])])])])])]),t("div",{staticClass:"list container"},[t("ul",{staticClass:"list-group"},e._l(e.userFavor,(function(a,r){return t("li",{key:r,staticClass:"list-group-item d-flex"},[t("div",[e._v(e._s(a.name))]),t("div",{staticClass:"ml-3"},[t("a",{attrs:{href:a.content,target:"_blank"}},[e._v(e._s(a.content))])]),t("button",{staticClass:"close ml-auto",attrs:{type:"button"},on:{click:function(a){return e.delItem(r)}}},[t("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])})),0)])])])])])},F=[],j=(t("a434"),{props:["loginuser"],data:function(){return{userData:this.loginuser,userFavor:[],tempFavorItem:{name:"",content:""}}},beforeCreate:function(){document.title=this.$route.meta.title},created:function(){console.log("userdata",this.userData);var e=this,a=JSON.parse(localStorage.getItem("favors"));a?a.forEach((function(a){a.username==e.userData.username&&(e.userFavor=a.favorData)})):console.log("No-Data")},methods:{addFavorItem:function(){var e=this,a=this;a.$validator.validateAll().then((function(t){if(t){a.userFavor.push(a.tempFavorItem);var r=a.userData.username,s=a.userFavor,o=[{username:r,favorData:s}],n=JSON.parse(localStorage.getItem("favors"));n?(n.forEach((function(e){e.username==a.userData.username&&(e.favorData=s)})),localStorage.setItem("favors",JSON.stringify(n))):localStorage.setItem("favors",JSON.stringify(o)),e.$data.tempFavorItem=e.$options.data().tempFavorItem,e.errors.clear(),e.$validator.reset()}}))},delItem:function(e){var a=this;a.userFavor.splice(e,1);var t=a.userFavor,r=JSON.parse(localStorage.getItem("favors"));r.forEach((function(e){e.username==a.userData.username&&(e.favorData=t,localStorage.setItem("favors",JSON.stringify(r)))}))},logout:function(){var e=this;e.$emit("userlogout"),e.$router.push("/")}}}),q=j,P=Object(n["a"])(q,O,F,!1,null,null,null),D=P.exports;r["a"].use(u["a"]);var J=[{path:"/",name:"Index",component:g,children:[{path:"/",name:"Login",component:x,meta:{title:"請登入我的最愛系統"}},{path:"/signup",name:"Signup",component:S,meta:{title:"註冊系統"}},{path:"/favor",name:"Favor",component:D,meta:{title:"我的最愛清單"}}]}],E=new u["a"]({routes:J}),M=E,L=t("7bb1"),T=t("427f"),U=t.n(T),z=t("a925"),A={Regex:{Username:/^[A-Z]+(?=.*[A-Za-z0-9]{3,}$)/,Password:/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{4,8}$/}};r["a"].use(z["a"]);var H=new z["a"]({locale:"zhTW"});r["a"].use(L["b"],{events:"input|blur",i18n:H,dictionary:{zhTW:U.a}});var R={zhTW:{messages:{min:function(e,a){return"".concat(e,"字數不能小於").concat(a[0],"個字")},required:function(e){return"".concat(e,"是必填的哦！")}}}};L["a"].localize(R),L["a"].extend("username",{getMessage:function(e){return"".concat(e,"開頭應為大寫字母，至少共4個英數組成")},validate:function(e){return A.Regex.Username.test(e)}}),L["a"].extend("password",{getMessage:function(e){return"".concat(e,"為4-8個字，至少包含1個大寫字母、一個小寫字母、一個數字")},validate:function(e){return A.Regex.Password.test(e)}}),r["a"].config.productionTip=!1,new r["a"]({i18n:H,router:M,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,a,t){"use strict";var r=t("9c0c"),s=t.n(r);s.a},"9c0c":function(e,a,t){}});
//# sourceMappingURL=app.7a168399.js.map