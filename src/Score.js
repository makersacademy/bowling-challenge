function Score() {
}

Score.prototype.new = function(pins) {
  return Math.floor(Math.random() * (pins + 1));
}
