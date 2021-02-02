<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GToast",
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-border-radius: 4px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: $font-size;
  line-height: 1.8;
  height: $toast-height;
  display: flex;
  align-items: center;
  color: white;
  background: $toast-bg;
  border-radius: $toast-border-radius;
  box-shadow: 0 0 3 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
}
</style>