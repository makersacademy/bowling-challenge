Score = function(multiplier, currentPins){
  this.multiplier = multiplier;
  this.currentPins = currentPins;
};

Score.prototype.calculateFrameScore = function () {
  if (this.multiplier === "strike") {
    return 2 * (this.currentPins[0] + this.currentPins[1]);
  } else if (this.multiplier === "spare") {
    return (2 * this.currentPins[0] + this.currentPins[1]);
  } else {
    return (this.currentPins[0] + this.currentPins[1]);
  };
};

// strike and a or b =>    2a + 2b + 2c
// spare   [10,10,y]       2a + 2b + 2c
// strike  [x,y]           2a + 2b + c
// strike  [x,spare]       2a + 2b + c
// spare   [10,x,y]        2a + 2b + c
// spare   [x,spare]       2a + b + 2c
// spare   [x,y,z]         2a + b + c
// none    [10,y,z]        a + 2b + c
// none    [x,spare]       a + b + 2c

Score.prototype.calculateTenthFrameScore = function () {
  var a = this.currentPins[0];
  var b = this.currentPins[1];
  var c = this.currentPins[2];

  if (this.multiplier === "strike") {
    return (2 * a + 2 * b + c);
  } else if (this.multiplier === "spare") {
    return (2 * a + b + c);
  } else {
    return (a + b + c);
  };
};
