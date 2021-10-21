import Day from './Day';

class Week {
  constructor(days) {
    this.days = days;
  }

  static createWeek(count, weekStart, weekEnd) {
    const 

    let days;
    for (let i = 0; i < count; i += 1) {
      days.push(new Day());
    }

    return new Week(days);
  }
}
