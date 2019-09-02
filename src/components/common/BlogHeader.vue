<template>
  <div class="blogHeader">
    <div class="img">
      <img :src="url" alt="">
    </div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" active-text-color="#409EFF" text-color="" @select="handleSelect">
      <el-submenu index="1">
        <template slot="title">主页</template>
        <el-menu-item index="1-1">指南</el-menu-item>
        <el-menu-item index="1-2">资源</el-menu-item>
        <el-submenu index="1-3">
          <template slot="title">文档</template>
          <el-menu-item index="1-3-1">word</el-menu-item>
          <el-menu-item index="1-3-2">video</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item style="float: right" index="9"><a href="" target="_blank">后台管理</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import img from '../../assets/img/img.jpg';

  export default {
    name: "BlogHeader",
    data() {
      return {
        activeIndex: '1-1',
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
    left: 1%;
    top: 2px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    z-index: 100;
  }

  .el-menu-demo {
    width: 94%;
    left: 6%;
  }
</style>
