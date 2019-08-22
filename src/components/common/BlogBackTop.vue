<template>
  <div v-show="btnFlag" :class="{backTop:isShow}"
       @click="backTopClick"
       @mouseenter="enter($event)"
       @mouseleave="leave($event)">
    <ul>
      <li>邮箱</li>
      <li>573691723@qq.com</li>
      <li>电话</li>
      <li>13102389765</li>
    </ul>
    <div class="wx"><img :src="url" alt=""></div>
    <div class="title">在线交流</div>
  </div>
</template>

<script>
  import img from '../../assets/img/img.jpg';

  export default {
    name: "BlogBackTop",
    data() {
      return {
        btnFlag: true,
        isShow: true,
        url: img,
      }
    },
    mounted() {
      window.addEventListener('scroll', this.scrollToTop)
      let width = window.innerWidth;
      let height = window.innerHeight;
      if (width < 500) {
        this.btnFlag = false;
      }
    },
    destroyed() {
      window.removeEventListener('scroll', this.scrollToTop)
    },
    created() {
      this.scrollToTop();
    },
    methods: {
      backTopClick() {
        console.log("-------")
      },

      scrollToTop() {
        console.log("-------")
      },
      enter() {
        console.log("enter")
      },
      leave() {
        console.log("leave")
      }

    },


  }

</script>

<style scoped>
  .backTop {
    position: fixed;
    left: -116px;
    bottom: 20%;
    width: 150px;
    height: 150px;
    background-color: #f4f4f4;
    transition: all 2s 0.5s ease-out;
  }

  .backTop:hover {
    transform: translateX(100px);
    transition: all 2s 0.5s ease-out;
  }

  /*alternate infinite*/
  /*animation: backTop 2s 0.2s ease-out forwards;*/
  @keyframes backTop {
    from {
      left: -5%;
    }
    to {
      left: 0;
    }
  }

  img {
    width: 80px;
    height: 80px;
  }

  .wx {
    margin: -1% 18%;
  }

  .title {
    background-color: #f76438;
    width: 23%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    font-family: "Times New Roman", Georgia, Serif;
    font-size: 18px;
    color: #fff;
    text-align: center;
    writing-mode: tb-rl;
    padding-right: 10%;
  }

  ul li {
    font-family: "Times New Roman", Georgia, Serif;
    font-size: 12px;
    color: salmon;
    text-align: center;
    line-height: 150%;
    margin-right: 17px;
    list-style: none;
  }
</style>
