Frame = function() {
  this.bowled = [];
};

Frame.prototype.add_bowl = function(pins) {
  if (this.bowled.length === 2) {
    throw new Error("You've bowled twice already this frame!");
  };
  this.bowled.push(pins);
};

Frame.prototype.result = function() {
  var sum = this.bowled.reduce(function(a, b) {
    return a + b;
  });
  if (this.bowled.indexOf(10) == 0) {
    return "Strike!";
  } else if ( sum === 10 ) {
    return "Spare!";
  } else {
    return null;
  };
};