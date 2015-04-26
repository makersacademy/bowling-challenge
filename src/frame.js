Frame = function() {
  this.bowled = [];
};

Frame.prototype.add_bowl = function(pins) {
  if (this.bowled.length === 2) {
    throw new Error("You've bowled twice already this frame!");
  };
  this.bowled.push(pins);
};

Frame.prototype.isStrike = function() {
  if (this.bowled.indexOf(10) == 0) {
    return true;
  } else {
    return false;
  };
};

Frame.prototype.isSpare = function() {
  if ( this.bowled[0] !== 10 && this.knockedDown() === 10 ) {
    return true;
  } else {
    return false;
  };
};

Frame.prototype.knockedDown = function()  {
  var sum = this.bowled.reduce(function(a, b) {
    return a + b;
  });
  return sum;
};
