<template>
  <div class="blogMain">

    <div class="loveLetterAll">

      <div class="img">
        <el-carousel :interval="4000" type="card" height="320px">
          <el-carousel-item v-for="item in imgs" :key="">
            <img :src="item.img" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>

      <el-row class="write">
        <el-button type="primary" :loading="false" size="medium" @click="dialogFormVisible = true">留下你的故事</el-button>
      </el-row>

      <div class="loveLetter" v-for="item,index in loveLetterList">
        <div class="letterImg">
          <img v-show="false" src="../../assets/img/img.jpg" alt="">
        </div>
        <div class="letterText">
          <el-divider content-position="left">知秋</el-divider>
          <ul>
            <li v-for="data in item.loveLetters">{{data}}</li>
          </ul>
        </div>
        <div class="letterCharm">
          <p><i class="el-icon-timer"></i>&nbsp;2019-08-19</p>
          <p><i class="el-icon-view"></i>&nbsp;999</p>
          <p><i style="font-size: 25px;padding-top: 8px" class="el-icon-star-on" @click="praise(index)"></i>&nbsp;555
          </p>
          <el-button type="primary" mini plain round
                     @click="open">阅读详情
          </el-button>
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
      <div class="childSidebar">
        <div class="block">
          <el-timeline>
            <el-timeline-item timestamp="2019/8/1" placement="top" :color="timeColor">
              <el-card>
                <h4>#赤伶#</h4>
                <p>Beauty is being the best possible version of yourself on the inside and out...</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2019/7/1" placement="top">
              <el-card>
                <h4>#无期#</h4>
                <p>Life had a lot of things is futile, but we still want to experience...</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2019/6/1" placement="top">
              <el-card>
                <h4>#步戏#</h4>
                <p>Some things, you hide it in my heart, perhaps better, so a long time, becomes the story...</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </div>

    <el-dialog title="Letter" :visible.sync="dialogFormVisible">
      <el-alert
        title="💌格式提示：XXX；XXX；XXX (使用中文逗号分割)"
        :closable="false"
        type="success">
      </el-alert>
      <el-form :model="form">
        <el-form-item label="三行情书" :label-width="formLabelWidth">
          <el-input v-model="form.name" placeholder="" autocomplete="off" clearable></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

  </div>

</template>

<script>

  export default {
    name: "BlogMain",
    data() {
      return {
        loveLetterList: [{
          text: 1,
          loveLetters: ["不遗余力", "不远万里", "认定你"]
        }, {
          text: 2,
          loveLetters: ["不遗余力", "不远万里", "认定你"]
        }, {
          text: 3,
          loveLetters: ["不遗余力", "不远万里", "认定你"]
        }, {
          text: 4,
          loveLetters: ["不遗余力", "不远万里", "认定你"]
        }, {
          text: 5,
          loveLetters: ["不遗余力", "不远万里", "认定你"]
        }, {
          text: 6,
          loveLetters: ["不遗余力", "不远万里", "认定你"]
        }, {
          text: 7,
          loveLetters: ["不遗余力", "不远万里", "认定你"]
        }],
        imgs: [{img: "http://img.juimg.com/tuku/yulantu/110509/9126-11050z6292665.jpg"},
          {img: "http://img5.imgtn.bdimg.com/it/u=3742433631,3601556094&fm=26&gp=0.jpg"},
          {img: "http://img5.imgtn.bdimg.com/it/u=1393754501,3411007336&fm=26&gp=0.jpg"}],
        currentPage4: 1,
        siderIsShow: true,
        timeColor: "#0bbd87",
        dialogFormVisible: false,
        form: {
          name: '',
        },
        formLabelWidth: '120px',
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
      dialogFormVisible() {
        console.log("------writeLetter");
      },
      open() {
        this.$notify({
          title: '警告',
          message: '该功能待开发',
          type: 'warning'
        });
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
    position: relative;
  }

  .loveLetter ul {
    position: absolute;
    left: 15%;
  }

  .loveLetter ul li {
    list-style-type: none;
    font-family: 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif;
    font-size: 12px;
    margin-top: 8px;
  }

  .loveLetter:hover {

  }

  .img {
    width: 90%;
    height: 200px;
    border-radius: 10px;
    margin: 25px auto;
    margin-bottom: 150px;
  }

  .img img {
    width: 600px;
    height: 310px;
  }

  .write {
    position: relative;
    right: -44%;
  }

  .letterImg {
    width: 17%;
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
    height: 800px;
    background-color: #fff;
    margin: 20px auto;
    border-radius: 10px;
  }

</style>
