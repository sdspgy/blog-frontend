<template>
  <div class="blogSidebar">
    <div class="childSidebar" v-for="item ,index in childSidebarList">
      {{index}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "BlogSidebar",
    data() {
      return {
        childSidebarList: [1, 2, 3]
      }
    }
  }
</script>

<style scoped>
  .blogSidebar {
    position: relative;
    left: 75%;
    bottom: 282%;
    width: 20%;
    /*background-color: #97a8be;*/
  }

  .childSidebar {
    width: 90%;
    height: 300px;
    background-color: #fff;
    margin: 20px auto;
    border-radius: 10px;
  }
</style>
