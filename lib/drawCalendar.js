function drawCalendar(calendar) {
  const root = document.querySelector("#root");

  let paragraph;
  let text;
  let out;

  for (let i = 0; i < calendar.length; i++) {
    out = document.createElement("p");
    out.appendChild(document.createTextNode(calendar[i]));

    root.appendChild(out);
  }
}
