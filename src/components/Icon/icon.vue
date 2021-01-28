<template>
  <svg class="icon"><use :xlink:href="`#i-${name}`"></use></svg>
</template>

<script>
import "../../svg";
export default {
  name: "GIcon",
  props: {
    name: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
}
</style>
