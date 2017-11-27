// NEXT - Implement the addition of spare bonus to previous frame's bonus

function Game(bonus){
  this.rollOne = true
  this.bonus = bonus
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
      score += this.frames[key].sumAllRolls()
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
        this._saveRollOne(roll)
      } else {
        this._saveRollTwo(roll)
      }
    }
    // This shouldnt be here as is setting strike bonus regardless of whether 10 was rolled on first or second go
    // if (roll == 10) {
    //   this.setStrikeBonus()
    // }
};


// BOOLEAN

Game.prototype.isRollOne = function(){
  return this.rollOne
}

Game.prototype.isStrikeBonus = function(){
  return this.bonus.isStrike()
}

Game.prototype.isSpareBonus = function () {
  return this.bonus.isSpare()
};

// PRIVATE

Game.prototype.setSpareBonusTrue = function(){
  this.bonus.setSpareTrue()
}

Game.prototype.setSpareBonusFalse = function(){
  this.bonus.setSpareFalse()
}

Game.prototype.setStrikeBonusTrue = function(){
  this.bonus.setStrikeTrue()
}

Game.prototype.setStrikeBonusFalse = function(){
  this.bonus.setStrikeFalse()
}

Game.prototype.addFrame = function() {
  if (this.currentFrame < 10){
    this.currentFrame += 1
  }
}

Game.prototype._setRollOneFalse = function(){
  this.rollOne = false
}

Game.prototype._setRollOneTrue = function(){
  this.rollOne = true
}

Game.prototype._saveRollOne = function(roll){
  this.frames[this.currentFrame].setRollOne(roll)
  this.setSpareBonusFalse()
  if (roll == 10) {
    this.setStrikeBonusTrue()
    // think it should be here - LINE 48
    this.addFrame()
  } else {
    this._setRollOneFalse()
  }
}

Game.prototype._saveRollTwo = function(roll){
  if (roll + this.frames[this.currentFrame].getRollOne() > 10) {
    throw "Your rolls can't sum over 10"
  }
  if (roll + this.frames[this.currentFrame].getRollOne() == 10) {
    this.setSpareBonusTrue()
  }
  this.frames[this.currentFrame].setRollTwo(roll)
  this.addFrame()
  this._setRollOneTrue()
}
