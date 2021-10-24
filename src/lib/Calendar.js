import Day from './Day';
import Week from './Week';

class Calendar {
  constructor(data) {
    this.weeks = this.createWeeks(data);
  }

  createWeeks(data) {
    const calendar = [];

    // Create empty days for incomplete weeks
    const missingDays = [];
    if (data[0].date.weekday != 1) {
      // while (missingDays.length < 7) {
      // }
      for (let i = 1; i < data[0].date.weekday; i++) {
        const emptyDay = new Day('', 0);
        missingDays.push(emptyDay.node);
      }
    }

    console.log(missingDays);

    let currentWeek = [...missingDays];

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
        // Add current week to calendar
        calendar.push(week.node);
        // Reset week
        currentWeek = [];
      }
    }

    // Add any remaining days to calendar, even if these do not complete a week
    if (currentWeek.length != 0) {
      // Convert current week to a DOM node
      const week = new Week(currentWeek);
      // Add current week to calendar
      calendar.push(week.node);
      // Reset week
      currentWeek = [];
    }

    return calendar;
  }
}

export { Calendar };
