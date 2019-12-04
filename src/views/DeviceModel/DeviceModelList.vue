<template>
  <div>
    <div class="search-form-style">
      <el-form :inline="true" :model="formSearch" class="demo-form-inline" size="small">
        <el-form-item label="姓名">
          <el-input v-model="formSearch.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="省份">
          <el-select v-model="formSearch.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="formSearch.user" placeholder="地址"></el-input>
        </el-form-item>
        <el-form-item label="邮编">
          <el-input v-model="formSearch.user" placeholder="邮编"></el-input>
        </el-form-item>
        <el-form-item :label="$t('msg.common.date')">
          <el-date-picker
                  v-model="formSearch.date"
                  type="datetime"
                  placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">{{$t('msg.common.search')}}</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="table-list-style">
      <div class="list-operator">
      <el-button disabled type="primary" size="mini">导出</el-button>
    </div>
      <el-table
              :data="tableData"
              border
              style="width: 100%">
        <el-table-column
                fixed
                prop="date"
                label="日期"
                width="150">
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名"
                width="120">
        </el-table-column>
        <el-table-column
                prop="province"
                label="省份"
                width="120">
        </el-table-column>
        <el-table-column
                prop="city"
                label="市区"
                width="120">
        </el-table-column>
        <el-table-column
                prop="address"
                label="地址"
                width="300">
        </el-table-column>
        <el-table-column
                prop="zip"
                label="邮编"
                width="120">
        </el-table-column>
      </el-table>
      <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
      name: 'deviceModelList',
      data() {
        return {
            formSearch: {
                user: '',
                region: '',
                date: ''
            },
            tableData: [],
        }
      },
      methods: {
          onSubmit() {
              this.tableData = [{
                  id: '1',
                  date: '2016-05-02',
                  name: '王小虎',
                  province: '上海',
                  city: '普陀区',
                  address: '上海市普陀区金沙江路 1518 弄',
                  zip: 200333
              },{
                  id: '2',
                  date: '2016-05-31',
                  name: '张三',
                  province: '无锡',
                  city: '新区',
                  address: '国家软件园',
                  zip: 200111
              }];
          },
      }
  }
</script>
