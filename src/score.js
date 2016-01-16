function Score() {
  this.scores = [];
}

Score.prototype.giveScore = function(pins) {
  var total = 0;
  var flattenedPins;
  var arrayRemainder;
  for(var i = 0; i < (pins.length - 1); i++) {
    if(pins[i][0] === 10) { // strike
      arrayRemainder = pins.slice(i+1);
      flattenedPins = [].concat.apply([], arrayRemainder);
      total += (10 + flattenedPins[0] + flattenedPins[1])
    } else if(pins[i][0] + pins[i][1] === 10) { // spare
      arrayRemainder = pins.slice(i+1);
      flattenedPins = [].concat.apply([], arrayRemainder);
      total += (10 + flattenedPins[0])
    } else {
      total += (pins[i][0] + pins[i][1])
    }
    this.scores.push(total);
  }
  // And, now for the final round
  total += pins[pins.length -1][0] + pins[pins.length -1][1];
  this.scores.push(total);
  return this.scores;
};
