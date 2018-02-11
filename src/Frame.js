const MAX_SCORE = 10;

function Frame (finalFrame = false){
  this.rolls = []
  this.isFinalFrame = finalFrame
  this.bonusRolls = []
}

Frame.createFrame = function(finalFrame) {
  var frame = new Frame(finalFrame)
  return frame
}

Frame.prototype.addRoll = function(pins){
  if(this._isAboveMaxScore(pins) && !this.isFinalFrame ) throw "Roll exceeds max pins"
  this.rolls.push(pins)
}

Frame.prototype.isStrike = function(){
  return this.rolls[0] === MAX_SCORE
}

Frame.prototype.isSpare = function(){
  return this.score() === MAX_SCORE && this.rolls[0] !== MAX_SCORE
}

Frame.prototype.score = function(){
  return this.rolls.reduce((total, roll) => total + roll,0) + this.bonusRolls.reduce((total, roll) => total + roll,0)
}

Frame.prototype._isAboveMaxScore = function(pins){
  return this.score() + pins > MAX_SCORE
}

Frame.prototype.addBonusRolls =  function(pins){
  return this.bonusRolls.push(pins)
}

Frame.prototype.isComplete = function(){
  if(this.isFinalFrame){
    if(this.rolls.length === 3){
      return true
    } else if (this.isSpare() || this.isStrike() || this.rolls.length === 1){
      return false
    } else if (this.score === 20) {
      return false
    } else {
      return true
    }
  } else {
  return this.isStrike() || this.rolls.length === 2
  }
}
