<template>
  <div>
    <div class="container pt-5">
      <div class="row py-1 justify-content-center">
        <div class="col-8 d-flex justify-content-start">
          <router-link to="/" class="btn btn-secondary">回到登入頁</router-link>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-8 rounded border py-3 px-5">
          <h1 class="font-weight-bold">註冊我的最愛系統</h1>
          <form action>
            <div class="form-group form-row mb-0 mt-3">
              <label for="username" class="col-form-label col-3">使用者帳號</label>
              <!-- 使用自訂規則username進行驗證 -->
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
              <!-- 使用自訂規則password進行驗證 -->
              <label for="password" class="col-form-label col-3">使用者密碼</label>
              <input
                type="password"
                class="form-control col-9"
                id="password"
                v-validate="'required|password'"
                name="password"
                ref="password"
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
            <div class="form-group form-row mb-0 mt-3">
              <label for="password-confirm" class="col-form-label col-3">確認密碼</label>
              <!-- 使用預設confirmed規則進行password比對 -->
              <input
                type="password"
                class="form-control col-9"
                id="password-confirm"
                v-validate="'required|confirmed:password'"
                name="password-confirm"
                data-vv-as="確認密碼"
                placeholder="請再次輸入密碼"
                v-model="checkdata.password"
                :class="{'is-invalid':errors.has('password-confirm'),'is-valid':!errors.has('password-confirm')&&checkdata.password==userdata.password&&userdata.password!==''}"
              />
              <div class="col-form-label col py-0">
                <!-- 自訂錯誤訊息：有資料時錯誤為不相同、無資料時錯誤為未填欄位 -->
                <span
                  v-if="errors.has('password-confirm')&&checkdata.password!==''"
                  class="text-danger text-center small"
                >兩次密碼輸入不相同哦！</span>
                <span
                  v-if="errors.has('password-confirm')&&checkdata.password==''"
                  class="text-danger text-center small"
                >確認密碼欄位是必填的哦！</span>
              </div>
            </div>
            <div class="form-group form-row mb-0 mt-3">
              <label for="password-confirm" class="col-form-label col-3">用戶暱稱</label>
              <input
                type="text"
                class="form-control col-9"
                id="nickname"
                v-validate="'min:2'"
                name="nickname"
                data-vv-as="用戶暱稱"
                placeholder="請輸入暱稱 (option)"
                v-model="userdata.nickname"
                :class="{'is-invalid':errors.has('nickname'),'is-valid':!errors.has('nickname')&&userdata.nickname!==''}"
              />
              <div class="col-form-label col py-0">
                <span
                  v-if="errors.has('nickname')"
                  class="text-danger text-center small"
                >{{errors.first('nickname')}}</span>
              </div>
            </div>
          </form>
          <div class="btn btn-primary mt-3 mx-3" @click="signup">註冊系統</div>
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
        username: "",
        password: "",
        nickname: ""
      },
      checkdata: {
        password: ""
      }
    };
  },
  beforeCreate(){
    document.title =this.$route.meta.title
  },
  methods: {
    signup() {
      // console.log(this.userdata);
      const vm = this;
      vm.$validator.validateAll().then(result => {
        if (result) {
          let tempUserdata = JSON.parse(localStorage.getItem("users")); //暫存整包users資料進行比對
          if (tempUserdata) {
            tempUserdata.forEach(item => {
              if (item.username == vm.userdata.username) { //比對有相同帳號時報錯，回到登入畫面
                alert("使用者帳號已被註冊過，請直接登入");
                vm.$router.push("/");
              } else {
                tempUserdata.push(vm.userdata); //沒有相同帳號則將此帳號資料存入整包users
                localStorage.setItem("users", JSON.stringify(tempUserdata));
                alert("註冊成功！");
                vm.$emit("userlogin", vm.userdata.username); //傳出username資料到父元件，導向favor畫面
                vm.$router.push("/favor");
              }
            });
          } else { //local沒有users資料時直接整包存入
            tempUserdata = [];
            tempUserdata.push(vm.userdata);
            localStorage.setItem("users", JSON.stringify(tempUserdata));
            alert("註冊成功！");
            vm.$emit("userlogin", vm.userdata.username); //傳出username資料到父元件，導向favor畫面
            vm.$router.push("/favor");
          }
        } else {
          return;
        }
      });
    }
  }
};
</script>