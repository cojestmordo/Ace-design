<template>
    <component :is="currentView" />
</template>

<script>
import HelloAce from './components/HelloAce.vue'
import FrontPage from './components/FrontPage.vue'
import FotoPage from './components/Foto.vue'
import DesignPage from './components/Design.vue'
import LogoPage from './components/Logo.vue'
import InfoPage from './components/Info.vue'

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
  '/frontpage': FrontPage,
  '/foto': FotoPage,
  '/design': DesignPage,
  '/logo': LogoPage,
  '/info': InfoPage
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Micro+5&display=swap');

html, body {
margin: 0px;
padding: 0px;
}

#app {
  font-family: 'Micro 5', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
