<template>
  <div>
    <p>我是第二个页面</p >
    <el-Button @click="back">回去home页面</el-Button>
  </div>
</template>

<script>
import { Button } from 'element-ui'
export default {
  name: 'home',
  components: {
    [Button.name]: Button
  },
  methods: {
    back () {
      this.$router.push('/')
      console.log('我要回去第一个页面了')
    }
  }
}
</script>