<template>
    <component :is="currentView" />
</template>

<script>
import HelloAce from './components/HelloAce.vue'
import FrontPage from './components/FrontPage.vue'

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/']
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
        this.currentPath = window.location.hash
        })
    }
  }

const routes = {
  '/': HelloAce,
  '/frontpage': FrontPage
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html, body {
margin: 0px;
padding: 0px;
}

</style>
