<template>
  <div class="loginTable">
    <p class="login-title">Login</p>
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" status-icon>
      <el-form-item prop="userName">
        <el-input v-model="dataForm.userName" placeholder="帐号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="dataForm.password" type="password" placeholder="密码" show-password></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" size="mini" icon="el-icon-loading" round @click="login">登录</el-button>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        dataForm: {
          userName: 'admin',
          password: '123456',
        },
        dataRule: {
          userName: [
            {required: true, message: '帐号不能为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ],
        },
      }
    },
    methods: {
      dataFormSubmit() {
        extracted.call(this);
      },
      login() {
        extracted.call(this);
      },
    },
  }

  function extracted() {
    this.$refs['dataForm'].validate((valid) => {
      if (valid) {
        this.$http({
          url: this.$http.adornUrl('admin/sys/login'),
          method: 'post',
          data: ({
            'username': this.dataForm.userName,
            'password': this.dataForm.password,
          })
        }).then(({data}) => {
          if (data && data.code === 200) {
            this.$message.success(data.msg)
            this.$cookie.set('token', data.token)
            this.$router.replace({name: 'home'})
          } else {
            this.$message.error(data.msg)
          }
        })
      }
    })
  }
</script>

<style scoped>
  .loginTable {
    width: 30%;
    height: 300px;
    margin: 100px auto;
    font-family: "Times New Roman", Georgia, Serif;
    font-size: 12px;
    text-align: center;
  }
</style>
