function drawCalendar(activity) {
  const root = document.querySelector("#root");

  let day;
  let week = document.createElement("div");

  // Handle missing days on first week

  if (activity[0].date.weekday !== 1) {
    for (let j = 1; j < activity[0].date.weekday; j++) {
      day = document.createElement("div");
      day.appendChild(document.createTextNode(j));
      day.classList.add("day", "no-activity");
      week.appendChild(day);
    }
  }

  for (let i = 0; i < activity.length; i++) {
    // Create new day element
    day = document.createElement("div");
    day.appendChild(document.createTextNode(activity[i].date.day));
    // Add styles to day
    day.classList.add("day");

    // #08384b
    // #204b5d
    // #395f6e
    // #527381
    // #6a8793
    // #839ba5
    // #9cafb7
    // #b4c3c9
    // #cdd7db
    // #e6ebed
    // #ffffff

    if (activity[i].activity === 0) {
      day.classList.add("no-activity");
    }

    if (activity[i].activity > 0 && activity[i].activity <= 4) {
      day.classList.add("few-activity");
    }

    if (activity[i].activity > 4 && activity[i].activity <= 8) {
      day.classList.add("some-activity");
    }

    if (activity[i].activity > 8) {
      day.classList.add("plenty-activity");
    }

    console.log(activity.length);

    // Append day to current week element
    week.appendChild(day);
    // Add styles to week
    week.classList.add("week");

    // Append week
    root.appendChild(week);

    if (activity[i].date.weekday % 7 == 0) {
      // Reset element at the end of the week
      week = document.createElement("div");
    }
  }
}

export { drawCalendar };
