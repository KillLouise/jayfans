<template>
  <div>
    <!-- 加载头部组件  -->
    <Header />
    <!-- 加载显示当前路由组件 -->
    <router-view></router-view>
    <!-- 加载部底组件  -->
    <Footer />
  </div>
</template>

<script>
//引入头部和底部组件
import Header from "./components/Header"
import Footer from "./components/Footer"
//暴露组件
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="less" scoped>
/* scoped只能在当前组件使用 */
</style>
