import { DateTime } from 'luxon';
import Day from './Day';
import Week from './Week';

class Calendar {
  // Where 'data' is an array of data points, and 'selector' is the root node selector
  constructor(data, selector) {
    // Prepare root node
    const root = document.querySelector(selector);
    root.replaceChildren();
    root.style.display = 'inline-flex';

    // Convert the date strings in the data points
    const convertedData = data.map((item) => ({
      date: DateTime.fromISO(item.date),
      activity: item.activity,
    }));

    // Separate data points in weeks
    this.weeks = this.createWeeks(convertedData);

    // Append to the root node
    this.weeks.forEach((week) => root.appendChild(week));
  }

  createWeeks(data) {
    const weeks = [];
    let currentWeek = [];

    // Mock empty days for the first week (if the week is incomplete)
    // Determine the number of missing days:
    const missingDays = data[0].date.weekday - 1;
    if (missingDays != 0) {
      for (let i = 0; i < missingDays; i++) {
        const emptyDay = new Day('', 0);
        currentWeek.push(emptyDay.node);
      }
    }

    for (let i = 0; i < data.length; i++) {
      const day = new Day(data[i].date, data[i].activity);
      currentWeek.push(day.node);

      // Using weekday, which describes the days of the week from 1 to 7
      // 1 -> Monday
      // ...
      // 7 -> Sunday
      if (data[i].date.weekday == 7) {
        // Convert current week to a DOM node
        const week = new Week(currentWeek);

        // Add current week to the weeks array
        weeks.push(week.node);

        // Reset week
        currentWeek = [];
      }
    }

    // Add any remaining days to calendar, even if these do not complete a week
    if (currentWeek.length != 0) {
      // Convert current week to a DOM node
      const week = new Week(currentWeek);

      // Add current week to the weeks array
      weeks.push(week.node);

      // Reset week
      currentWeek = [];
    }

    return weeks;
  }
}

export { Calendar };
