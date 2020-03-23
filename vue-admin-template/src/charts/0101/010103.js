export function getChartOption($echarts, data) {
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    dataset: {
      dimensions: [{
        name: 'ITEM_NAME',
        displayName: '行政区划'
      },
      {
        name: 'C1',
        displayName: '育龄妇女'
      },
      {
        name: 'C3',
        displayName: '非育龄妇女'
      },
      {
        name: 'C4',
        displayName: '育龄妇女占比'
      }
      ],
      // source: data
      source: [
        { 'ITEM_NAME': '广州市本级', 'C1': 5, 'C2': 11, 'C3': 6, 'C4': 30 },
        { 'ITEM_NAME': '荔湾区', 'C1': 6, 'C2': 20, 'C3': 12, 'C4': 70 },
        { 'ITEM_NAME': '越秀区', 'C1': 2, 'C2': 12, 'C3': 8, 'C4': 50 }
      ]
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        interval: 0,
        rotate: -25
      }
    },
    yAxis: [{
      type: 'value',
      name: '单位(人)'
    }, {
      type: 'value',
      name: '单位(%)'
    }],
    series: [
      { type: 'bar' },
      { type: 'bar' },
      {
        type: 'line',
        yAxisIndex: 1
      }
    ],
    color: ['#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#ff6347', '#6495ed', '#ba55d3', '#32cd32']
  }
  return option
}
