<template>
    <div>
        <div>hello,im{{name}}</div>
        <div>你好，我是{{pageName}}组件</div>
        <el-button>默认按钮</el-button>
    </div>
</template>

<script>
export default {
    name: 'hjh',  // 页面组件名称，不可与其他页面一直
    props: {  // 父页面参数
        name: {
            type: String,  // name参数类型
            default: ''
        }
    },
    data () {
        return {
            pageName: '家鸿'
        }
    },
    created () {
        console.log('123123')
        console.log('打印name', this.name)
        console.log('打印pageName', this.pageName)
    }
}
</script>
