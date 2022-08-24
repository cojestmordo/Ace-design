<template>
  <div id="app">
    <HelloAce />
  </div>
</template>


<script>
import HelloAce from './components/HelloAce.vue'

export default {
  name: 'App',
  components: {
    HelloAce
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
