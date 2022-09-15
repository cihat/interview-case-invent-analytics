import { createApp } from 'vue'
import App from './app.vue'
import './register-service-worker'
import router from './router'
import store from './store'
import AuthLayout from './layouts/AuthLayout.vue'
import FeedLayout from './layouts/FeedLayout.vue'
import 'normalize.css'
import 'ant-design-vue/dist/antd.css'
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const app = createApp(App)

app.component('auth-layout', AuthLayout)
app.component('feed-layout', FeedLayout)
app.use(Antd)
app.use(store)
app.use(router)
app.mount('#app')