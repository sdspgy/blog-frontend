<template>
  <div class="blog">
    <v-blog-header></v-blog-header>
    <v-blog-main></v-blog-main>
    <v-blog-bottom></v-blog-bottom>
  </div>
</template>

<script>
  import vBlogHeader from "./BlogHeader";
  import vBlogMain from "./BlogMain";
  import vBlogBottom from "./BlogBottom";
  import {love} from "./love"

  export default {
    name: "Blog",
    data() {
      return {}
    },
    components: {
      vBlogHeader, vBlogMain, vBlogBottom,
    },
    mounted() {
      love();
    },

  }
</script>

<style scoped>
  .blog {
    height: 100%;
    background-color: #f4f4f4;
    overflow-y: auto;
  }

  .blog::-webkit-scrollbar { /*滚动条整体样式*/
    width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 6px;
  }

  .blog::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #f99393;
  }

  .blog::-webkit-scrollbar-track { /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background: #fff;
  }
</style>
