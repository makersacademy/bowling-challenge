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
    var currentFrame = rollFrame(frame);
    if (lastFrame && lastFrame.bonusType()) {
      game.createBonus(currentFrame);
    }
    lastFrame = currentFrame;
  });
};

Game.prototype.createBonus = function(frame) {
  var bonus = new Bonus(frame.bonusType());
  bonus.calculate(frame);
  this.bonuses.push(bonus);
};

Game.prototype.bonusRoll = function () {
  var bonusRoll;
  var type = this.frames[9].bonusType();
  if (type) {
    bonusRoll = rollBonusFrame(new Frame(), type);
  }
  return bonusRoll;
};

function randomPins(max) {
  return Math.floor(Math.random() * (max - 1));
}

function rollFrame(frame) {
  var roll = randomPins(10);
  frame.firstRoll(roll);
  if (!frame.isStrike()) {
    frame.secondRoll(randomPins(10 - roll));
  }
  return frame;
}

function rollBonusFrame(frame, type) {
  var roll = randomPins(10);
  frame.firstRoll(roll);
  if (type === "strike") {
    frame.secondRoll(randomPins(10 - roll));
  }
  return frame;
}
