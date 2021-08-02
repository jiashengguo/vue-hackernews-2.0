<template>
  <div id="app">
    <!-- <header class="header">
      <nav class="inner">
        <router-link to="/" exact>
          <img class="logo" src="~public/logo-48.png" alt="logo" />
        </router-link>
        <router-link to="/top">Top</router-link>
        <router-link to="/new">New</router-link>
        <router-link to="/show">Show</router-link>
        <router-link to="/ask">Ask</router-link>
        <router-link to="/job">Jobs</router-link>
        <a class="github" href="https://github.com/vuejs/vue-hackernews-2.0" target="_blank" rel="noopener">
          Built with Vue.js
        </a>
      </nav>
    </header> -->
    <!-- <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition> -->
    <!-- <el-button @click="startHacking">{{ this.zzz }}</el-button> -->
    <!-- <lx-button-widget :element="x[0]"></lx-button-widget> -->

    <node v-for="element in this.pageData" :key="element.id" :element="element"></node>
  </div>
</template>

<script>
import Node from "./Node.vue";

export default {
  components: { Node },
  props: {
    isEdit: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      x: [
        {
          type: "lx-container-widget",
          label: "容器",
          name: "容器",
          style: { rotate: 0, opacity: 1, width: "100%", height: 667, backgroundColor: "", backgroundImage: "" },
          animation: { name: "", duration: 1 },
          events: [],
          props: { fixed: false, fixedPostion: {} },
          groupStyle: {},
          isLock: false,
          children: [
            {
              type: "lx-image-widget",
              label: "图片",
              name: "图片",
              style: {
                rotate: 0,
                opacity: 1,
                width: 183,
                height: 183,
                borderRadius: "0px",
                boxShadow: "",
                top: 104,
                left: 329,
                outline: "none",
              },
              animation: { name: "", duration: 1 },
              events: [],
              props: {
                src: "https://devres.lingxi.link/lx/wangyi/imgages/203620a0-ef5c-11eb-85a1-2b0dbc8e8524.png",
                alt: "",
              },
              groupStyle: {},
              isLock: false,
              id: 1,
            },
            {
              type: "lx-image-widget",
              label: "图片",
              name: "图片",
              style: {
                rotate: 0,
                opacity: 1,
                width: 183,
                height: 183,
                borderRadius: "0px",
                boxShadow: "",
                top: 112,
                left: 604,
                outline: "none",
              },
              animation: { name: "", duration: 1 },
              events: [],
              props: {
                src: "https://devres.lingxi.link/lx/wangyi/imgages/203620a0-ef5c-11eb-85a1-2b0dbc8e8524.png",
                alt: "",
              },
              groupStyle: {},
              isLock: false,
              id: 2,
            },
            {
              type: "lx-text-widget",
              label: "文字",
              name: "文字",
              style: {
                rotate: 0,
                opacity: 1,
                width: "235px",
                height: "35px",
                borderWidth: "",
                borderColor: "",
                borderRadius: "4px",
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: 1.4,
                letterSpacing: 0,
                textAlign: "center",
                color: "$primary-text-color",
                backgroundColor: "",
                margin: 0,
                top: 330,
                left: 365,
                textShadow: "none",
                outline: "none",
              },
              animation: { name: "", duration: 1 },
              events: [],
              props: { text: "吊炸天", edit: false },
              groupStyle: {},
              isLock: false,
              id: 3,
            },
          ],
          id: 0,
        },
      ],
    };
  },
  serverPrefetch() {
    console.log(this.pageData);
  },
  methods: {
    startHacking() {
      this.$notify({
        title: "It works!",
        type: "success",
        message: "We've laid the ground work for you. It's time for you to build something epic!",
        duration: 5000,
      });
    },
  },
};
</script>

<style lang="stylus">
body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size 15px
  background-color lighten(#eceef1, 30%)
  margin 0
  padding-top 55px
  color #34495e
  overflow-y scroll

a
  color #34495e
  text-decoration none

.header
  background-color #ff6600
  position fixed
  z-index 999
  height 55px
  top 0
  left 0
  right 0
  .inner
    max-width 800px
    box-sizing border-box
    margin 0px auto
    padding 15px 5px
  a
    color rgba(255, 255, 255, .8)
    line-height 24px
    transition color .15s ease
    display inline-block
    vertical-align middle
    font-weight 300
    letter-spacing .075em
    margin-right 1.8em
    &:hover
      color #fff
    &.router-link-active
      color #fff
      font-weight 400
    &:nth-child(6)
      margin-right 0
  .github
    color #fff
    font-size .9em
    margin 0
    float right

.logo
  width 24px
  margin-right 10px
  display inline-block
  vertical-align middle

.view
  max-width 800px
  margin 0 auto
  position relative

.fade-enter-active, .fade-leave-active
  transition all .2s ease

.fade-enter, .fade-leave-active
  opacity 0

@media (max-width 860px)
  .header .inner
    padding 15px 30px

@media (max-width 600px)
  .header
    .inner
      padding 15px
    a
      margin-right 1em
    .github
      display none
</style>
