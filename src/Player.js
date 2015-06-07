function Player (){
  this.frames = [];
  this.round = 0;
  this.xtra1 = null;
  this.xtra2 = null;
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
  var xtra = this.xtra1 && this.xtra2;
  if (xtra != null) {
    throw "Game Over!"
  } else if (this.xtra1 == null) {
    this.xtra1 = pins;
  } else if (this.extra2 == null) {
    this.xtra2 = pins;
  } else throw 'Game Over'
};

Player.prototype.play = function(pins) {
  var i = this.round;
  var strike = 10;
  var lastFrame = this.frames[9];
  var lastSum = lastFrame.go1 + lastFrame.go2;

  if (i <= 9) {
    if (pins == 10) {
      this.bowl(i,pins);
      this.round ++;
    } else if (this.frames[i].go1 != null) {
      this.bowl(i,pins);
      this.round ++;
    } else {
      this.bowl(i,pins);
    };
  } else if (lastFrame.strike) {
    this.bowlXtra(pins);
  } else if (lastSum == 10){
    this.bowlXtra(pins);
    this.xtra2 = 0;
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
          score += prevPins + this.xtra1 + this.xtra2;
        } else {
          score += this.calcStrike(y + 1);
        }
    } else if (current.isSpare()) {
        if ((y+1) > lastFrame) {
          score += prevPins + this.xtra1;
        } else {
          score += this.calcSpare(y+1);
        };
    } else {
      score += current.go1 + current.go2;
    };
  };
  return score;
};

Player.prototype.calcStrike = function(i) {
  var frame = this.frames[i];
  var next = this.frames[i+1];
  var score = 0;
  var prevPins = 20;
  if (frame.strike) {
    score = prevPins + next.go1;
  } else {
    score = frame.go1 + frame.go2 + 10;
  };
  return score;
};

Player.prototype.calcSpare = function(i) {
  var score = 0;
  var prevPins = 10;
  var frame = this.frames[i];
  score += prevPins + frame.go1;
  return score;
};
