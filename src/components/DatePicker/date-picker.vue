<template>
  <div class="et-date-picker">
    <et-popover position="bottom" no-padding>
      <template v-slot:content>
        <div class="et-date-picker-wrapper">
          <div class="et-date-picker-nav">
            <span class="et-date-picker-preyear et-date-picker-icon"
              ><et-icon name="doubleleft"></et-icon
            ></span>
            <span class="et-date-picker-premonth et-date-picker-icon"
              ><et-icon name="left"></et-icon
            ></span>
            <span class="et-date-picker-yearandmonth">
              <span @click="onClickYear">2021年</span>
              <span @click="onClickMonth">4月</span>
            </span>
            <span class="et-date-picker-nextmonth et-date-picker-icon"
              ><et-icon name="right"></et-icon
            ></span>
            <span class="et-date-picker-nextyear et-date-picker-icon"
              ><et-icon name="doubleright"></et-icon
            ></span>
          </div>
          <div class="et-date-picker-panels">
            <div v-if="mode === 'year'" class="et-date-picker-content">年</div>
            <div v-else-if="mode === 'month'" class="et-date-picker-content">
              月
            </div>
            <div v-else class="et-date-picker-content">
              <div class="et-date-picker-weekdays">
                <span class="et-date-picker-weekday" v-for="week in 7">{{
                  weekDays[week - 1]
                }}</span>
              </div>
              <div class="et-date-picker-row" v-for="i in 6">
                <span
                  class="et-date-picker-cell"
                  v-for="day in visibleDays.slice(i * 7 - 7, i * 7)"
                  @click="onClickCell(day)"
                >
                  {{ day.getDate() }}
                </span>
              </div>
            </div>
          </div>
          <div class="et-date-picker-actions">
            <et-button>清除</et-button>
          </div>
        </div>
      </template>
      <et-input v-model="formattedValue"></et-input>
    </et-popover>
  </div>
</template>

<script>
import Input from "../Input/input";
import Icon from "../Icon/icon";
import Button from "../Button/button";
import Popover from "../Popover/popover";
import helper from "./helper";
export default {
  name: "EtDatePicker",
  components: {
    "et-input": Input,
    "et-icon": Icon,
    "et-button": Button,
    "et-popover": Popover,
  },
  props: {
    value: {
      type: Date,
      default: () => new Date(),
    },
  },
  data() {
    return {
      mode: "day",
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
    onClickCell(date) {
      this.$emit("input", date);
    },
  },
  mounted() {},
  computed: {
    visibleDays() {
      let date = this.value;
      let firstDay = helper.firstDayOfMonth(date);
      let firstDayOfWeek = firstDay.getDay();
      let firstDayTimestamp = firstDay - firstDayOfWeek * 3600 * 24 * 1000;
      let array = [];
      for (let i = 0; i < 42; i++) {
        array.push(new Date(firstDayTimestamp + i * 3600 * 24 * 1000));
      }
      return array;
    },
    formattedValue() {
      const [year, month, day] = helper.getYearMonthDate(this.value);
      return `${year}-${month + 1}-${day}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../var";
.et-date-picker {
  &-nav {
    display: flex;
  }
  &-yearandmonth {
    margin: auto;
  }
  &-icon,
  &-weekday,
  &-cell {
    color: $font-size-color;
    width: 36px;
    height: 36px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
