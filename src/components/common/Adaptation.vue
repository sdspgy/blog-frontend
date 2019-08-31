<template>
  <el-row>
    <el-col :xs="0" :sm="24" :md="24" :lg="24" :xl="24">
      <!--      <div class="grid-content bg-purple"></div>-->
      <slot></slot>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "Adaptation"
  }
</script>

<style scoped>

  .bg-purple {
    background: #d3dce6;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
