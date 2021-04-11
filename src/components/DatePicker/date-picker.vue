<template>
  <div class="et-date-picker">
    <et-popover ref="popover" position="bottom" no-padding @open="onOpen">
      <template v-slot:content>
        <div class="et-date-picker-wrapper" @selectstart.prevent>
          <div class="et-date-picker-nav">
            <span class="et-date-picker-icon" @click="onClickPreNextYear(-1)"
              ><et-icon name="doubleleft"></et-icon
            ></span>
            <span class="et-date-picker-icon" @click="onClickPreNextMonth(-1)"
              ><et-icon name="left"></et-icon
            ></span>
            <span class="et-date-picker-yearandmonth">
              <span
                class="et-date-picker-year"
                @click="onClickYear"
                v-if="mode !== 'year'"
                >{{ display.year }}年</span
              >
              <span class="et-date-picker-month" @click="onClickMonth"
                >{{ display.month + 1 }}月</span
              >
            </span>
            <span class="et-date-picker-icon" @click="onClickPreNextMonth(1)"
              ><et-icon name="right"></et-icon
            ></span>
            <span class="et-date-picker-icon" @click="onClickPreNextYear(1)"
              ><et-icon name="doubleright"></et-icon
            ></span>
          </div>
          <div class="et-date-picker-panels">
            <div class="et-date-picker-content">
              <template v-if="mode === 'year'">年</template>
              <template v-else-if="mode === 'month'">
                <div class="et-date-picker-allmonths">
                  <span class="et-date-picker-allmonth" v-for="month in 12"
                    >{{ allMonths[month + 1] }}月</span
                  >
                </div>
              </template>
              <template v-else>
                <div class="et-date-picker-weekdays">
                  <span class="et-date-picker-weekday" v-for="week in 7">{{
                    weekDays[week - 1]
                  }}</span>
                </div>
                <div class="et-date-picker-row" v-for="i in 6">
                  <div
                    class="et-date-picker-cell"
                    :class="{
                      'is-current-month': isCurrentMonth(day),
                      'is-current-day': isCurrentDay(day),
                      'is-today': isToday(day),
                    }"
                    v-for="day in visibleDays.slice(i * 7 - 7, i * 7)"
                    @click="onClickCell(day)"
                  >
                    <span class="et-date-picker-cell-span">{{
                      day.getDate()
                    }}</span>
                  </div>
                </div></template
              >
            </div>
          </div>
          <div class="et-date-picker-actions">
            <et-button @click="onClickToday">今天</et-button>
          </div>
        </div>
      </template>
      <et-input
        :value="formattedValue"
        ref="input"
        @input="onInput"
        @change="onChange"
      ></et-input>
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
    range: {
      type: Array,
      default: () => [
        helper.addYear(new Date(), -100),
        helper.addYear(new Date(), 100),
      ],
    },
  },
  data() {
    let [year, month] = helper.getYearMonthDate(this.value);
    return {
      mode: "day",
      weekDays: ["日", "一", "二", "三", "四", "五", "六"],
      allMonths: [
        "一",
        "二",
        "三",
        "四",
        "五",
        "六",
        "七",
        "八",
        "九",
        "十",
        "十一",
        "十二",
      ],
      display: { year, month },
    };
  },
  methods: {
    onClickYear() {
      // this.mode = "year";
    },
    onClickMonth() {
      // this.mode = "month";
    },
    onClickCell(date) {
      const [year, month] = helper.getYearMonthDate(date);
      this.$emit("input", date);
      this.display = { year, month };
      this.$refs.popover.close();
    },
    isCurrentMonth(date) {
      return date.getMonth() === this.display.month;
    },
    isCurrentDay(date) {
      return (
        date.getFullYear() === this.value.getFullYear() &&
        date.getMonth() === this.value.getMonth() &&
        date.getDate() === this.value.getDate()
      );
    },
    isToday(date) {
      return (
        date.getFullYear() === new Date().getFullYear() &&
        date.getMonth() === new Date().getMonth() &&
        date.getDate() === new Date().getDate()
      );
    },
    onClickPreNextYear(length) {
      const oldDate = new Date(this.display.year, this.display.month);
      const newDate = helper.addYear(oldDate, length);
      const [year, month] = helper.getYearMonthDate(newDate);
      this.display = { year, month };
    },
    onClickPreNextMonth(length) {
      const oldDate = new Date(this.display.year, this.display.month);
      const newDate = helper.addMonth(oldDate, length);
      const [year, month] = helper.getYearMonthDate(newDate);
      this.display = { year, month };
    },
    onClickToday() {
      const now = new Date();
      const [year, month] = helper.getYearMonthDate(now);
      this.display = { year, month };
      this.$emit("input", now);
    },
    onOpen() {
      this.mode = "day";
    },
    onInput(value) {
      let regex = /^\d{4}-\d{2}-\d{2}$/g;
      if (value.match(regex)) {
        console.log(value);
        let [year, month, day] = value.split("-");
        month -= 1;
        this.display = { year, month };
        this.$emit("input", new Date(year, month, day));
      }
    },
    onChange() {
      this.$refs.input.setValue(this.formattedValue);
    },
  },
  computed: {
    visibleDays() {
      let date = new Date(this.display.year, this.display.month, 1);
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
      return `${year}-${helper.padLeft(month + 1)}-${helper.padLeft(day)}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../var";
.et-date-picker {
  &-wrapper {
    padding: 20px 10px 10px;
  }
  &-nav {
    display: flex;
  }
  &-yearandmonth {
    margin: auto;
    width: 120px;
    text-align: center;
    font-size: 16px;
  }
  &-year,
  &-month {
    cursor: pointer;
    &:hover {
      color: $primary-color;
    }
  }
  &-icon,
  &-weekday,
  &-cell {
    color: $font-color;
    width: 36px;
    height: 36px;
    margin: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  &-icon {
    cursor: pointer;
    &:hover {
      fill: $primary-color;
    }
  }
  &-cell {
    cursor: pointer;
    color: $disabled-color;
    &.is-current-month {
      color: $font-color;
    }
    &.is-today {
      color: $primary-color;
    }
    &.is-current-day,
    &:hover {
      color: white;
      > span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 26px;
        height: 26px;
        padding: 4px;
        border-radius: 50%;
        background-color: $primary-color;
      }
    }
  }
  &-actions {
    display: flex;
    justify-content: flex-end;
    padding-top: 10px;
    border-top: 1px solid $border-color;
  }
}
</style>
