<template>
  <div>
    <!-- 不传name -->
    <my-view />
    <!-- 传name -->
    <my-view name="周杰伦"/>
    <!-- revolution组件 -->
    <!-- <revolution /> -->

    <el-button @click="goPage">go second</el-button>
  </div>
</template>

<script>
import MyView from '@/components/MyView.vue'
// import Revolution from '@/components/Revolution.vue'

export default {
  name: 'home',
  components: {
    MyView
    // Revolution
  },
  methods: {
    goPage () {
      this.$router.push('/secondPage')
      console.log('我要前往第二个页面了')
    }
  }
}
</script>