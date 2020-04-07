export function getChartOption($echarts, data) {
  data = [[{ 'ITEM_CODE': '440100000000000', 'ITEM_NAME': '广州市本级', 'C1': 0, 'C2': 0, 'C3': 0, 'C4': 0 }, { 'ITEM_CODE': '440103000000000', 'ITEM_NAME': '荔湾区', 'C1': 90, 'C2': 211, 'C3': 121, 'C4': 42.65 }, { 'ITEM_CODE': '440104000000000', 'ITEM_NAME': '越秀区', 'C1': 218, 'C2': 455, 'C3': 237, 'C4': 47.91 }, { 'ITEM_CODE': '440105000000000', 'ITEM_NAME': '海珠区', 'C1': 201, 'C2': 447, 'C3': 246, 'C4': 44.97 }, { 'ITEM_CODE': '440106000000000', 'ITEM_NAME': '天河区', 'C1': 233, 'C2': 528, 'C3': 295, 'C4': 44.13 }, { 'ITEM_CODE': '440111000000000', 'ITEM_NAME': '白云区', 'C1': 350, 'C2': 735, 'C3': 385, 'C4': 47.62 }, { 'ITEM_CODE': '440112000000000', 'ITEM_NAME': '黄埔区', 'C1': 147, 'C2': 322, 'C3': 175, 'C4': 45.65 }, { 'ITEM_CODE': '440113000000000', 'ITEM_NAME': '番禺区', 'C1': 176, 'C2': 393, 'C3': 217, 'C4': 44.78 }, { 'ITEM_CODE': '440114000000000', 'ITEM_NAME': '花都区', 'C1': 245, 'C2': 498, 'C3': 253, 'C4': 49.2 }, { 'ITEM_CODE': '440115000000000', 'ITEM_NAME': '南沙区', 'C1': 144, 'C2': 279, 'C3': 135, 'C4': 51.61 }, { 'ITEM_CODE': '440117000000000', 'ITEM_NAME': '从化区', 'C1': 117, 'C2': 284, 'C3': 167, 'C4': 41.2 }, { 'ITEM_CODE': '440118000000000', 'ITEM_NAME': '增城区', 'C1': 237, 'C2': 416, 'C3': 179, 'C4': 56.97 }], [{ 'ITEM_CODE': '4401', 'ITEM_NAME': '广州市', 'C1': 2158, 'C2': 4568, 'C3': 2410, 'C4': 47.24 }]]
  var option = {
    title: [
      { text: (data[1][0].ITEM_NAME + '数据:'),
        textStyle: {
          color: '#000',
          fontWeight: 'bolder'
        },
        left: '86%',
        top: '34%'
      }, {
        text: '占位',
        backgroundColor: '#B6A2DE',
        borderRadius: [5, 5, 5, 5],
        textStyle: {
          color: '#B6A2DE'
        },
        left: '87%',
        top: '40%'
      }, {
        text: (data[1][0].C1 + '(人)'),
        textStyle: {
          color: '#B6A2DE',
          fontWeight: 'bolder'
        },
        left: '90%',
        top: '40%'
      },
      {
        text: '占位',
        backgroundColor: '#2EC7C9',
        borderRadius: [5, 5, 5, 5],
        textStyle: {
          color: '#2EC7C9'
        },
        left: '87%',
        top: '48%'
      }, {
        text: (data[1][0].C3 + '(人)'),
        textStyle: {
          color: '#2EC7C9',
          fontWeight: 'bolder'
        },
        left: '90%',
        top: '48%'
      },
      {
        text: '-〇-',
        backgroundColor: '#fff',
        borderRadius: [5, 5, 5, 5],
        textStyle: {
          color: '#5AB1EF'
        },
        left: '86.5%',
        top: '56%'
      }, {
        text: (data[1][0].C4 + '(%)'),
        textStyle: {
          color: '#5AB1EF',
          fontWeight: 'bolder'
        },
        left: '90%',
        top: '56%'
      }
    ],
    dataset: {
      dimensions: [{
        name: 'ITEM_NAME',
        displayName: '行政区划'
      },
      {
        name: 'C1',
        displayName: '育龄妇女',
        x_unit: '人'
      },
      {
        name: 'C3',
        displayName: '非育龄妇女',
        x_unit: '人'
      },
      {
        name: 'C2',
        displayName: '妇女人口总数',
        x_unit: '人'
      },
      {
        name: 'C4',
        displayName: '育龄妇女占比',
        x_unit: '%'
      }
      ],
      source: data[0].filter((item, index) => { return index > 0 })
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      textStyle: {
        align: 'left'
      }
    },
    legend: {},
    grid: [{
      right: '17%'
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
        show: false
      }
    }, {
      type: 'value',
      name: '单位(%)',
      splitLine: {
        show: false
      }
    }],
    series: [
      {
        name: '育龄妇女',
        type: 'bar',
        stack: 'WHCD',
        barWidth: '20'
      },
      {
        name: '非育龄妇女',
        type: 'bar',
        stack: 'WHCD',
        barWidth: '20'
      },
      {
        name: '育龄妇女占比',
        type: 'line',
        yAxisIndex: 1,
        encode: {
          x: 'ITEM_NAME',
          y: 'C4'
        }
      }
    ],
    color: ['#B6A2DE', '#2EC7C9', '#5AB1EF', '#FFC08D', '#E84E7D', '#AFB7CA']
  }
  return option
}
