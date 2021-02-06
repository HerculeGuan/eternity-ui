<template>
  <div class="tabs-head"><slot></slot><slot name="actions"></slot></div>
</template>

<script>
export default {
  name: "EnTabsHead",
  inject: ["eventBus"],
  created(){

  }
};
</script>

<style lang="scss" scoped>
.tabs-herd {
}
</style>