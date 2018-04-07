// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Velocity from "velocity-animate";
import VueScrollReveal from "vue-scroll-reveal";
import VueObserveVisibility from "vue-observe-visibility";

Vue.use(VueObserveVisibility);

Vue.use(VueScrollReveal);

global.jQuery = require("jquery");
var $ = global.jQuery;
window.$ = $;

window.jQuery = window.$ = require("../node_modules/jquery/dist/jquery.min.js");
require("../node_modules/velocity-animate/velocity.min.js");

require.config({
  paths: {
    jquery: "/path/to/jquery-x.x.x",
    velocity: "path/to/velocity",
    // Optional, if you're using the UI pack:
    "velocity-ui": "path/to/velocity.ui",
  },
  shim: {
    velocity: {
      deps: ["jquery"],
    },
    // Optional, if you're using the UI pack:
    "velocity-ui": {
      deps: ["velocity"],
    },
  },
});

window.jQuery = window.$ = require("jquery");
window.$.velocity = require("velocity-animate/velocity.js");

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
});
