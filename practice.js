const date = new Date(2021, 1, 15, 22, 15); // febrero 15 2021 10 15 pm
console.log(date);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createDate() {
  const year = 0;
  const month = 0;
  const day = 0;

  const date = new Date(year, month, day);

  // getRandomIntInclusive(10, 21)
}
