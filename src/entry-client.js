import Vue from "vue";
import "es6-promise/auto";
import { createApp } from "./app";

const { app } = createApp();

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
if (window.__INITIAL_STATE__) {
  let pageData = window.__INITIAL_STATE__;

  Vue.mixin({
    data() {
      return {
        get pageData() {
          return pageData;
        },
      };
    },
  });
}

app.$mount("#app");

// service worker
if ("https:" === location.protocol && navigator.serviceWorker) {
  navigator.serviceWorker.register("/service-worker.js");
}
