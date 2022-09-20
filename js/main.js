function getRand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkLen(string, max) {
  return string.length <= max;
}
