import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VeeValidate from 'vee-validate'; //vee-validate套件
import zhTW from 'vee-validate/dist/locale/zh_TW'; //中文語系
import VueI18n from 'vue-i18n'; //i18n套件
import { Validator } from 'vee-validate'; //須載入Validator API以進行vee-validate修改、自訂

import ValidRule from '@/assets/scripts/valid' //載入自訂驗證規則

Vue.use(VueI18n);    //啟用vue-i18n

const i18n = new VueI18n({
  locale: 'zhTW',    //設定vuei18n語系為繁體中文
});

//啟用veevalidate
Vue.use(VeeValidate, {
  events: 'input|blur',  //設定input在blur時(脫離focus)進行驗證
  i18n,    //將上述中文語系的i18n載入至veevalidate中
  dictionary: {
    zhTW,    //載入Vee中文語系
  },
});
//修改預設錯誤訊息
const dictionary = {
  zhTW: {
    messages: {
      min: (field, args) => `${field}字數不能小於${args[0]}個字`,
      required: (field) => `${field}是必填的哦！`,
    }
  }
}
Validator.localize(dictionary) //載入修改

//啟用自訂規則名稱：username，套用規則使用@/asset/script/valid.js中的Regex的Username正規表達式進行驗證
Validator.extend('username',{
  getMessage:field=>`${field}開頭應為大寫字母，至少共4個英數組成`,
  validate:value=> ValidRule.Regex.Username.test(value)
})

//啟用自訂規則名稱：username，套用規則使用@/asset/script/valid.js中的Regex的Username正規表達式進行驗證
Validator.extend('password',{
  getMessage:function(field){return `${field}為4-8個字，至少包含1個大寫字母、一個小寫字母、一個數字`},
  // field=>`${field}為4-8個字，至少包含1個大寫字母、一個小寫字母、一個數字`,
  validate:value=> ValidRule.Regex.Password.test(value)
})

Vue.config.productionTip = false

new Vue({
  i18n,    //將上述中文語系的i18n載入至專案實體中
  router,
  render: h => h(App)
}).$mount('#app')

// //定義好正規表達式為regg，直接啟用tring，啟用時使用getMessage設定訊息，validate設定正規表達式驗證方法(引用regg)
// const regg = /^[0-9]{8,10}$/
// Validator.extend('tring',{
//   getMessage:function(field){
//     return `${field}應為8~10位數字`
//   },
//   validate:function(value){
//     return regg.test(value)
//   }
// });
// //↑箭頭函式版本
// const regg = /^[0-9]{8,10}$/
// Validator.extend('tring',{
//   getMessage:field=>`${field}應為8~10位數字`,
//   validate:value=>regg.test(value)
// });

// //先建好規則與錯誤訊息(validTry)，再啟用tring
// const validTry = {
//   getMessage:function(field){
//     return `${field}應為8~10位數字`
//   },
//   validate:function(value){
//     const regg = /^[0-9]{8,10}$/;
//     return regg.test(value)
//   }
// }
// Validator.extend('tring',validTry)
// //↑箭頭函式版本
// const validTry = {
//   getMessage:field=> `${field}應為8~10位數字`,
//   validate:value=> /^[0-9]{8,10}$/.test(value)
// }
// Validator.extend('tring',validTry)

// //建立好驗證規則validate錯誤訊息getMessage(一定要是這兩個名稱)，包成numTry物件，啟用時導入numTry
// const getMessage = function (field) {
//   return `${field}應為8~10位數字`
// };
// const validate = function (value) {
//   const regg = /^[0-9]{8,10}$/
//   return regg.test(value)
// };
// const numTry = {
//   getMessage,
//   validate
// };
// Validator.extend('tring', numTry);
// //建立好驗證規則validTry，啟用時才設定訊息，並將validTry帶入為validate
// //(和範例一樣直接在啟用時將validTry當參數，錯誤訊息無法正常顯示，顯示為：無效)
// const validTry = function (value) {
//   const regg = /^[0-9]{8,10}$/
//   return regg.test(value)
// };
// Validator.extend('tring',{
//   getMessage: function (field) {
//     return `${field}應為8~10位數字`
//   },
//   validate:validTry
// });


