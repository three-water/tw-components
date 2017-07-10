<template>
  <div>
    <!--<div class="vue-select-container">
      <label>医院</label>
      <el-select v-model="filter.hospitalId" placeholder="请选择">
        <el-option v-for="item in hospital" :label="item.hospitalName" :value="item.hospitalId" :key="item.hospitalId"></el-option>
      </el-select>
    </div>-->
    <div class="table-container">
      <h3>data-table</h3>
      <tw-table :height="10" :url="url" :model="columns" v-on:multipleSelect="selection" :filter="filter">
        <template slot="userRealname" scope="scope">
          <div >自定义模板渲染:</div>
          <p>index : {{scope.$index}}</p>
          <p>{{scope.row.userRealname}}</p>
          <button @click="handleClick(scope)">button</button>
        </template>
        <template slot="userName" scope="scope">
          <div >自定义模板渲染2:</div>
          <p>{{scope.row.userRealname}}</p>
          <button @click="handleClick(scope)">button</button>
        </template>
      </tw-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filter: {
        hospitalId: ''
      },
      hospital: [],
      url: '../mock/table-date.json',
      columns: [
        {
          label: ' ',
          type: 'index',
          width: '60'
        },
        {
          label: '姓名',
          prop: 'userRealname',
          template: true
        },
        {
          label: '手机号',
          prop: 'userName',
          width: '150',
          template: true
        },
        {
          label: '医院',
          prop: 'hospital.hospitalName'
        },
        {
          label: '科室',
          prop: 'department.departmentName'
        },
        {
          label: '职称',
          prop: 'title.titleName'
        }
      ]
    }
  },
  methods: {
    // getHospitalList () {
    //   this.$post('hospital/list').then(res => {
    //     if (res.status === 1) {
    //       this.hospital = res.data
    //     }
    //   })
    // },
    selection (val) {
      console.log(val)
    },
    handleClick (scope) {
      console.log(scope)
    }
  },
  mounted () {
    console.log(222)
    // this.getHospitalList()
  }
}
</script>

<style scoped>
.table-container {
  margin: 0 40px;
}
</style>
