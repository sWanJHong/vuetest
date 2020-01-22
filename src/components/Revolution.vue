<template>
  <div>
    <div>你好，我是周期组件</div>
  </div>
</template>

<script>
export default {
  name: 'revolution',
  data () {
    return {
      pageName: 'revolution'
    }
  },
  // 页面被创建时调用，页面的dome节点未渲染前
  created () {
    console.log('created')
    this.init('created')
  },
  // 页面被创建时调用，页面的dome节点渲染完成后
  mounted () {
    console.log('mounted')
    this.init('mounted')
  },
  // 这个不是周期这个是方法打印
  methods: {
    init (val) {
      console.log(`我是init方法, 我在${val}被调用了`)
    }
  },
  // 页面被毁灭之前调用
  beforeDestroy () {
    this.init('beforeDestroy')
  },
  // 页面被毁灭时调用
  destroyed () {
    this.init('destroyed')
  }
}
</script>
