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
            <div v-else class="et-date-picker-content">
              <div class="et-date-picker-weekdays">
                <span v-for="week in 7">{{ weekDays[week - 1] }}</span>
              </div>
              <div class="et-date-picker-row" v-for="i in 6">
                <span
                  class="et-date-picker-col"
                  v-for="day in visibleDays.slice(i * 7 - 7, i * 7)"
                >
                  {{ day.getDate() }}
                </span>
              </div>
            </div>
          </div>
          <div class="et-date-picker-actions">
            清除
          </div>
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
import helper from "./helper";
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
      weekDays: ["日", "一", "二", "三", "四", "五", "六"],
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
    
  },
  computed: {
    visibleDays() {
      let date = this.value;
      let currentMonthArray = [];
      let lastMonthArray = [];
      let nextMonthArray = [];
      let totalMonthArray = [];
      let firstDay = helper.firstDayOfMonth(date);
      let lastDay = helper.lastDayOfMonth(date);
      let [year, month] = helper.getYearMonthDate(date);

      for (let i = firstDay.getDate(); i <= lastDay.getDate(); i++) {
        currentMonthArray.push(new Date(year, month, i));
      }
      for (let i = 0; i < firstDay.getDay(); i++) {
        lastMonthArray.unshift(new Date(year, month, -i));
      }
      for (
        let i = 1;
        i <= 42 - currentMonthArray.length - lastMonthArray.length;
        i++
      ) {
        nextMonthArray.push(new Date(year, month + 1, i));
      }
      totalMonthArray = [
        ...lastMonthArray,
        ...currentMonthArray,
        ...nextMonthArray,
      ];
      return totalMonthArray;
    },
  },
};
</script>

<style lang="scss" scoped>
.et-date-picker {
  //   border: 1px solid black;`
}
</style>
