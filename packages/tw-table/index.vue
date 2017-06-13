<template>
  <div class="tw-table">
    <div class="tw-table-list">
      <el-table 
       :data="tableData"
       ref="multipleTable"
       @selection-change="handleSelectionChange">
        <template v-for="(item, index) of model">
          <!-- 表格序列 -->
          <el-table-column
            v-if="item.type === 'index'"
            :label="item.label"
            :type="item.type"
            :width="item.width"
            :key="index">
          </el-table-column>
          <!-- 多选表格 -->
          <el-table-column
            v-else-if="item.type === 'checkbox'"
            :label="item.label"
            :type="item.type"
            :width="item.width"
            :key="index">
          </el-table-column>
          <!-- 自定义模板表格列 -->
          <el-table-column
            v-else-if="item.template"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
            :key="index">
            <template scope="scope">
              <slot :name="item.prop" :row="scope.row" :$index="scope.$index"></slot>
            </template>
          </el-table-column>
          <!-- 原生element-ui列 -->
          <el-table-column
            v-else
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
            :key="index">
          </el-table-column>
        </template>
      </el-table>
    </div>
    <!-- 表格分页 -->
    <div class="tw-table-page">
      <el-pagination
       @current-change="pageChanged"
       :current-page="page.curPage"
       :page-size="page.pageRows"
       layout="total, prev, pager, next"
       :total="page.totals">
     </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TwTable',
  props: {
    // 'datas', 'filter'
    url: { type: String, default: '' },
    /**
     * @param {Array} model - 表格模型
     * @param {String} model.label - 列头标题
     * @param {String} model.prop - 列头字段名，对应的tableData中的key
     * @param {String} model.template - 自定义列模板名称，对应slot的name
     * @param {String} model.type - 列类型 可选值 index, checkbox
     * @param {Boolean} model.hidden - 列是否隐藏
     */
    model: { type: Array, required: true }
  },
  data () {
    return {
      tableData: [],
      page: { curPage: 1, pageRows: this.$PAGE_ROWS, pages: 0, totals: 0 }
    }
  },
  methods: {
    pageChanged (val) {
      let index = val
      if (Number(val) === 0) { index = 1 }
      this.page.curPage = index
      this.getTableList()
    },
    getTableList (page) {
      if (page !== undefined) this.page.curPage = page
      this.$post(this.listUrl, {
        ...this.page,
        ...this.filter
      }).then(res => {
        if (res.status === this.$SUCCESS) {
          this.tableData = res.data
          this.page = {
            totals: res.totals,
            curPage: res.curPage,
            pages: res.pages,
            pageRows: this.$PAGE_ROWS
          }
        }
      })
    },
    // 当type为selection时，出发选择事件
    handleSelectionChange (val) {
      this.$emit('multipleSelect', val)
    }
  },
  // 过滤
  watch: {
    filter: {
      handler (val, oldVal) {
        this.getTableList()
      },
      deep: true
    }
  },
  mounted () {
    this.getTableList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tw-table-page {
    margin-top: 15px;
    text-align: right;
  }
</style>
