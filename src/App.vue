<template>
    <div class="test">
      <h3>Vuex</h3>
      <h4> {{ $store.state.counter }}</h4>
      <button @click="addOne">Add 10</button>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    // HelloWorld,
  },
  methods: {
    addOne() {
      this.$store.commit('increment', { value: 10});
    }
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
.test {
  padding: 1em 5em;
  background: white;
  box-shadow: 1px 1px 3px 4px #ccc;
  width: 50%;
  margin: 0 auto;
}
h3 {
  margin-bottom: 2em;
}
</style>
