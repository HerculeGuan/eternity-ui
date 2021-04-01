<template>
  <div class="et-date-picker">
    <et-input @focus="onFocusInput" @blur="onBlurInput"></et-input>
    <div class="et-date-picker-pop" v-if="popVisible">
      pop
    </div>
  </div>
</template>

<script>
import Input from "../Input/input";
export default {
  name: "EtDatePicker",
  components: {
    "et-input": Input,
  },
  data() {
    return {
      popVisible: false,
    };
  },
  methods: {
    onFocusInput() {
      this.popVisible = true;
    },
    onBlurInput() {
      this.popVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.et-date-picker {
}
</style>
