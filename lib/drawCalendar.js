function drawCalendar(activity) {
  const root = document.querySelector("#root");

  let day;
  let week = document.createElement("div");

  for (let i = 0; i < activity.length; i++) {
    // Create new day element
    day = document.createElement("div");
    day.appendChild(document.createTextNode(activity[i].activity));
    // Add styles to day
    day.classList.add("day");
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
