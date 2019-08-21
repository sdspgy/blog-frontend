<template>
  <div class="blogMain">
    <div class="loveLetterAll">
      <div class="img">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in img" :key="item">
            <img :src="item.img">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="loveLetter" v-for="item,index in loveLetterList">
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
    <div class="blogSidebar">
      <div class="childSidebar" v-for="item ,index in childSidebarList">
      </div>
    </div>
  </div>
</template>

<script>
  import img from '../../assets/img/login-bg.jpg';

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
        img: [{img: img}, {img: img}, {img, img}],
        currentPage4: 4
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
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
