// const date = new Date(2021, 1, 15, 22, 15); // febrero 15 2021 10 15 pm
// console.log(date);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createDate(year, month, day, hour = 12, minute = 00) {
  return new Date(year, month, day, hour, minute);
}

function createCalendar(start, end) {
  const x = start.getDay();
  const y = end.getDay();

  // Create an array
  let result = [];

  // Populate the array with dates
  for (let i = x; i <= y; i++) {
    result.push(createDate(2021, 1, i));
  }

  return result;
}

function dailyActivity(calendar) {
  let result = [];
  calendar.forEach((day) =>
    result.push({
      date: day,
      activity: getRandomIntInclusive(0, 10),
    })
  );

  return result;
}

// Feb 2021 Week 1
const start = createDate(2021, 1, 1);
const end = createDate(2021, 1, 5);

// Create calendar
const calendar = createCalendar(start, end);

// Populate calendar with activity data
const activity = dailyActivity(calendar);
console.log(activity);
