<template>
  <svg class="et-icon"><use :xlink:href="`#i-${name}`"></use></svg>
</template>

<script>
import "../../svg";
export default {
  name: "EtIcon",
  props: {
    name: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.et-icon {
  width: 1em;
  height: 1em;
}
</style>
