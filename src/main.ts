import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/index.less'
import 'lib-flexible-computer'
createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
