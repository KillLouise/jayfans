//引入vue
import Vue from "vue";
//引入路由
import VueRouter from "vue-router";
//引入路由组件
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search";

// 安装插件
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/search",
      component: Search,
    },
  ],
});
