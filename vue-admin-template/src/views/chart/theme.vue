<template>
  <el-container>
    <el-main>
      <div v-for="(chart, index) in chartConfigs" :key="index">
        <chart-index key="index" :chart-config="chart" />
      </div>
    </el-main>
  </el-container>
</template>
<script>
import ChartIndex from './components/ChartIndex.vue'
export default {
  components: { ChartIndex },
  data() {
    return {
      themeId: this.$route.matched[1].path.split('/')[2],
      chartConfigs: []
    }
  },
  async mounted() { // 建议页面不写create
    // 模拟请求后台，得到该主题的所有图表配置信息(ChartConfig)
    // this.chartConfigs = getChartConfigByThemeId(this.themeId);
    this.chartConfigs = [{
      id: this.themeId + '01',
      title: '图表1'
    },
    {
      id: this.themeId + '02',
      title: '图表2'
    },
    {
      id: this.themeId + '03',
      title: '图表3'
    }]
  }
}
</script>
