<template>
  <div class="app-container">
    <div>
      <button @click="exportExcel('tableData1', '导出结果1')">点击导出1</button>
      <el-table
        id="tableData1"
        :data="tableData1"
        style="width: 100%"
      >
        <el-table-column
          prop="date"
          label="日期"
          width="180"
        />
        <el-table-column
          prop="name"
          label="姓名"
          width="180"
        />
        <el-table-column
          prop="address"
          label="地址"
        />
      </el-table>
    </div>
    <div>
      <button @click="exportExcel('testTable', '导出结果2')">点击导出2</button>
      <el-table
        id="testTable"
        border
        :data="statThemeResult.reportBodyList"
        :span-method="reportBodyListSpan"
        sum-text="合计"
        :show-summary="statThemeResult.showSummary"
        highlight-current-row
      >
        <el-table-column v-for="(reportHeader, index) of statThemeResult.reportHeaderList" :key="index" :label="reportHeader.label" :prop="reportHeader.prop" :fixed="reportHeader.fixed" align="center">
          <el-table-column v-for="(childReportHeader, childIndex) of reportHeader.children" :key="childIndex" :label="childReportHeader.label" :prop="childReportHeader.prop" align="center" />
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
// 引入导出excel表格依赖
// XLSX官网：https://www.javascriptcn.com/read-32526.html
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export default {
  data() {
    return {
      tableData1: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      statThemeResult: {
        'reportHeaderList': [{
          'prop': 'XB',
          'label': '性别',
          'fixed': 'left',
          'children': []
        }, {
          'prop': 'ZZMM',
          'label': '政治面貌',
          'fixed': 'left',
          'children': []
        }, {
          'prop': 'WHCD',
          'label': '文化程度',
          'children': [{
            'prop': 'WHCD__10',
            'label': '研究生',
            'children': []
          }, {
            'prop': 'WHCD__17',
            'label': '研究生班',
            'children': []
          }, {
            'prop': 'WHCD__20',
            'label': '大学本科',
            'children': []
          }, {
            'prop': 'WHCD__30',
            'label': '大学专科',
            'children': []
          }]
        }],
        'reportBodyList': [{
          'XB': '男',
          'ZZMM': '共青团员',
          'WHCD__10': 1,
          'WHCD__17': 0,
          'WHCD__20': 4,
          'WHCD__30': 3
        }, {
          'XB': '男',
          'ZZMM': '中共党员',
          'WHCD__10': 11,
          'WHCD__17': 1,
          'WHCD__20': 76,
          'WHCD__30': 33
        }, {
          'XB': '女',
          'ZZMM': '共青团员',
          'WHCD__10': 0,
          'WHCD__17': 0,
          'WHCD__20': 8,
          'WHCD__30': 2
        }, {
          'XB': '女',
          'ZZMM': '中共党员',
          'WHCD__10': 5,
          'WHCD__17': 9,
          'WHCD__20': 79,
          'WHCD__30': 20
        }],
        'reportRowSpanMap': {
          '0': 2,
          '2': 2
        },
        'showSummary': true
      }
    }
  },
  methods: {
    exportExcel(tableId, excelName) {
      const tableDiv = document.querySelector('#' + tableId).cloneNode(true)
      const tableFixed = tableDiv.querySelector('.el-table__fixed')
      if (tableFixed) {
        tableDiv.removeChild(tableFixed)
      }
      const footerTable = tableDiv.querySelector('.el-table__footer-wrapper')
      if (footerTable) {
        footerTable.querySelectorAll('td').forEach(e => e.setAttribute('rowspan', '1'))
      }
      var tempTableDiv = document.createElement('div')
      tempTableDiv.appendChild(tableDiv)

      var wb = XLSX.utils.table_to_book(tempTableDiv)
      var wbout = XLSX.write(wb, { type: 'array' })
      FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), excelName + '.xlsx')
      tempTableDiv.remove()
    },
    reportBodyListSpan({ row, column, rowIndex, columnIndex }) { // 行合并
      // group是两个字段，第一列才需要设置span合并行
      if (columnIndex === 0) { // 第一列
        if (Object.keys(this.statThemeResult.reportRowSpanMap).length === 0) {
          return
        }
        const rowspan = this.statThemeResult.reportRowSpanMap[rowIndex]
        if (rowspan) { // 行重复中第一个位置
          return {
            rowspan: rowspan, // N个重复的
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>
