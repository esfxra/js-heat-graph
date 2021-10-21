import Day from './Day';
import Week from './Week';

class Calendar {
  // Where data is an object with all dates, and all contributions
  constructor(data) {
    // Create a bunch of weeks
    // ... with a bunch of days
    // ... while assigning the respective contributions
    // this.data = data;
    // this.days = [];
    this.weeks = createWeeks(data);
  }

  createDays() {
    // Loop todos los días
    // Loop through activity, create days and weeks, append to root
    for (let i = 0; i < data.length; i++) {
      // day = createDay(activity[i].date.day);
      // day = shapeDay(day);
      // day = paintDay(day, activity[i].activity);
      const day = new Day(data[i].date.day, data[i].activity);
      day.shapeDay();
      day.paintDay();
    }

    return [d1, d2, d3, d4];
  }

  assignWeeks(days) {
    days.forEach((day) => {
      if (day.date.weekday % 7 == 0) {
        // Close week
      }
    });

    this.weeks = [w1, w2, w3, w4];
  }

  createWeeks(data) {
    const days = this.createDays(data);

    this.weeks = this.assignWeeks(days);
  }
}

const calendar = new Calendar(data);
