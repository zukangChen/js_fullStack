<template>
  <div id="app">
    <counter />
    <counter-brother  />
  </div>
</template>

<script>
import Counter from './components/Counter'
import CounterBrother from './components/CounterBrother'

export default {
  name: 'App',
  components: {
    'counter': Counter,
    'counter-brother':CounterBrother
  },
  methods: {
    
    
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
