<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Product/>
  </div>
</template>

<script>
import Product from './components/Product'

export default {
  name: 'App',
  components: {
    Product
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;

  background-color: #0C161A;
}

body {
  margin: 0;
}

a:-webkit-any-link {
    /* color: -webkit-link; */
    text-decoration: none;
    /* cursor: auto; */
    color: #0C161A; 
}
</style>
