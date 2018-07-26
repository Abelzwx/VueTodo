import Vue from 'vue';
import App from './app.vue';
// 引入全局样式
import './assets/styles/global.less';

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    render:(h) => h(App)
}).$mount(root) //然后挂载到节点上
