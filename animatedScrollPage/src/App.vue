<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <vue-fixed-nav style="z-index: 9999;"></vue-fixed-nav>
    <Product/>
  </div>
</template>

<script>
import Product from "./components/Product";
import FixedNav from "./components/FixedNav";
export default {
    name: "App",
    components: {
        Product,
        VueFixedNav: FixedNav,
    },
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;

    background-color: #0c161a;
}

body {
    margin: 0;
}

a:-webkit-any-link {
    /* color: -webkit-link; */
    text-decoration: none;
    /* cursor: auto; */
    color: #0c161a;
}
</style>
