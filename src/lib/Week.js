export default class Week {
  constructor(days) {
    this.node = document.createElement('div');

    days.forEach((day) => {
      this.node.appendChild(day);
    });

    this.shape();
  }

  shape() {
    this.node.style.display = 'inline-grid';
  }
}
