<template>
  <div class="blogMain">
    <div class="img"></div>
    <div class="loveLetter" v-for="item,index in loveLetterList">
      {{item.text}}
    </div>
    <div class="paging"></div>
  </div>
</template>

<script>
  export default {
    name: "BlogMain",
    data() {
      return {
        loveLetterList: [{
          text: 1
        }, {
          text: 2
        }, {
          text: 3
        }, {
          text: 4
        }, {
          text: 5
        }, {
          text: 6
        }, {
          text: 7
        }
          , {
            text: 8
          }
          , {
            text: 9
          }
          , {
            text: 10
          }]
      }
    },
  }
</script>

<style scoped>
  .blogMain {
    position: relative;
    top: 50px;
    width: 70%;
    background-color: #f4f4f4;
    /*border: 1px solid rebeccapurple;*/
    margin: 5px;
  }

  .loveLetter {
    width: 90%;
    height: 200px;
    border: 1px solid rosybrown;
    border-radius: 10px;
    background-color: #fff;
    margin: 15px auto;
    box-shadow: -5px 0 9px -4px #20a0ff;
  }

  .img {
    width: 90%;
    height: 200px;
    border: 1px solid rosybrown;
    border-radius: 10px;
    background-color: #fff;
    margin: 15px auto;
  }

  .paging{
    width: 90%;
    height: 100px;
    border: 1px solid rosybrown;
    border-radius: 10px;
    background-color: #fff;
    margin: 15px auto;
  }
</style>
