<template>
  <div id="app">
    <main-navigation></main-navigation>
    <main-view-header></main-view-header>
    <router-view/>
  </div>
</template>
<script>
import MainNavigation from '@/components/MainNavigation.vue'
import MainViewHeader from '@/components/MainViewHeader.vue'
export default {
  name: 'app',
  components: {
    MainNavigation,
    MainViewHeader
  }
}
</script>
<style>
#app {
  font-family: Bold,Trebuchet MS,Helvetica,Arial,sans-serif;
  font-weight: 600;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
