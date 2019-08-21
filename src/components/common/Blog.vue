<template>
  <div class="blog">
    <v-blog-header></v-blog-header>
    <v-blog-main></v-blog-main>
    <v-blog-sidebar></v-blog-sidebar>
    <v-blog-bottom></v-blog-bottom>
  </div>
</template>

<script>
  import vBlogHeader from "./BlogHeader";
  import vBlogMain from "./BlogMain";
  import vBlogSidebar from "./BlogSidebar";
  import vBlogBottom from  "./BlogBottom"
  export default {
    name: "Blog",
    data() {
      return {}
    },
    components: {
      vBlogHeader, vBlogMain, vBlogSidebar, vBlogBottom,
    },
  }
</script>

<style scoped>
.blog{
  height: 100%;
  background-color: #f4f4f4;
  overflow-y: auto;
}
</style>
