<template>
  <div>
    <div class="container">
      <div class="row mt-5 justify-content-center">
        <div class="col-6 rounded border py-3">
          <h1 class="text-primary font-weight-bold">記錄我的最愛</h1>
          <h3 class="text-secondary">Login</h3>
          <form action>
            <div class="form-group form-row mb-0 mt-3">
              <label for="username" class="col-form-label col-3">使用者帳號</label>
              <!-- 使用自訂規則username驗證 -->
              <input
                type="text"
                class="form-control col-9"
                id="username"
                v-validate="'required|username'"
                name="username"
                data-vv-as="使用者名稱"
                placeholder="請輸入使用者名稱"
                v-model="userdata.username"
                :class="{'is-invalid':errors.has('username'),'is-valid':!errors.has('username')&&userdata.username!==''}"
              />
            </div>
            <div class="col-form-label col py-0">
              <span
                v-if="errors.has('username')"
                class="text-danger text-center small"
              >{{errors.first('username')}}</span>
            </div>
            <div class="form-group form-row mb-0 mt-3">
              <label for="password" class="col-form-label col-3">使用者密碼</label>
              <!-- 使用自訂規則password驗證 -->
              <input
                type="password"
                class="form-control col-9"
                id="password"
                v-validate="'required|password'"
                name="password"
                data-vv-as="使用者密碼"
                placeholder="請輸入使用者密碼"
                v-model="userdata.password"
                :class="{'is-invalid':errors.has('password'),'is-valid':!errors.has('password')&&userdata.password!==''}"
              />
              <div class="col-form-label col py-0">
                <span
                  v-if="errors.has('password')"
                  class="text-danger text-center small"
                >{{errors.first('password')}}</span>
              </div>
            </div>
          </form>
          <!-- 直接使用router-link導向註冊頁面 -->
          <router-link to="/signup" class="btn btn-outline-info mt-3 mx-3">註冊帳號</router-link>
          <div class="btn btn-primary mt-3 mx-3" @click="login">登入系統</div>
          <div class="row pt-4">
            <div class="col">
              <div class="wrongMsg text-center small text-danger"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userdata: {
        //暫存輸入帳密
        username: "",
        password: ""
      }
    };
  },
  beforeCreate(){
    document.title =this.$route.meta.title
  },
  methods: {
    login() {
      const vm = this;
      vm.$validator.validateAll().then(result => {
        if (result) {
          let tempUserdata = JSON.parse(localStorage.getItem("users")); //暫存整包users資料
          if (tempUserdata) {
            tempUserdata.forEach(function(item) {
              //有資料時比對帳號、密碼是否有完全相符的item
              if (
                item.username == vm.userdata.username &&
                item.password == vm.userdata.password
              ) {
                vm.$emit("userlogin", item.username); //找到則登入成功，將username傳出並且導向favor頁面
                vm.$router.push("/favor");
              } else {
                let wrongMsg = document.querySelector(".wrongMsg"); //找不到則插入錯誤訊息
                wrongMsg.innerHTML = `帳號或密碼錯誤`;
              }
            });
          } else {
            let wrongMsg = document.querySelector(".wrongMsg"); //local沒有users資料，插入報錯訊息
            wrongMsg.innerHTML = `您沒有註冊過哦！`;
          }
        } else {
          return;
        }
      });
    }
  }
};
</script>