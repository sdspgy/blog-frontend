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

          <el-popover
            placement="right"
            width="400"
            trigger="click">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="职位">
                <el-select v-model="form.region" placeholder="请选择职位">
                  <el-option label="开发人员" value="0"></el-option>
                  <el-option label="测试人员" value="1"></el-option>
                  <el-option label="运用人员" value="2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="活动时间">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                                  style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="状态">
                <el-switch v-model="form.delivery"></el-switch>
              </el-form-item>
              <el-form-item label="角色">
                <el-checkbox-group v-model="form.roles" v-for="val in sysRoles">
                  <el-checkbox name="type" :label="val.roleId">{{val.roleName}}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="性别">
                <el-radio-group v-model="form.resource">
                  <el-radio label="1">男</el-radio>
                  <el-radio label="0">女</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="内容">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="addUser">添加</el-button>
              </el-form-item>
            </el-form>
            <el-button slot="reference" type="primary" size="small">添加</el-button>
          </el-popover>

        </el-row>

        <el-table
          v-loading="loading"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
          :data="tableData"
          style="width: 100%"
          stripe
          height="400"
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
            width="200">
            <template slot-scope="scope" style="float: right">
              <el-button slot="reference" @click="query(scope.row)" type="primary" round plain size="mini"
                         icon="el-icon-check">查看
              </el-button>
              <el-button slot="reference" type="primary" round plain size="mini" icon="el-icon-edit">编辑</el-button>
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
        sysRoles: [],
        form: {
          roles: [2, 3],
          name: '',
          region: '0',
          date1: '',
          date2: '',
          delivery: true,
          resource: "1",
          desc: ''
        },
      }
    },

    mounted() {
      this.init();
      this.initRoles();
    },

    methods: {
      //初始化数据表格
      init() {
        let params = {
          'time': JSON.stringify(this.time),
          'currentPage': this.currentPage,
          'pageSize': this.pageSize,
          'seacher': this.seacher,
          'multipleSelection': JSON.stringify(this.multipleSelection)
        }
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
              type: 'success',
              message: data.msg,
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
      //搜索
      seachers: function () {
        this.init()
      },
      //初始化所有角色
      initRoles() {
        this.$http({
          url: this.$http.adornUrl('admin/sys/role/queryAllRoles'),
          method: 'post',
          date: ({}),
        }).then(({data}) => {
          if (data && data.code === 200) {
            this.sysRoles = data.sysRoles;
          } else {
            this.$message.error(data.msg)
          }
        })
      },
      //添加用户
      addUser: function () {
        let rolesString = "";
        for (let i = 0; i < this.form.roles.length; i++) {
          rolesString += this.form.roles[i] + ",";
        }
        let params = {
          'roleIdList': rolesString,
          'username': this.form.name,
          'status': this.form.region,
        }
        this.$http({
          url: this.$http.adornUrl('admin/sys/user/insertUser'),
          method: 'post',
          data: ({}),
          params: params
        }).then(({data}) => {
          if (data && data.code === 200) {
            this.$message({
              center: true,
              showClose: true,
              duration: 2000,
              type: 'success',
              message: data.msg,
            });
            this.init();
          } else {
            this.$message.error(data.msg)
          }
        })
      },
      query(row) {
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
