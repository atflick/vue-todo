<template>
  <div>
    <nav>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/todo">Todos</router-link></li>
      <li><router-link to="/other">Other Todos</router-link></li>
    </nav>
    <transition name="slide-fade">
      <router-view> </router-view>
    </transition>
  </div>
</template>

<script>

  module.exports = {
    name: 'App',
    components: {

    },

    data() {
      return {

      }
    },

    methods: {

    }
  }
</script>

<style lang="scss">
  @import './src/assets/scss/main.scss';

  * {
    margin: 0;
    padding: 0;
  }
  html {
    font-family: monospace;
  }

  nav {
    width: 100%;
    height: 100px;
    background:#eee;
  }

  .slide-fade-enter-active {
    transition: all 0.5s ease;
    transition-delay: 2s;
  }
  .slide-fade-leave-active {
    transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(30px);
    opacity: 0;
  }
</style>
