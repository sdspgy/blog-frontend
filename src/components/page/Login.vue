<template>
  <div>
    <h3 class="login-title">管理员登录</h3>
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" status-icon>
      <el-form-item prop="userName">
        <el-input v-model="dataForm.userName" placeholder="帐号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="dataForm.password" type="password" placeholder="密码"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        dataForm: {
          userName: '',
          password: '',
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
      },
    }
  }
</script>

<style scoped>

</style>
