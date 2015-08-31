function Player (){
  this.frames = [];
  this.round = 0;
  this.extraThrow1 = null;
  this.extraThrow2 = null;
  for (var i = 0; i < 10; i++) {
    this.frames.push(new Frame());
  };
};

Player.prototype.bowl = function(i, pins) {
  console.log(this.round);
  var frame = this.frames[i];
  frame.bowl(pins);
};

Player.prototype.bowlXtra = function(pins) {
  var extra = this.extraThrow1 && this.extraThrow2;
  if (extra != null) {
    throw "Game Over!"
  } else if (this.extraThrow1 == null) {
    this.extraThrow1 = pins;
  } else if (this.extraThrow2 == null) {
    this.extraThrow2 = pins;
  } else throw 'Game Over'
};

Player.prototype.play = function(pins) {
  var i = this.round;
  var strike = 10;
  var lastFrame = this.frames[9];
  var lastSum = lastFrame.firstThrow + lastFrame.secondThrow;

  if (i <= 9) {
    if (pins == 10) {
      this.bowl(i,pins);
      this.round ++;
    } else if (this.frames[i].firstThrow != null) {
      this.bowl(i,pins);
      this.round ++;
    } else {
      this.bowl(i,pins);
    };
  } else if (lastFrame.strike) {
    this.bowlXtra(pins);
  } else if (lastSum == 10){
    this.bowlXtra(pins);
    this.extraThrow2 = 0;
  } else throw 'Game Over!'
};

Player.prototype.score = function(i) {
  var score = 0;
  var prevPins = 10;
  var lastFrame = 9;
  for (var y = 0; y <= i; y++) {
    var current = this.frames[y];
    if (current.strike) {
      if ((y+1) >= lastFrame) {
          score += prevPins + this.extraThrow1 + this.extraThrow2;
        } else {
          score += this.calculateStrike(y + 1);
        }
    } else if (current.isSpare()) {
        if ((y+1) > lastFrame) {
          score += prevPins + this.extraThrow1;
        } else {
          score += this.calculateSpare(y+1);
        };
    } else {
      score += current.firstThrow + current.secondThrow;
    };
  };
  return score;
};

Player.prototype.calculateStrike = function(i) {
  var frame = this.frames[i];
  var next = this.frames[i+1];
  var score = 0;
  var prevPins = 20;
  if (frame.strike) {
    score = prevPins + next.firstThrow;
  } else {
    score = frame.firstThrow + frame.secondThrow + 10;
  };
  return score;
};

Player.prototype.calculateSpare = function(i) {
  var score = 0;
  var prevPins = 10;
  var frame = this.frames[i];
  score += prevPins + frame.firstThrow;
  return score;
};
