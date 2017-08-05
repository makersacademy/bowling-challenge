function Game() {
  this.frames = [];
  this._score = 0;
}

Game.prototype.getScore = function () {
  this.calculateScore();
  return this._score;
};

Game.prototype.calculateScore = function () {
  var score = 0;
  this.frames.forEach(function (frame) {
    score += frame.getScore();
  });
  this._score = score;
};

Game.prototype.setFrames = function () {
  for (var i = 0; i < 10; i++) {
    this.frames.push(new Frame(i));
  }
};

Game.prototype.play = function() {
  this.frames.forEach(function (frame) {
    frame.firstRoll(randomPins());
    frame.secondRoll(randomPins());
  });
};

function randomPins() {
  return Math.floor(Math.random() * 10) + 1;
}
