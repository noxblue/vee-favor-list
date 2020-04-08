<template>
  <div>
    <!-- 註冊後、登入後將username以$emit傳出，觸發getLoginData取得使用者資料。並將該資料傳入components使用 -->
    <router-view @userlogin="getLoginData" @userlogout="userLogout" :loginuser="loginUser"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginUser: {
        //取得使用者資料後存入
        username: "",
        nickname: ""
      }
    };
  },
  methods: {
    getLoginData(userdata) {
      const vm = this;
      let tempUserdata = JSON.parse(localStorage.getItem("users")); //暫存整包使用者資料
      if (tempUserdata) {
        tempUserdata.forEach(item => {
          if (item.username == userdata) {
            //比對username相同取得該筆資料的username、nickname，存入loginUser
            vm.loginUser.username = item.username;
            vm.loginUser.nickname = item.nickname;
          }
        });
      }
    },
    userLogout() {
      const vm = this;
      vm.loginUser = { username: "", nickname: "" };
      this.errors.clear();
      this.$validator.reset();
    }
  }
};
</script>