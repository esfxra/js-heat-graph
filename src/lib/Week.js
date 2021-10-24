export default class Week {
  // days: Node[]
  // days: Day[] <--- potential solution
  constructor(days) {
    this.node = document.createElement('div');

    // day: Node
    days.forEach((day) => {
      this.node.appendChild(day);
    });
    console.log(days[0]);

    // Check if more days need to be added
    // if (days.length < 7) {
    //   const children = this.node.childNodes;
    //   children.forEach((child) => {
    //     child.style.position = 'relative';
    //     child.style.bottom = '-10px';
    //   });
    // }

    this.shape();
  }

  shape() {
    this.node.style.display = 'inline-grid';
  }
}
