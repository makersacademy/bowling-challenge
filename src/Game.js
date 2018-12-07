function Game() {
  this.currentFrame = 1;
  this.currentFramePoints = 0;
  this.roll = 1;
  this.frameScores = [0];
  this.bonus = [null];
  this.spareBonus = 0;
  this.totalpoints = 0;
}

Game.prototype.getFramePoints = function () {
  return this.currentFramePoints;
};

Game.prototype.getCurrentFramePoints = function () {
  return this.frameScores[this.currentFrame];
};

Game.prototype.getPreviousFramePoints = function () {
  return this.frameScores[this.currentFrame - 1];
};

Game.prototype.calculateFramePoints = function (pins_string) {
  var pins = Number(pins_string);
  this.currentFramePoints += pins;
  this.setBonus(pins,this.currentFramePoints);
  if (this.isPreviousBonusSpare() == true) {
    this.storeSpareBonus(pins);
  }
  console.log('cfp form update f:' + this.currentFramePoints);
  this.frameScores[this.currentFrame] = this.currentFramePoints;
};
//change function name
Game.prototype.updateFrame =  function () {
  if (this.roll == 2 || this.bonus[this.currentFrame] === "strike") {
    this.finishFrame();
  } else if (this.roll == 1) {
    this.roll += 1;
  }
};

Game.prototype.finishFrame = function() {
  if (this.bonus[this.currentFrame - 1] !== null) {
    this.updatePreviousFrame();
  }
  this.currentFramePoints = 0;
  this.currentFrame += 1;
  this.roll = 1;
};

Game.prototype.setBonus = function(pins, framePoints) {
  if (pins === 10) {
    this.bonus[this.currentFrame] = "strike";
  } else if (framePoints === 10) {
    this.bonus[this.currentFrame] = "spare";
  } else {
    this.bonus[this.currentFrame] = null;
  }
};

Game.prototype.checkBonus = function() {
  return this.bonus;
};

Game.prototype.storeSpareBonus = function(pins) {
  this.spareBonus = pins;
};

Game.prototype.isPreviousBonusSpare = function() {
  if (this.bonus[this.currentFrame - 1] === "spare") {
    return true;
  };
};

Game.prototype.updatePreviousFrame = function() {
  if (this.isPreviousBonusSpare() == true) {
    this.frameScores[this.currentFrame - 1] += this.spareBonus;
  } else {
    this.frameScores[this.currentFrame - 1] += this.frameScores[this.currentFrame];
  }
};

Game.prototype.total = function() {
  this.totalpoints = 0;
   var that = this;
   this.frameScores.forEach(function(value) {
     that.totalpoints += value;
   });
   return this.totalpoints;
};
