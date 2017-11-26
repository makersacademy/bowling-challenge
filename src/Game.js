function Game(){
  this.currentFrame = 1
  this.frames = {
    1: new Frame(),
    2: new Frame(),
    3: new Frame(),
    4: new Frame(),
    5: new Frame(),
    6: new Frame(),
    7: new Frame(),
    8: new Frame(),
    9: new Frame(),
    10: new Frame(),
  }
}

// GETTERS

Game.prototype.getCurrentScore = function () {
  var score = 0
  for (var key in this.frames) {
    if (this.frames.hasOwnProperty(key)) {
      score += this.frames[key].getRollOne() + this.frames[key].getRollTwo() + this.frames[key].getBonus()
    }
  }
  return score;
}

Game.prototype.getCurrentFrame = function () {
  return this.currentFrame
}

// ADD SCORE

Game.prototype.addRoll = function (roll) {
  if (this.currentFrame <= 10) {
    this.frames[this.currentFrame].setRollOne(roll)
    this.addFrame()
  }
};

// PRIVATE

Game.prototype.addFrame = function() {
  if (this.currentFrame < 10){
    this.currentFrame += 1
  }
}
