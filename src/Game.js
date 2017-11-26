function Game(){
  this.rollOne = true
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
      score += this._sumScoresInFrame(key)
    }
  }
  return score;
}

Game.prototype.getCurrentFrame = function () {
  return this.currentFrame
}

// ADD SCORE

Game.prototype.addRoll = function (roll) {
  if (roll > 10) {
    throw("You can't knock down more than 10 pins")
  }
    if (this.currentFrame <= 10) {
      if (this.isRollOne()) {
        this.frames[this.currentFrame].setRollOne(roll)
        this._setRollOneFalse()
      } else {
        this.frames[this.currentFrame].setRollTwo(roll)
        this.addFrame()
        this._setRollOneTrue()
      }
    }
};


// BOOLEAN

Game.prototype.isRollOne = function(){
  return this.rollOne
}
// PRIVATE

Game.prototype.addFrame = function() {
  if (this.currentFrame < 10){
    this.currentFrame += 1
  }
}

Game.prototype._sumScoresInFrame = function(key){
  return this.frames[key].getRollOne()
   + this.frames[key].getRollTwo()
    + this.frames[key].getBonus()
}

Game.prototype._setRollOneFalse = function(){
  this.rollOne = false
}

Game.prototype._setRollOneTrue = function(){
  this.rollOne = true
}
