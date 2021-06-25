function drawCalendar(activity) {
  const root = document.querySelector("#root");

  let day;
  let week = document.createElement("div");

  for (let i = 0; i < activity.length; i++) {
    // Create new day element
    day = document.createElement("div");
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
      day.style.backgroundColor = "#b4c3c9";
    }

    if (activity[i].activity > 0 && activity[i].activity <= 4) {
      day.style.backgroundColor = "#6a8793";
    }

    if (activity[i].activity > 4 && activity[i].activity <= 9) {
      day.style.backgroundColor = "#395f6e";
    }

    if (activity[i].activity === 10) {
      day.style.backgroundColor = "#08384b";
    }

    // Append day to current week element
    week.appendChild(day);
    // Add styles to week
    week.classList.add("week");

    if (activity[i].date.weekday % 7 == 0) {
      // Append week, and reset element at the end of the week
      root.appendChild(week);
      week = document.createElement("div");
    }
  }
}

export { drawCalendar };
