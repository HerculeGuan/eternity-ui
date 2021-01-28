<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GRow",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.row {
  display: flex;
}
</style>