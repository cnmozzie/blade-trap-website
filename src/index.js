import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './custom.css';

import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueLazyload from 'vue-lazyload'

//懒加载
//import Timeline from './timeline.vue'
const Timeline = () => import('./timeline.vue')
const Chamber = () => import('./chamber.vue')
const Ions = () => import('./ions.vue')
const Chat = () => import('./chat.vue')
const ToricCode = () => import('./ions/toric_code.vue')
const RemoteIonsEntanglement = () => import('./ions/remote_ions_entanglement.vue')

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import VueKatex from 'vue-katex';
import 'katex/dist/katex.min.css';
Vue.use(VueKatex)
Vue.use(VueCookies)
Vue.use(VueAxios, axios)


// This imports <b-modal> as well as the v-b-modal directive as a plugin:
import { ModalPlugin } from 'bootstrap-vue'
Vue.use(ModalPlugin)

Vue.use(VueRouter)
Vue.use(VueLazyload)
Vue.use(Viewer)

// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/blade-trap', component: Timeline },
  { path: '/blade-trap/chamber', component: Chamber },
  { path: '/blade-trap/ions', component: Ions,
      children: [
        {
          // 当 /blad-trap/ions/toric_code 匹配成功，
          // ToricCode 会被渲染在 Ions 的 <router-view> 中
          path: 'toric_code',
          component: ToricCode
        },
		{
          path: 'remote_ions_entanglement',
          component: RemoteIonsEntanglement
        }
      ]
  },
  { path: '/blade-trap/chatting', component: Chat }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  mode: 'history',
  routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// 现在，应用已经启动了！
