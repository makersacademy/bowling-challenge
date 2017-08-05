function Game() {
  this.PIN_NUMBER = 10;
  this.frames = [];
  this._score = 0;
}

Game.prototype.getScore = function() {
  this.calculateScore();
  return this._score;
};

Game.prototype.calculateScore = function() {
  var score = 0;
  this.frames.forEach(function (frame) {
    score += frame.getScore();
  });
  this._score = score;
};

Game.prototype.setFrames = function() {
  for (var i = 1; i < 11; i++) {
    this.frames.push(new Frame(i));
  }
};

Game.prototype.play = function() {
  this.frames.forEach(function (frame) {
    var roll = randomPins();
    frame.firstRoll(roll);
    if (!frame.isStrike()) {
      frame.secondRoll(this.PIN_NUMBER - roll);
    }
  });
};

function randomPins() {
  return Math.floor(Math.random() * 10);
}
