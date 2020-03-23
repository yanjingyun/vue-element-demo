import Vue from 'vue'
import echarts from 'echarts'

const install = function(Vue, options) {
  Vue.prototype.$echarts = echarts

  Vue.prototype.$echarts.$renderChart = function getChart(chartConfigId, data) {
    // 注意，这里的this 指$echarts，不是vue实例
    const chartDom = document.getElementById(chartConfigId)
    let chart = this.getInstanceByDom(chartDom)
    if (chart) {
      chart.dispose()
    }
    chart = this.init(chartDom)
    // 调用
    const circuitInit = import(`@/charts/${chartConfigId.substr(0, 4)}/${chartConfigId}`)
    circuitInit.then(async fn => {
      const { getChartOption } = fn
      const option = await getChartOption(this, data)
      chart.setOption(option, true)
    })
    return chart
  }
}

Vue.use({ install })
