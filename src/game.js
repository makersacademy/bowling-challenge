function Game() {
  this.frames = [];
  this.bonuses = [];
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
  var game = this;
  game.frames.forEach(function (frame) {
    var roll = randomPins(10);
    var lastFrame = new Frame();
    frame.firstRoll(roll);
    if (!frame.isStrike()) {
      frame.secondRoll(randomPins(10 - roll));
    }
    if (lastFrame.bonusType()) {
      game.createBonus(frame);
    }
  });
};

Game.prototype.createBonus = function(frame) {
  var bonus = new Bonus(frame.bonusType());
  this.bonuses.push(bonus);
};

function randomPins(max) {
  return Math.floor(Math.random() * (max - 1));
}
