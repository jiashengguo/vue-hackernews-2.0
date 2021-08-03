import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import * as lx from "./widgetsUI.dev";

if (process.env.VUE_ENV === "client") {
  window.lxDispatch && window.lxDispatch(window, "vueLoaded", Vue);
}

// mixin for handling title
Vue.use(ElementUI);
Vue.use(lx);

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp() {
  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  console.log("create app");
  const app = new Vue({
    render: (h) => h(App),
  });

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app };
}
