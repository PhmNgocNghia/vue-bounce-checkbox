<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <checkbox :checked="true" :onClicked="toggleCheckbox"/>
  </div>
</template>

<script>
import Checkbox from './components/Checkbox'

export default {
  name: 'app',
  data () {
    return {
      isCheckBoxChecked: false
    }
  },
  methods: {
    toggleCheckbox () {
      this.isCheckBoxChecked = !this.isCheckBoxChecked
    }
  },
  components: {
    Checkbox
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
