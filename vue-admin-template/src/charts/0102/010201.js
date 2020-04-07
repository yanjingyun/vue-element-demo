export function getChartOption($echarts, data) {
  data = [[{ ITEM_NAME: '广州市本级', C1: 6027, C2: 16, C3: 495, C4: 188, C5: 178, C6: 12, C7: 95 }, { ITEM_NAME: '荔湾区', C1: 284, C2: 5, C3: 187, C4: 27, C5: 19, C6: 2, C7: 6 }, { ITEM_NAME: '越秀区', C1: 557, C2: 14, C3: 297, C4: 95, C5: 54, C6: 7, C7: 20 }, { ITEM_NAME: '海珠区', C1: 464, C2: 20, C3: 310, C4: 49, C5: 20, C6: 4, C7: 16 }, { ITEM_NAME: '天河区', C1: 661, C2: 20, C3: 359, C4: 79, C5: 73, C6: 9, C7: 58 }, { ITEM_NAME: '白云区', C1: 556, C2: 19, C3: 414, C4: 35, C5: 18, C6: 2, C7: 26 }, { ITEM_NAME: '黄埔区', C1: 390, C2: 15, C3: 262, C4: 26, C5: 23, C6: 4, C7: 24 }, { ITEM_NAME: '番禺区', C1: 1029, C2: 45, C3: 497, C4: 38, C5: 32, C6: 4, C7: 48 }, { ITEM_NAME: '花都区', C1: 356, C2: 9, C3: 100, C4: 9, C5: 9, C6: 0, C7: 10 }, { ITEM_NAME: '南沙区', C1: 206, C2: 13, C3: 143, C4: 12, C5: 6, C6: 0, C7: 10 }, { ITEM_NAME: '从化区', C1: 271, C2: 5, C3: 107, C4: 11, C5: 1, C6: 0, C7: 32 }, { ITEM_NAME: '增城区', C1: 329, C2: 14, C3: 119, C4: 10, C5: 5, C6: 0, C7: 16 }], [{ ITEM_NAME: '小学占比', C1: 1.75 }, { ITEM_NAME: '大专占比', C1: 5.2 }, { ITEM_NAME: '本科占比', C1: 3.94 }, { ITEM_NAME: '研究生及以上占比', C1: 0.4 }, { ITEM_NAME: '其他占比', C1: 3.24 }, { ITEM_NAME: '初高中/中专/技校占比', C1: 29.56 }]]
  const option = {
    title: {
      text: '学历比构成',
      left: '84%',
      top: '30%',
      textStyle: {
        fontSize: 18
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    dataset: [{
      dimensions: [{
        name: 'ITEM_NAME',
        displayName: '行政区划'
      }, {
        name: 'C2',
        displayName: '小学',
        x_unit: '人'
      }, {
        name: 'C3',
        displayName: '初高中/中专/技校',
        x_unit: '人'
      }, {
        name: 'C4',
        displayName: '大专',
        x_unit: '人'
      }, {
        name: 'C5',
        displayName: '本科',
        x_unit: '人'
      }, {
        name: 'C6',
        displayName: '研究生及以上',
        x_unit: '人'
      }, {
        name: 'C7',
        displayName: '其他',
        x_unit: '人'
      }],
      source: data[0].splice(1, data[0].length)
    }, {
      dimensions: [{
        name: 'ITEM_NAME'
      }, {
        name: 'C1',
        x_unit: '%'
      }],
      source: data[1]
    }],
    grid: [{
      left: 75,
      right: '25%'
    }, {
      left: '75%'
    }],
    xAxis: {
      type: 'category',
      axisLabel: {
        interval: 0,
        rotate: -25
      }
    },
    yAxis: [{
      type: 'value',
      name: '单位(人)',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    }],
    series: [{
      type: 'bar',
      stack: 'WHCD',
      barWidth: '20'
    }, {
      type: 'bar',
      stack: 'WHCD',
      barWidth: '20'
    }, {
      type: 'bar',
      stack: 'WHCD',
      barWidth: '20'
    }, {
      type: 'bar',
      stack: 'WHCD',
      barWidth: '20'
    }, {
      type: 'bar',
      stack: 'WHCD',
      barWidth: '20'
    }, {
      type: 'bar',
      stack: 'WHCD',
      barWidth: '20'
    }, {
      type: 'pie',
      radius: ['23%', '30%'],
      center: ['88%', '50%'],
      datasetIndex: 1,
      color: ['#87cefa', '#ff7f50'],
      label: {
        formatter: function(params) {
          return '{a|' + data[1][0]['C1'] + '}'
        },
        textStyle: {
          fontSize: 18,
          fontWeight: 'bolder'
        },
        position: 'center',
        rich: {
          a: {
            color: '#87cefa',
            fontSize: 18,
            fontWeight: 'bolder'
          },
          b: {
            color: '#ff7f50',
            fontSize: 18,
            fontWeight: 'bolder'
          }
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {
          var values = params.data
          var name = params.name
          var dimensions = option.dataset[1].dimensions
          var formatter = name + ' : ' + values['C1'] + dimensions[1]['x_unit']
          return formatter
        }
      }
    }],
    color: ['#87cefa', '#ff7f50', '#da70d6']
  }
  return option
}
