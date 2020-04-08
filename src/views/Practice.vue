<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="form-group w-100">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            v-model="email"
            v-validate.continues="'required|email'"
            name="email"
            :class="{'is-invalid':errors.has('email'),'is-valid':!errors.has('email') && email!==''}"
            placeholder="請輸入email信箱"
          />
          <span v-if="errors.has('email')">此處顯示email的collect資訊：{{errors.collect('email')}}</span>
          <ul>
            <li v-for="error in errors.collect('email')" :key="error">{{ error }}</li>
          </ul>
          <span v-if="errors.has('email')">此處顯示email的first資訊：{{errors.first('email')}}</span>
          <br />

          <br />
          <input
            type="text"
            class="form-control"
            name="username"
            v-validate="'required|alpha|min:6'"
            placeholder="請輸入使用者名稱"
            data-vv-as="使用者名稱"
          />
          <span v-if="errors.has('username')">此處顯示username的first資訊：{{errors.first('username')}}</span>
          <br />
          <span
            v-for="userros in errors.collect('username')"
            :key="userros"
          >此處顯示username的collect資訊：{{userros}}</span>
          <br />
          <input
            type="password"
            class="form-control"
            name="password"
            v-validate="'required|alpha|min:6'"
            placeholder="請輸入使用者密碼"
          />
          <span v-if="errors.has('password')">此處顯示password的first資訊：{{errors.first('password')}}</span>
          <br />
          <span
            v-for="pserros in errors.collect('password')"
            :key="pserros"
          >此處顯示password的collect資訊：{{pserros}}</span>
          <br />
          <span>
            此處顯示all資訊：
            <br />
            {{errors.all()}}
          </span>
          <br />
          <span>
            此處顯示any資訊：
            <br />
            {{errors.any()}}
          </span>
          <br />
          <!-- <h3>以下為官方範例針對erros.collect()，透過continues，不指向field進行迴圈渲染取得所有錯誤資訊</h3>
          <input type="text" name="first" v-validate.continues="'required|alpha|min:5'" />
          <input type="text" name="second" v-validate.continues="'required|alpha|min:5'" />
          <ul v-for="group in errors.collect()" :key="group">
            <li v-for="gerror in group" :key="gerror">{{ gerror }}</li>
          </ul>-->

          <!-- <input
            v-validate="'date_format:dd/MM/yyyy|after:afterTarget'"
            name="after_field"
            type="text"
          />
          <span v-if="errors.has('after_field')">{{errors.first('after_field')}}</span>
          <br />
          <input name="after_field_target" ref type="text" />
          <span v-if="errors.has('after_field_target')">{{errors.first('after_field_target')}}</span>
          <br />
          <input v-validate="{ is: confirmation }" type="text" name="password" />
          <input v-model="confirmation" type="text" name="password_confirmation" />
          <input
            v-validate="{ required: true, regex: /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,9}$/ }"
            name="regex"
          />
          <input
            v-validate="{url: {require_protocol: false }}"
            data-vv-as="網址"
            name="url_field"
            type="text"
          />-->
          <input
            type="text"
            class="form-control"
            v-validate="'required|username'"
            name="username"
            data-vv-as="使用者名稱"
            :class="{'is-invalid':errors.has('username'),'is-valid':!errors.has('username')}"
            placeholder="請輸入使用者名稱"
          />
          <input
            type="password"
            class="form-control"
            v-validate="'required|password'"
            name="password"
            data-vv-as="密碼"
            placeholder="請輸入密碼"
            ref="password1"
          />
          <input
            type="password"
            class="form-control"
            v-validate="'required|password|confirmed:password1'"
            name="password_twice"
            data-vv-as="第二次密碼"
            placeholder="請再次輸入密碼"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: ""
  })
};
</script>

<style lang="scss">
// 導入bootstrap樣式套件
@import "~bootstrap/scss/bootstrap";
</style>