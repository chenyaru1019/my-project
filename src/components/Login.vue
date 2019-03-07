<template>
  <el-form ref="loginForm" :model="user" :rules="rules" label-position="left">
    <h3>管理员登录</h3>
    <el-form-item label="用户名" prop="name">
      <el-input type="text" v-model="user.name" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="text" v-model="user.password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :loading="loading" @click="handleLogin">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import {login} from '../api/app_user'
export default {
  data () {
    return {
      loading: false,
      user: {
        name: '',
        password: ''
      },
      // 检验
      rules: {
        name: [
          { required: true, message: '请输入登录名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 提交表单
    handleLogin () {
      var _this = this
      //  校验用户是否输入&&输入是否符合规范
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          let loginParams = {username: this.user.name, pwd: this.user.password};
          login(loginParams).then((res)=>{
            this.loading = true
            localStorage.setItem('userInfo', JSON.stringify(res))
            _this.$router.push({path: '/'})
          }).catch((error) => {
              console.log(error)
          })
          // this.loading = true;
          // let loginParams = {username: this.user.name, psw: this.user.password}
          if (this.user.name == 'admin' && this.user.password == '123456') {
            _this.$router.push({path: '/'})
          } else {
            _this.$message.error({showClose: true, message: '登录失败', duration: 2000})
          }
        }
      })
    }
  },
  components: {}
}
</script>
<style lang="scss">
$bgc: #ffffff;
body {
  background: $bgc
}
</style>

