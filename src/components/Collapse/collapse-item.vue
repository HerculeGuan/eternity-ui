<template>
  <div class="collapse-item">
    <div class="title" @click="toggle">
      <span class="title-span" :class="{ open }">{{ title }}</span>
      <span class="title-icon" :class="{ open }">
        <et-icon name="right"></et-icon>
      </span>
    </div>
    <div class="content" v-if="open"><slot></slot></div>
  </div>
</template>

<script>
import Icon from "../Icon/icon";

export default {
  name: "EtCollapseItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      open: false,
      accordion: false,
    };
  },
  methods: {
    toggle() {
      if (this.open) {
        this.eventBus.$emit("update:removeSelected", this.name);
      } else {
        this.eventBus.$emit("update:addSelected", this.name);
      }
    },
  },
  components: {
    "et-icon": Icon,
  },
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", (names) => {
      if (names.indexOf(this.name) >= 0) {
        this.open = true;
      } else {
        this.open = false;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../var";

.collapse-item {
  font-size: $font-size;
  > .title {
    border: 1px solid $grey;
    margin: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 1em;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      color: $primary-color;
      > .title-icon {
        fill: $primary-color;
      }
    }
    .title-span {
      margin-right: 8px;
      &.open {
        color: $primary-color;
      }
    }
    .title-icon {
      display: inline-flex;
      transition: transform 0.25s;
      transform: rotate(90deg);
      &.open {
        transform: rotate(270deg);
        fill: $primary-color;
      }
    }
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  > .content {
    padding: 2em 1em;
  }
}
</style>
