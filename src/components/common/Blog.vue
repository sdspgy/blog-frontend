<template>
  <div class="blog">
    <v-blog-header></v-blog-header>
    <v-blog-main></v-blog-main>
    <v-blog-sidebar></v-blog-sidebar>
  </div>
</template>

<script>
  import vBlogHeader from "./BlogHeader";
  import vBlogMain from "./BlogMain";
  import vBlogSidebar from "./BlogSidebar";

  export default {
    name: "Blog",
    data() {
      return {}
    },
    components: {
      vBlogHeader, vBlogMain, vBlogSidebar
    },
  }
</script>

<style scoped>

</style>
