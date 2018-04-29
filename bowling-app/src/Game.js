function Game() {
  this.gFrames = [],
  this.rolls = [],    
  this.bonus = [],
  this.frameNum = 1,
  this.rollNum = 1;
}

Game.prototype.play = function(score) {
  this.applyBonus(score);
  if (this.frameNum === 11) return;

  if (this.rollNum === 1) {
    this.makeFirstRoll(score);
    return;
  } else {
    this.makeSecondRoll(score);
  }
};

Game.prototype.makeFirstRoll = function(score) {
  this.roll(score);
  this.isStrike(score) ? this.startNextFrame() : this.incrementRoll();
};

Game.prototype.makeSecondRoll = function(score) {
  this.roll(score);
  this.incrementRoll();
  this.incrementFrame();
};

Game.prototype.applyBonus = function(score) {
  this.gFrames.forEach(frame => {
     if (frame.applyBonus(score)) this.bonus.push(score);
  });
};

Game.prototype.roll = function(score) {
  this.rolls.push(score);
  this.gFrames[this.frameNum - 1].setRoll(this.rollNum, score, this.frameNum);
};

Game.prototype.score = function() {
  let rolls, bonus;
  rolls = this.rolls[0] ? this.rolls.reduce((a, b) => a + b) : 0;
  bonus = this.bonus[0] ? this.bonus.reduce((a, b) => a + b) : 0;
  return rolls + bonus;
};

Game.prototype.isStrike = function(score) {
  return score === 10;
};

Game.prototype.startNextFrame = function() {
  this.rollNum = 1;
  this.incrementFrame();
};

Game.prototype.incrementFrame = function() {
  this.frameNum++;
};

Game.prototype.incrementRoll = function() {
  this.rollNum === 1 ? this.rollNum++ : this.rollNum--;
};

Game.prototype.setupGame = function(Frame) {
  for(var i = 0; i < 10; i++) {
    this.gFrames.push(new Frame());
  }
};

