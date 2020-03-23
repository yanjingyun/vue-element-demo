import echarts from 'echarts'

export async function renderChart(chartConfigId, data) {
  const chartInstance = echarts.init(document.getElementById(chartConfigId))

  const circuitInit = import(`@/charts/${chartConfigId.substr(0, 4)}/${chartConfigId}`)
  circuitInit.then(async fn => {
    const { getChartOption } = fn
    const option = await getChartOption(this, data)
    chartInstance.setOption(option)
  })
  return chartInstance
}
