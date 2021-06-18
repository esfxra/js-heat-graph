// Feb 2021 Week 1
const start = createDate(2021, 2, 1);
const end = createDate(2021, 3, 15);

// Create calendar
const calendar = createCalendar(start, end);
// Populate calendar with activity data
const activity = dailyActivity(calendar);
// Print activity
// console.log(activity);

// Draw calendar
drawCalendar(calendar);
