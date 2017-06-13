<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0 auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.seprator {
  background-color: #E5E5E5;
  width: 100%;
  height: 1px;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.submit-btn {
  background: #49C58D!important;
  width: calc(100% - 30px)!important;
  margin-left: 15px;
}
</style>
