//引入vue
import Vue from "vue";
//引入app组件
import App from "./App";
//引入路由组件
import router from "./router";

// 引入公共资源
import "./styles/reset.css";

/* 开发模式：npm run dev是前端自己开发用的
生产模式：npm run build 打包之后给后端放在服务端上用的
Vue.config.productionTip = false
上面这行代码的意思 是阻止显示生产模式的消息。
如果没有这行代码，或者设置为true，控制台就会多出这么一段代码。
You are running Vue in development mode.
Make sure to turn on production mode when deploying for production.
意思就是：
你运行的Vu是开发模式。为生产部署时，请确保启用生产模式。 */
Vue.config.productionTip = false;
new Vue({
  //render渲染app 挂载到app
  render: (h) => h(App),
  // 应用router
  router,
}).$mount("#app");
