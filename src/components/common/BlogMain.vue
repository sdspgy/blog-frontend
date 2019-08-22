<template>
  <div class="blogMain">
    <div class="loveLetterAll">

      <div class="img">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in imgs" :key="">
            <img :src="item.img" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="loveLetter" v-for="item,index in loveLetterList">
        <div class="letterImg">
          <img src="../../assets/img/img.jpg" alt="">
        </div>
        <div class="letterText">
          <el-divider content-position="left">知秋</el-divider>
        </div>
        <div class="letterCharm">
          <p><i class="el-icon-timer"></i>&nbsp;2019-08-19</p>
          <p><i class="el-icon-view"></i>&nbsp;999</p>
          <p><i style="font-size: 25px;padding-top: 8px" class="el-icon-star-on" @click="praise(index)"></i>&nbsp;555
          </p>
          <el-button type="primary" mini plain round>阅读详情</el-button>
        </div>
      </div>

      <div class="paging">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
    </div>

    <div v-show="siderIsShow" class="blogSidebar">
      <div class="childSidebar" v-for="item ,index in childSidebarList">
      </div>
    </div>

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
          }],
        childSidebarList: [1, 2, 3],
        imgs: [{img: "http://img5.imgtn.bdimg.com/it/u=4279997,3658479762&fm=26&gp=0.jpg"},
          {img: "http://img5.imgtn.bdimg.com/it/u=3742433631,3601556094&fm=26&gp=0.jpg"},
          {img: "http://img5.imgtn.bdimg.com/it/u=1393754501,3411007336&fm=26&gp=0.jpg"}],
        currentPage4: 4,
        siderIsShow: true,
      }
    },
    mounted() {
      let width = window.innerWidth;
      if (width < 500) {
        this.siderIsShow = false;
      }
    },
    methods: {
      praise(item) {
        console.log("-----praise" + item);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
    },
  }
</script>

<style scoped>
  .blogMain {
    width: 95%;
    margin: 0 auto;
    position: relative;
  }

  .loveLetterAll {
    position: relative;
    top: 50px;
    width: 70%;
    background-color: #f4f4f4;
    margin: 5px;
  }

  .loveLetter {
    width: 90%;
    height: 200px;
    border: 1px solid #fff;
    border-radius: 10px;
    background-color: #fff;
    margin: 15px auto;
    box-shadow: -5px 0 9px -4px #465056;
  }

  .loveLetter:hover {

  }

  .img {
    width: 90%;
    height: 200px;
    border-radius: 10px;
    margin: 25px auto;
  }

  .img img {
    width: 347px;
    height: 200px;
  }

  .letterImg {
    width: 25%;
    height: 65%;
    margin: 10px 0 0 10px;
    border-radius: 10px;
  }

  .letterImg img {
    width: 100%;
    height: 100%;
  }

  .letterText {
    position: relative;
    top: -66%;
    right: -29%;
    width: 70%;
    height: 160px;
    border: 1px solid #f4f4f4;
  }

  .letterCharm {
    position: relative;
    top: -67%;
    right: -1%;
    width: 98%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .letterCharm p {
    font-size: 8px;
    color: #409EFF;
    line-height: 33px;
  }

  .el-icon-star-on:hover {
    color: #f56c6c;
  }

  .paging {
    width: 90%;
    height: 100px;
    border-radius: 10px;
    background-color: #fff;
    margin: 15px auto;
    position: relative;
  }

  .paging .block {
    width: 75%;
    position: absolute;
    left: 11%;
    top: 33%;
  }

  .blogSidebar {
    position: absolute;
    top: 2%;
    right: 0;
    width: 30%;
  }

  .childSidebar {
    width: 90%;
    height: 300px;
    background-color: #fff;
    margin: 20px auto;
    border-radius: 10px;
  }

</style>
