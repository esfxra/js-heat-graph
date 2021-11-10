import { DateTime } from 'luxon';

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

function generateData(start, end) {
  const difference = end.diff(start, 'days');

  // Create dates
  const dates = [];
  for (let i = 0; i <= difference.days; i++) {
    const date = start.plus({ day: i });
    dates.push(date);
  }

  // Add activity, shape data
  let data = [];
  dates.forEach((date) =>
    data.push({
      date: date.toISO(),
      activity: getRandomIntInclusive(0, 10),
    })
  );

  return data;
}

export { createDate, generateData };
