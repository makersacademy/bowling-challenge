function Game() {
  this.frames = [];
  this.bonuses = [];
  this._setFrames();
}

Game.prototype.getScore = function() {
  var calculator = new ScoreCalculator(this.frames, this.bonuses);
  return calculator.totalScore();
};

Game.prototype._setFrames = function() {
  for (var i = 0; i < 10; i++) {
    this.frames.push(new Frame(i));
  }
};

Game.prototype.play = function() {
  var game = this;
  var lastFrame = lastFrame || new Frame();
  game.frames.forEach(function (frame) {
    var currentFrame = Game.rollFrame(frame);
    if (lastFrame.bonusType()) {
      game.createBonus(lastFrame.bonusType(), currentFrame);
    }
    lastFrame = currentFrame;
  });
  game.bonusRoll();
};

Game.prototype.createBonus = function(type, frame) {
  this.bonuses.push(new Bonus(type, frame.frameIndex));
};

Game.prototype.bonusRoll = function () {
  var type = this.frames[9].bonusType();
  if (type) {
    this.frames.push(Game.rollBonusFrame(new Frame(), type));
  }
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
