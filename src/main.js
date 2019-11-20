// 入口文件
import Vue from 'vue'
//导入App组件
import app from './App.vue'
// 按需导入 mint-ui
import {
	Header
} from 'mint-ui'
// 对导入的mint-ui组件进行注册
Vue.component(Header.name, Header)
// 导入mui的css 否则 tab-bar 没有样式会很丑
import './lib/mui/css/mui.min.css'
var vue = new Vue({
	el: '#app',
	render: (c) => c(app)
})
