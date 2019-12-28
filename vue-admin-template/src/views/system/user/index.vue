<template>
  <div class="app-container">
    <h2>用户列表</h2>
    <el-table :data="userData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="username" label="用户名" />
      <el-table-column prop="birthday" label="出生日期" width="180" />
      <el-table-column prop="state" label="状态" width="180">
        <template slot-scope="scope">
          <el-tag :type="scope.row.state | stateFilter">{{ scope.row.state }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/user'
export default {
  filters: {
    stateFilter(val) {
      const statusMap = {
        insert: 'success',
        update: 'gray',
        delete: 'danger'
      }
      return statusMap[val]
    }
  },
  data() {
    return {
      userData: []
    }
  },
  created() {
    getList().then(res => {
      this.userData = res.data.items
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
