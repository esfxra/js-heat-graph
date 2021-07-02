import { drawCalendar } from "./lib/drawCalendar.js";
import {
  createCalendar,
  dailyActivity,
  createDate,
} from "./lib/createCalendar.js";

// Feb 2021 Week 1
const start = createDate(2021, 1, 31);
const end = createDate(2021, 4, 12);

// Create calendar
const calendar = createCalendar(start, end);
// Populate calendar with activity data
const activity = dailyActivity(calendar);
// Print activity
// console.log(activity);

// Draw calendar
drawCalendar(activity);
