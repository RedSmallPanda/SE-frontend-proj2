<template>
  <div>
    <div class="login-wrap" v-show="showLogin">
      <div class = "slogan">问题的答案不只一个</div>
      <div class = "login">请登录</div>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text" placeholder="请输入用户名" v-model="username">
      <input type="password" placeholder="请输入密码" v-model="password">
      <router-link :to="{ path:'/info',name:'Information'}">
      <button >登录</button></router-link>
      <span v-on:click="ToRegister">没有账号？马上注册</span>
    </div>

    <div class="register-wrap" v-show="showRegister">
      <h3>注册</h3>
      <p v-show="showTishi">{{tishi}}</p>
      <input type="text" placeholder="请输入用户名" v-model="newUsername">
      <input type="password" placeholder="请输入密码" v-model="newPassword">
      <button >注册</button>
      <span v-on:click="ToLogin">已有账号？马上登录</span>
    </div>

  </div>
</template>

<style>
  .login-wrap{text-align:center}
  .slogan{text-align:center;color: #888;font-size: 18px; margin:0 auto;margin-top:15px;letter-spacing: 8px}
  .login{text-align:center;color: #41b883;font-size: 17px; margin:0 auto;margin-top:20px;}
  input{display:block; width:250px; height:40px; line-height:40px; margin:0 auto;margin-top:20px; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
  p{color:red;}
  button{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto;margin-top:50px;border-radius:5px; border:none; background-color:#41b883; color:#fff; font-size:16px; margin-bottom:5px;}
  span{cursor:pointer;}
  span:hover{color:#41b883;}
</style>

<script>
  import FooterNav from '@/components/footer.vue'
  export default{
    components: {
      FooterNav
    },
    data(){
      return {
        showLogin: true,
        showRegister: false,
        showTishi: false,
        tishi: '',
        username: '',
        password: '',
        newUsername: '',
        newPassword: '',
        isNowPage: true
      }
    },
    methods: {
        login(){

        },
      ToRegister(){
        this.showRegister = true
        this.showLogin = false
      },
      ToLogin(){
        this.showRegister = false
        this.showLogin = true
      }
    }
  }
</script>
