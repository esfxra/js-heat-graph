import { DateTime } from "luxon";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createDate(year, month, day, hour = 12, minute = 0) {
  return DateTime.fromObject({
    year: year,
    month: month,
    day: day,
    hour: hour,
    minute: minute,
  });
}

function createCalendar(start, end) {
  const difference = end.diff(start, "days");

  const calendar = [];

  for (let i = 0; i <= difference.days; i++) {
    const date = start.plus({ day: i });
    calendar.push(date);
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

export { createDate, createCalendar, dailyActivity };
