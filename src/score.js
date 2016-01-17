function Score() {
  this.scores = [];
}

Score.prototype.giveScore = function(pins) {
  this.scores = [];
  var total = 0;
  var flattenedPins;
  var arrayRemainder;
  for(var i = 0; i < (pins.length-1); i++) {
    if(pins[i][0] === 10) { // strike
      arrayRemainder = pins.slice(i+1);
      flattenedPins = [].concat.apply([], arrayRemainder);
      total += 10;
      if(typeof flattenedPins[0] !== 'undefined') {total += flattenedPins[0];}
      if(typeof flattenedPins[1] !== 'undefined') {total += flattenedPins[1];}
      this.scores.push(total);
    } else if(pins[i][0] + pins[i][1] === 10) { // spare
      arrayRemainder = pins.slice(i+1);
      flattenedPins = [].concat.apply([], arrayRemainder);
      total += (10 + flattenedPins[0])
      this.scores.push(total);
    } else {
      total += (pins[i][0] + pins[i][1])
      this.scores.push(total);
    }
  }

  var sum = (pins[pins.length-1]).reduce(add, 0);

  this.scores.push(total + sum);
  return this.scores;
};

function add(a, b) {
    return a + b;
}
