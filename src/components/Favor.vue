<template>
  <div>
    <div class="container my-5">
      <div class="row py-3 justify-content-center">
        <div class="col-9 d-flex justify-content-end">
          <button class="btn btn-outline-danger" @click="logout">登出</button>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-9 p-3 rounded border">
          <h1 class="font-weight-bold">我的最愛清單</h1>
          <div class="text-center text-primary h4">Hi 親愛的 <span class="text-warning h5">{{userData.nickname}}</span>您好！</div>
          <div class="text-center text-secondary">請填入名稱與網址，將網站加入我的最愛清單</div>
          <form action class="py-3">
            <div class="container">
              <div class="form-row">
                <div class="form-group col-3 mb-0">
                  <label for="name" class="text-left">網站名稱</label>
                  <!-- 設定必填、至少2個字元驗證，連結資料tempFavorItem暫存在name -->
                  <input
                    type="text"
                    id="name"
                    class="form-control"
                    placeholder="請輸入名稱"
                    v-validate="'required|min:2'"
                    data-vv-as="網站名稱"
                    name="name"
                    v-model="tempFavorItem.name"
                    :class="{'is-invalid':errors.has('name'),'is-valid':!errors.has('name')&&tempFavorItem.name!==''}"
                  />
                </div>
                <div class="form-group col-7 mb-0">
                  <label for="url">網址</label>
                  <!-- 設定必填、網址格式(含http的protocol)，連結資料tempFavorItem暫存在content -->
                  <input
                    type="text"
                    id="url"
                    class="form-control"
                    placeholder="請輸入網址"
                    v-validate="{required:true,url:{require_protocol:true}}"
                    data-vv-as="網址"
                    name="url"
                    v-model="tempFavorItem.content"
                    :class="{'is-invalid':errors.has('url'),'is-valid':!errors.has('url')&&tempFavorItem.content!==''}"
                  />
                </div>
                <div class="form-group col-2 align-self-end mb-0">
                  <div class="btn btn-primary" @click="addFavorItem">加入</div>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-3">
                  <div v-show="errors.has('name')">
                    <span class="small text-danger">{{errors.first('name')}}</span>
                  </div>
                </div>
                <div class="form-group col-7">
                  <div v-show="errors.has('url')">
                    <span class="small text-danger">{{errors.first('url')}}應如：https://www.google.com</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div class="list container">
            <ul class="list-group">
              <li class="list-group-item d-flex" v-for="(item,index) in userFavor" :key="index">
                <div>{{item.name}}</div>
                <div class="ml-3">
                  <a :href="item.content" target="_blank">{{item.content}}</a>
                </div>
                <!-- 點擊刪除該item(以index判斷) -->
                <button type="button" class="close ml-auto" @click="delItem(index)">
                  <span aria-hidden="true">&times;</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //從index.vue以props取得login的user資料
  props: ["loginuser"],
  data() {
    return {
      userData: this.loginuser, //將props取得使用者資料存入userData用來取得favor資料，物件格式：{username:'',nickname:''}
      userFavor: [], //存取該使用者favor資料，陣列格式、item為物件：[{name:'網站名稱',content:'網址'},{},...]
      tempFavorItem: {
        name: "",
        content: ""
      } //暫存編輯中的資料，物件格式：{name:'網站名稱',content:'網址'}
    };
  },
  beforeCreate() {
    document.title = this.$route.meta.title;
  },
  created() {
    console.log("userdata", this.userData);
    const vm = this;
    let tempFavorData = JSON.parse(localStorage.getItem("favors")); //格式為陣列，分不同使用者不同物件，以username區分[{username:'',favorData:[{},{}]},{}]
    //localStorage有資料，透過forEach以username比對取得此使用者資料
    if (tempFavorData) {
      tempFavorData.forEach(item => {
        if (item.username == vm.userData.username) {
          vm.userFavor = item.favorData;
        }
      });
    } else {
      //沒有資料不作動
      console.log("No-Data");
    }
  },
  methods: {
    //新增item
    addFavorItem() {
      const vm = this;
      vm.$validator.validateAll().then(result => {
        //表單資料驗證通過
        if (result) {
          vm.userFavor.push(vm.tempFavorItem); //將編輯中資料存入userFavor陣列
          let name = vm.userData.username;
          let favor = vm.userFavor;
          let data = [{ username: name, favorData: favor }]; //整理傳入資料格式
          let tempFavorData = JSON.parse(localStorage.getItem("favors")); //暫存local的favors資料
          if (!tempFavorData) {
            localStorage.setItem("favors", JSON.stringify(data)); //local無資料，直接傳入
          } else {
            tempFavorData.forEach(item => {
              if (item.username == vm.userData.username) {
                //local有資料，找到username同筆資料，整包替換
                item.favorData = favor;
              }
            });
            localStorage.setItem("favors", JSON.stringify(tempFavorData)); //將替換完資料整筆傳入
          }
          //   vm.tempFavorItem = { name: "", content: "" };
          //   document.querySelector("#url").classList.remove("is-invalid");
          //   document.querySelector("#name").classList.remove("is-invalid");
          this.$data.tempFavorItem = this.$options.data().tempFavorItem; //清除tempFavorItem資料回到預設值
          this.errors.clear(); //清空所有errosBag錯誤訊息
          this.$validator.reset(); //清空此validator狀態
        }
      });
    },
    delItem(index) {
      const vm = this;
      vm.userFavor.splice(index, 1); //從觸發item取得index，從資料中刪除
      let favor = vm.userFavor;
      let tempFavorData = JSON.parse(localStorage.getItem("favors")); //暫存local的favor資料
      tempFavorData.forEach(item => {
        if (item.username == vm.userData.username) {
          item.favorData = favor; //找到相同username替換整個favorData陣列資料
          localStorage.setItem("favors", JSON.stringify(tempFavorData)); //將替換完資料整筆傳入
        }
      });
    },
    logout(){
      const vm = this
      vm.$emit('userlogout')
      vm.$router.push('/')
    }
  }
};
</script>