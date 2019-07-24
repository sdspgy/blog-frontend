<template>
  <div>
    <transition name="el-zoom-in-top">
      <div v-show="show">
        <el-date-picker
          v-model="time"
          type="datetimerange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['12:00:00']">
        </el-date-picker>

        <el-input
          style="width: 60%"
          placeholder="请输入内容"
          v-model="seacher"
          clearable>
        </el-input>

        <el-row style="float: right">
          <el-button type="primary" @click="seachers">搜索</el-button>
        </el-row>

        <el-table
          v-loading="loading"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
          :data="tableData"
          style="width: 100%"
          stripe
          height="150"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55"
            fixed="left">
          </el-table-column>
          <el-table-column
            prop="username"
            label="姓名"
            width="80"
            sortable
            :filters="[{text: 'admin', value: 'admin'}, {text: 'pgys', value: 'pgys'}]"
            :filter-method="filterHandler">
          </el-table-column>
          <el-table-column
            prop="email"
            label="邮箱"
            width="80"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="roleList"
            label="角色"
            width="150"
            :formatter="formatRoles">
          </el-table-column>
          <el-table-column
            prop="createTime"
            label="创建时间">
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态"
            width="80"
            :formatter="formatStatus">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalNum">
        </el-pagination>
      </div>
    </transition>
  </div>
</template>

<script>
  import {page} from '../common/const'

  export default {
    name: "User",
    data() {
      return {
        show: true,
        time: [],
        seacher: '',
        loading: true,
        multipleSelection: [],
        tableData: [],
        currentPage: page.currentPage,
        totalNum: '',
        pageSize: page.pageSize,
      }
    },

    mounted() {
      this.init();
    },

    methods: {
      init() {
        let params = {
          'time': JSON.stringify(this.time),
          'currentPage': this.currentPage,
          'pageSize': this.pageSize,
          'seacher': this.seacher,
          'multipleSelection': JSON.stringify(this.multipleSelection)
        }
        debugger
        this.$http({
          url: this.$http.adornUrl('admin/sys/user/allUser'),
          method: 'post',
          date: ({}),
          params: params
        }).then(({data}) => {
          if (data && data.code === 200) {
            this.$message({
              center: true,
              showClose: true,
              duration: 2000,
              type: data.msg,
              message: 'success',
            })
            this.loading = false;
            this.tableData = data.sysUsers;
            this.totalNum = data.sysUsers.length;
          } else {
            this.$message({
              center: true,
              showClose: true,
              duration: 2000,
              type: 'warning',
              message: data.msg,
            })
          }
        })
      },
      seachers: function () {
        this.init()
      },
      handleClick(row) {
        console.log(row);
      },
      handleSelectionChange(val) {
        console.log(val);
        val.forEach(info => {
          if (this.multipleSelection.indexOf(info.userId) == -1) {
            this.multipleSelection.push(info.userId)
          }
        })
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize = val;
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val;
      },
      formatStatus: function (row) {
        return row.status == 1 ? "正常" : "失效";
      },
      formatRoles(row) {
        let role = '';
        row.roleList.forEach(info => {
          role += info.roleName.toString() + " ";
        });
        return role;
      }
    },
  }
</script>

<style scoped>

</style>
