<template>
  <div>
    <el-container>
      <el-header>
        <el-menu mode="horizontal">
          <el-menu-item index="1" width="50px">
            <img width="50px" src="@/assets/logo.png" alt="">
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/">
              首页
            </router-link>
          </el-menu-item>
          <el-menu-item index="3" style="float:right">
            <router-link to="/cart">
              <i class="el-icon-shopping-cart-full" ></i>
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <h1>{{welcomeText}}</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      welcomeText:"hello vue cart",
    }
  },
  methods:{
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
