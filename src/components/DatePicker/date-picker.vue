<template>
  <div class="et-date-picker">
    <et-popover position="bottom">
      <template v-slot:content>
        <div class="et-date-picker-pop">
          <div class="et-date-picker-nav">
            <span><et-icon name="left"></et-icon></span>
            <span><et-icon name="left"></et-icon></span>
            <span @click="onClickYear">2021年</span>
            <span @click="onClickMonth">4月</span>
            <span><et-icon name="right"></et-icon></span>
            <span><et-icon name="right"></et-icon></span>
          </div>
          <div class="et-date-picker-panels">
            <div v-if="mode === 'year'" class="et-date-picker-content">年</div>
            <div v-else-if="mode === 'month'" class="et-date-picker-content">
              月
            </div>
            <div v-else class="et-date-picker-content">日</div>
          </div>
          <div class="et-date-picker-actions"></div>
        </div>
      </template>
      <et-input></et-input>
    </et-popover>
  </div>
</template>

<script>
import Input from "../Input/input";
import Icon from "../Icon/icon";
import Popover from "../Popover/popover";
export default {
  name: "EtDatePicker",
  components: {
    "et-input": Input,
    "et-icon": Icon,
    "et-popover": Popover,
  },
  data() {
    return {
      mode: "day",
      value: new Date(),
    };
  },
  methods: {
    onClickYear() {
      this.mode = "year";
    },
    onClickMonth() {
      this.mode = "month";
    },
  },
  mounted() {
    let date = this.value;
    let firstDay = date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    let lastDay = date.setDate(0);
    console.log(new Date(firstDay), new Date(lastDay));
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.et-date-picker {
  //   border: 1px solid black;`
}
</style>
