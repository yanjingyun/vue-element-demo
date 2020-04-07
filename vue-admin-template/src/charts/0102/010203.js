export function getChartOption($echarts, data) {
  data = [[{ 'ITEM_CODE': '440100000000000', 'ITEM_NAME': '广州市本级', 'C1': 0, 'C2': 0, 'C3': 0, 'C4': 0, 'C5': 9, 'C6': 31.03, 'C7': 0, 'C8': 0 }, { 'ITEM_CODE': '440103000000000', 'ITEM_NAME': '荔湾区', 'C1': 0, 'C2': 0, 'C3': 0, 'C4': 0, 'C5': 0, 'C6': 0, 'C7': 0, 'C8': 0 }, { 'ITEM_CODE': '440104000000000', 'ITEM_NAME': '越秀区', 'C1': 0, 'C2': 0, 'C3': 0, 'C4': 0, 'C5': 0, 'C6': 0, 'C7': 0, 'C8': 0 }, { 'ITEM_CODE': '440105000000000', 'ITEM_NAME': '海珠区', 'C1': 2, 'C2': 6.67, 'C3': 0, 'C4': 0, 'C5': 4, 'C6': 13.79, 'C7': 2, 'C8': 6.67 }, { 'ITEM_CODE': '440106000000000', 'ITEM_NAME': '天河区', 'C1': 2, 'C2': 6.67, 'C3': 0, 'C4': 0, 'C5': 3, 'C6': 10.34, 'C7': 2, 'C8': 6.67 }, { 'ITEM_CODE': '440111000000000', 'ITEM_NAME': '白云区', 'C1': 0, 'C2': 0, 'C3': 0, 'C4': 0, 'C5': 0, 'C6': 0, 'C7': 0, 'C8': 0 }, { 'ITEM_CODE': '440112000000000', 'ITEM_NAME': '黄埔区', 'C1': 0, 'C2': 0, 'C3': 0, 'C4': 0, 'C5': 0, 'C6': 0, 'C7': 0, 'C8': 0 }, { 'ITEM_CODE': '440113000000000', 'ITEM_NAME': '番禺区', 'C1': 21, 'C2': 70, 'C3': 0, 'C4': 0, 'C5': 4, 'C6': 13.79, 'C7': 21, 'C8': 70 }, { 'ITEM_CODE': '440114000000000', 'ITEM_NAME': '花都区', 'C1': 2, 'C2': 6.67, 'C3': 0, 'C4': 0, 'C5': 3, 'C6': 10.34, 'C7': 2, 'C8': 6.67 }, { 'ITEM_CODE': '440115000000000', 'ITEM_NAME': '南沙区', 'C1': 1, 'C2': 3.33, 'C3': 0, 'C4': 0, 'C5': 3, 'C6': 10.34, 'C7': 1, 'C8': 3.33 }, { 'ITEM_CODE': '440117000000000', 'ITEM_NAME': '从化区', 'C1': 1, 'C2': 3.33, 'C3': 0, 'C4': 0, 'C5': 1, 'C6': 3.45, 'C7': 1, 'C8': 3.33 }, { 'ITEM_CODE': '440118000000000', 'ITEM_NAME': '增城区', 'C1': 1, 'C2': 3.33, 'C3': 0, 'C4': 0, 'C5': 2, 'C6': 6.9, 'C7': 1, 'C8': 3.33 }], [{ 'ITEM_CODE': '4401', 'ITEM_NAME': '广州市', 'C1': 30, 'C3': 0, 'C5': 29, 'C7': 30 }]]
  var option = {
    title: [{
      text: data[1][0].ITEM_NAME + '数据',
      left: '87%',
      top: '18%'
    },
    {
      text: '██' + '   ' + data[1][0].C1 + '人',
      left: '88%',
      top: '25%',
      textStyle: {
        color: '#B6A2DE'
      }
    },
    {
      text: '██' + '   ' + data[1][0].C3 + '人',
      left: '88%',
      top: '35%',
      textStyle: {
        color: '#2EC7C9'
      }
    },
    {
      text: '██' + '   ' + data[1][0].C5 + '人',
      left: '88%',
      top: '45%',
      textStyle: {
        color: '#5AB1EF'
      }
    },
    {
      text: '██' + '   ' + data[1][0].C7 + '人',
      left: '88%',
      top: '55%',
      textStyle: {
        color: '#FFC08D'
      }
    }],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function(params, ticket, callback) {
        return $echarts.$getSeriesText(params, option.dataset.dimensions)
      }
    },
    legend: [
      { left: '10%', top: 0, data: ['户籍人口-低保人员人数', '流动人口（来穗）-低保人员人数', '常住人口-低保人员人数', '实际管理人口-低保人员人数'] },
      { left: '5%', top: 30, data: ['户籍人口-低保人员占上级比例', '流动人口（来穗）-低保人员占上级比例', '常住人口-低保人员占上级比例', '实际管理人口-低保人员占上级比例'] }
    ],
    dataset: {
      dimensions: [{
        name: 'ITEM_NAME',
        displayName: '行政区划'
      },
      {
        name: 'C1',
        displayName: '户籍人口-低保人员人数',
        x_unit: '人'
      },
      {
        name: 'C2',
        displayName: '户籍人口-低保人员占上级比例',
        x_unit: '%'
      },
      {
        name: 'C3',
        displayName: '流动人口（来穗）-低保人员人数',
        x_unit: '人'
      },
      {
        name: 'C4',
        displayName: '流动人口（来穗）-低保人员占上级比例',
        x_unit: '%'
      },
      {
        name: 'C5',
        displayName: '常住人口-低保人员人数',
        x_unit: '人'
      },
      {
        name: 'C6',
        displayName: '常住人口-低保人员占上级比例',
        x_unit: '%'
      },
      {
        name: 'C7',
        displayName: '实际管理人口-低保人员人数',
        x_unit: '人'
      },
      {
        name: 'C8',
        displayName: '实际管理人口-低保人员占上级比例',
        x_unit: '%'
      }],
      source: data[0].filter((item, index) => { return index > 0 })
    },
    grid: [{
      top: '15%',
      left: 30,
      right: '15%'
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
      name: '单位(岁)',
      splitLine: {
        show: false
      }
    },
    {
      type: 'value',
      name: '单位(%)',
      splitLine: {
        show: false
      }
    }],
    series: [
      { type: 'bar' },
      { type: 'line', yAxisIndex: 1 },
      { type: 'bar' },
      { type: 'line', yAxisIndex: 1 },
      { type: 'bar' },
      { type: 'line', yAxisIndex: 1 },
      { type: 'bar' },
      { type: 'line', yAxisIndex: 1 }
    ],
    color: ['#B6A2DE', '#B6A2DE', '#2EC7C9', '#2EC7C9', '#5AB1EF', '#5AB1EF', '#FFC08D', '#FFC08D']
  }
  return option
}
