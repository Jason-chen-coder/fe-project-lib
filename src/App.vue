<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;
}
.hljs {
  background: #332d2d;
}
.hljs,
.hljs-subst {
  color: #ffff;
}
.hljs-comment,
.hljs-quote {
  color: #756bb1;
}
.hljs-comment {
  color: #c3e88d;
}
</style>
