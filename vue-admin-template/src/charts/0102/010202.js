export function getChartOption($echarts, data) {
  const option = {// 简单的 折线图+饼图 展示
    tooltip: {
      trigger: 'axis'
    },
    legend: {},
    grid: [
      { width: '50%', height: '50%' }// 折线图位置控制
    ],
    xAxis: [
      { gridIndex: 0, type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }
    ],
    yAxis: [
      { gridIndex: 0 }
    ],
    series: [
      {
        type: 'line',
        xAxisIndex: 0,
        // yAxisIndex: 0,
        data: [1, 5, 3, 4, 2]
      },
      {
        type: 'pie',
        radius: '30%',
        center: ['80%', '30%'], // 饼图位置控制
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 548, name: '搜索引擎' }
        ],
        label: {
          formatter: function(params) {
            return params.data.name + ':' + params.data.value
          }
        },
        tooltip: {
          trigger: 'item'
        }
      }
    ]
  }
  return option
}
