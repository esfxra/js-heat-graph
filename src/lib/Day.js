class Day {
  constructor(date, activity) {
    this.date = date;
    this.activity = activity;

    this.node = document.createElement('div');
    this.node.textContent = this.date.day;
    this.shape();
    this.paint();
  }

  shape() {
    this.node.style.width = '30px';
    this.node.style.height = '30px';
    this.node.style.margin = '2.5px';
    this.node.style.border = '1px solid grey';
  }

  paint() {
    if (this.activity === 0) {
      this.node.style.backgroundColor = '#b4c3c9';
    }

    if (this.activity > 0 && this.activity <= 4) {
      this.node.style.backgroundColor = '#6a8793';
    }

    if (this.activity > 4 && this.activity <= 8) {
      this.node.style.backgroundColor = '#395f6e';
    }

    if (this.activity > 8) {
      this.node.style.backgroundColor = '#08384b';
    }
  }
}

export default Day;
