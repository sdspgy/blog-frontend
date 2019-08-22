<template>
  <div class="blogHeader">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <div class="img">
        <img :src="url" alt="">
      </div>
      <el-menu-item index="1"></el-menu-item>
      <el-submenu index="2">
        <template slot="title">主页</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import img from '../../assets/img/img.jpg';

  export default {
    name: "BlogHeader",
    data() {
      return {
        activeIndex: '1',
        url: img
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .blogHeader {
    width: 99.4%;
    height: 60px;
    background-color: #fff;
    position: fixed;
    top: 0;
    z-index: 99;
    padding: 0 auto;
  }

  .img {
    display: inline;
    width: 60px;
    height: 60px;
  }

  .img img {
    position: absolute;
    left: -5px;
    top: 2px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    z-index: 100;
  }

  .el-menu-demo {
    width: 95%;
    left: 2%;
  }
</style>
