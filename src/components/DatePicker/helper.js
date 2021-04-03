export default {
  firstDayOfMonth(date) {
    const [year, month] = getYearMonthDate(date);
    return new Date(year, month, 1);
  },
  addMonth(date, n) {
    const [_year, month] = getYearMonthDate(date);
    const newMonth = month + n;
    const copyDate = new Date(date);
    copyDate.setMonth(newMonth);
    return copyDate;
  },
  addYear(date, n) {
    const [year] = getYearMonthDate(date);
    const newYear = year + n;
    const copyDate = new Date(date);
    copyDate.setFullYear(newYear);
    return copyDate;
  },
  getYearMonthDate,
};

function getYearMonthDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return [year, month, day];
}
