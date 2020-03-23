<template>
  <el-row>
    {{ chartConfig.title }}
    <div :id="chartConfig.id" style="width: 600px;height: 400px;" />
  </el-row>
</template>
<script>
import { renderChart } from '@/utils/echartUtil'
export default {
  props: {
    chartConfig: {
      type: Object,
      required: true,
      default: Object
    }
  },
  data() {
    return {
      chartInstance: ''
    }
  },
  // 调用
  mounted() {
    this.$nextTick(function() {
      this.render(this.chartConfig.id)
    })
  },
  methods: {
    render(id) {
      this.chartInstance = renderChart(id, {})
    }
  }
}
</script>
