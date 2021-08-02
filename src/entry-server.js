import { createApp } from "./app";
import Vue from "vue";

const isDev = process.env.NODE_ENV !== "production";

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
export default (context) => {
  return new Promise((resolve, reject) => {
    const { app } = createApp();
    const { pageData } = context;
    console.log(pageData);

    Vue.mixin({
      data() {
        return {
          get pageData() {
            return pageData;
          },
        };
      },
    });

    context.state = pageData;

    resolve(app);
  });
};
