function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkStringLenth(string, max) {
  return string.length <= max;
}

console.log(getRand(1, 10))
console.log(checkLen('sdfs', 10));
