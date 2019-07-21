<template>
  <div>
    <el-input
      placeholder="请输入内容"
      v-model="input"
      clearable>
    </el-input>
    <el-row>
      <el-button type="primary">搜索</el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "User",
    data() {
      return {
        input: ''
      }
    }
  }
</script>

<style scoped>

</style>
