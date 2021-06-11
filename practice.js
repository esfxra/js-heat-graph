// Setting up aliases
const DateTime = luxon.DateTime;
const Duration = luxon.Duration;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createDate(year, month, day, hour = 12, minute = 00) {
  return DateTime.fromObject({
    year: year,
    month: month,
    day: day,
    hour: hour,
    minute: minute,
  });
}

function createCalendar(start, end) {
<<<<<<< HEAD
  // const result = start.plus({ day: 1 });
  const difference = end.diff(start, "days");
  // console.log(difference);
  // console.log(difference.days);
=======
  const x = start.getDate();
  const y = end.getDate();
>>>>>>> ad85f54d2c41075eaf5c0356fdbe506d28f5ec1a

  const calendar = [];

  for (let i = 0; i <= difference.days; i++) {
    const date = start.plus({ day: i });
    calendar.push(date.toLocaleString());
  }
  return calendar;
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
const start = createDate(2021, 2, 1);
const end = createDate(2021, 3, 15);

// Create calendar
const calendar = createCalendar(start, end);
console.log(calendar);

// Populate calendar with activity data
const activity = dailyActivity(calendar);
console.log(activity);

// activity.forEach((activity) => {
//   console.log(activity.date.toLocaleString());
// });
