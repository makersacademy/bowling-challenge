function Player (){
  this.frames = [];
  this.xtra1 = null;
  this.xtra2 = null;
  for (var i = 0; i < 10; i++) {
    this.frames.push(new Frame());
  };
};

Player.prototype.play = function(i, pins) {
  var frame = this.frames[i];
  frame.bowl(pins);
  this.isBonusPlay

};

Player.prototype.playXtra = function(pins) {
  if (this.xtra1 == null) {
    this.xtra1 = pins;
  } else if (this.extra2 == null) {
    this.xtra2 = pins;
  } else throw 'Game Over'
}


Player.prototype.isBonusPlay = function() {
  this.play(0, 9);
  this.play(0, 1);
  var score = this.score(0);
  return score;
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
