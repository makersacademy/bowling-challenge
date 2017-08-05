function Game() {
  this.frames = [];
  this.bonuses = [];
  this._score = 0;
  this._setFrames();
}

Game.prototype.getScore = function() {
  this.calculateScore();
  return this._score;
};

Game.prototype.calculateScore = function() {
  var score = 0;
  this.frames.forEach(function(frame) {
    score += frame.getScore();
  });
  this.bonuses.forEach(function(bonus) {
    score += bonus.getScore();
  });
  this._score = score;
};

Game.prototype._setFrames = function() {
  for (var i = 1; i < 11; i++) {
    this.frames.push(new Frame(i));
  }
};

Game.prototype.play = function() {
  var game = this;
  game.frames.forEach(function (frame) {
    var lastFrame = lastFrame || new Frame();
    var currentFrame = Game.rollFrame(frame);
    if (lastFrame && lastFrame.bonusType()) {
      game.createBonus(currentFrame);
    }
    lastFrame = currentFrame;
  });
};

Game.prototype.createBonus = function(frame) {
  var bonus = new Bonus(frame.bonusType(), frame.frameNumber);
  this.bonuses.push(bonus);
};

Game.prototype.bonusRoll = function () {
  var bonusRoll;
  var type = this.frames[9].bonusType();
  if (type) {
    bonusRoll = Game.rollBonusFrame(new Frame(), type);
  }
  this.frames.push(bonusRoll);
};

Game.prototype.isPerfect = function() {
  return this.getScore() === 300;
};

Game.prototype.isGutter = function () {
  return this.getScore() === 0;
};

Game.randomPins = function(max) {
  return Math.floor(Math.random() * (max + 1));
};

Game.rollFrame = function(frame) {
  var roll = Game.randomPins(10);
  frame.firstRoll(roll);
  if (!frame.isStrike()) {
    frame.secondRoll(Game.randomPins(10 - roll));
  }
  return frame;
};

Game.rollBonusFrame = function(frame, type) {
  var roll = Game.randomPins(10);
  frame.firstRoll(roll);
  if (type === "strike") {
    frame.secondRoll(Game.randomPins(10 - roll));
  }
  return frame;
};
