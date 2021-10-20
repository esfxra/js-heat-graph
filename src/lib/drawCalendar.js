// Create new 'day' element
function createDay(text) {
  const day = document.createElement('div');
  day.appendChild(document.createTextNode(text));

  return day;
}

// Add styles that define the shape of the 'day' element
function shapeDay(day) {
  day.classList.add('day');

  return day;
}

// Add styles that define the color of the 'day' element
function paintDay(day, activity) {
  if (activity === 0) {
    day.classList.add('no-activity');
  }

  if (activity > 0 && activity <= 4) {
    day.classList.add('few-activity');
  }

  if (activity > 4 && activity <= 8) {
    day.classList.add('some-activity');
  }

  if (activity > 8) {
    day.classList.add('plenty-activity');
  }

  return day;
}

function missingDays(week, firstDate) {
  if (firstDate.date.weekday === 1) {
    return week;
  }

  for (let j = 1; j < firstDate.date.weekday; j++) {
    let day = createDay(j);
    day = shapeDay(day);
    day = paintDay(day, 0);

    week.appendChild(day);
  }

  return week;
}

// Draws calendar
function drawCalendar(activity) {
  const root = document.querySelector('#root');
  root.replaceChildren();

  let day;
  let week = document.createElement('div');

  /**
   * @TODO Modify logic to split responsibilities
   * 1. Create array with missing days
   * 2. Create array with actual days (from activity array)
   * 3. Join arrays
   *     const calendar = [...array1, ...array2]
   * 4. Append calendar array to root
   *     root.appendChild(calendar);
   */

  week = missingDays(week, activity[0]);

  // Loop through activity, create days and weeks, append to root
  for (let i = 0; i < activity.length; i++) {
    day = createDay(activity[i].date.day);
    day = shapeDay(day);
    day = paintDay(day, activity[i].activity);

    // Append day to current week element
    week.appendChild(day);
    // Add styles to week
    week.classList.add('week');

    // Append week
    root.appendChild(week);

    // Reset week if iterating at the last weekday
    if (activity[i].date.weekday % 7 == 0) {
      week = document.createElement('div');
    }
  }
}

export { drawCalendar };
