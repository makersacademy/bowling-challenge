function Player (){
  this.frames = [];
  for (var i = 0; i < 10; i++) {
    this.frames.push(new Frame());
  };
};

Player.prototype.play = function(i, pins) {
  var frame = this.frames[i];
  frame.bowl(pins);
  return 10 - pins;
};


Player.prototype.game = function() {
  this.play(0, 9);
  this.play(0, 1);
  var score = this.score(0);
  return score;
};

Player.prototype.score = function(i) {
  var score = 0;
  for (var y = 0; y <= i; y++) {
    var current = this.frames[y];
    if (current.strike) {
      score += this.calcStrike(y + 1);
    } else if (current.isSpare()) {
      score += this.calcSpare(y+1);
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
  if (frame.strike) {
    score = 20 + next.go1;
  } else {
    score = frame.go1 + frame.go2 + 10;
  };
  return score;
};

Player.prototype.calcSpare = function(i) {
  var score = 0;
  var frame = this.frames[i];
  score += 10 + frame.go1;
  return score;
};
