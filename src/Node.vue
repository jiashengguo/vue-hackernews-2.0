<template>
  <div
    :class="['node', !isContainer ? 'component' : '']"
    :style="getComponentStyle(element.style)"
    @click.stop="handleClick"
    :id="element.type + element.id"
    ref="node"
  >
    <component v-if="!element.props.edit" :is="element.type" v-bind="element.props" :element="element"> </component>

    <template v-if="element.children && element.children.length > 0">
      <node v-for="item in element.children" :element="item" :key="item.id"></node>
    </template>
  </div>
</template>
<script>
export default {
  name: "node",
  props: {
    element: {
      type: Object,
      require: true,
    },
  },
  computed: {
    isContainer() {
      return this.element.type === "lx-container-widget";
    },
  },
  methods: {
    getComponentStyle(style) {
      const result = JSON.parse(JSON.stringify(style));

      ["height", "width", "top", "left"].forEach((x) => {
        if (!(style[x] + "").endsWith("px")) {
          result[x] = style[x] + "px";
        } else {
          result[x] = style[x];
        }
      });

      return result;
    },
    handleClick() {},
  },
};
</script>
<style lang="stylus">
.node {
  position: relative;
  cursor: pointer;
  user-select: none;
  font-size: 16px;
}
.node ::before {
  content: "";
  display: block;
  overflow: hidden;
  height: 0;
  width: 1px;
}

.node .component {
  position: absolute;
}
</style>
