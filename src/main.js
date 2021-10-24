import { createDate, generateData } from './scripts/generateData';
import { Calendar } from './lib/Calendar';

const start = createDate(2021, 1, 31);
const end = createDate(2021, 4, 12);

// Generate data
const data = generateData(start, end);

// Create calendar
const calendar = new Calendar(data);
// console.log(calendar.weeks);

// Append to root
const root = document.querySelector('#root');
root.replaceChildren();
calendar.weeks.forEach((week) => root.appendChild(week));
