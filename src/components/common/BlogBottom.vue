<template>
  <div class="blogBottom">
    <div class="copyright">
      <ul>
        <li>渝ICP备18009125号|</li>
        <li>版权所有 © 2018 - 2019|</li>
        <li>以商业目的使用本网站内容需获许可,非商业目的使用授权遵循CC BY-NC 4.0</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BlogBottom",
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .blogBottom {
    width: 99.8%;
    height: 100px;
    background-color: #fff;
    position: relative;
    bottom: -50px;
    border-top: 1px solid #c0c4cc;
  }

  .copyright ul {
    position: absolute;
    top: 75%;
    right: 30%;
    display: flex;
    justify-content: center;
  }

  .copyright ul li {
    font-size: 12px;
    color: #97a8be;
    list-style-type: none;
  }
</style>
