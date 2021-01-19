<template>
  <div class="login">
    <div class="login-form">
      <div class="title">
        登录
      </div>
      <div class="form-item">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </div>
      <div class="form-item">
        <el-input v-model="form.password" placeholder="请输入密码" type="password"></el-input>
      </div>
      <div class="foot">
        <el-button type="primary" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: '12',//手机号
        password: '123',//密码
      }
    }
  },
  
  methods: {
    //登录
    login() {
      console.log(this.form)
    //   this.$toast("没有更多了!!!>_",{duration:3000,type:'success'})
      let params = this.form
      // this.$store.dispatch('user/Login',this.form).then(res => {
      //   if (res) {
      //     this.$message.success('登录成功！')
      //     this.$router.push('/')
      //   }
      // })
      Request({
        methods:'POST',
        url:'../',
        data:params,

      }).then(res=>{
        console.log(res)
      })

    },
  }
}
</script>
<style lang="less">
  .login {
    min-height: 100%;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #424969;
    background-size: cover;
    background-position: 40%;
    background-repeat: no-repeat;
    font-size: 12px;
  }
  .login-form {
    margin: 100px auto;
    padding: 15px 30px;
    border-radius: 8px;
    background-color: #fff;
  }
  .title {
    padding: 20px 0 40px 0;
    font-size: 16px;
    position: relative;
  }
  .title::before {
    content: "";
    position: absolute;
    top: 40px;
    left: 0;
    width: 33px;
    height: 4px;
    background-color: #424969;
  }
  .form-item {
    margin-bottom: 15px;
    font-size: 14px;
  }
  .form-item i {
    font-size: 14px;
  }
  .forget {
    font-size: 11px;
    color: #999;
    text-align: right;
    cursor: pointer;
  }
  .foot .el-button {
    margin-top: 20px;
    width: 100%;
    height: 40px;
    margin-bottom: 15px;
  }
  .foot .register {
    font-size: 11px;
    text-align: center;
    color: #999;
  }
  .foot .register span {
    color: #c1008d;
    cursor: pointer;
  }
  .back {
    text-align: center;
    padding: 20px 0;
  }
  .back .el-button {
    border-radius: 20px;
    color: #c1008d;
    border-color: #c1008d;
  }
  .el-input {
    width: 280px;
  }
</style>