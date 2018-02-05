const MAX_SCORE = 10;

function Frame (finalFrame = false){
  this.rolls = []
  this.isFinalFrame = finalFrame

}

Frame.createFrame = function(firstRollScore) {
  var frame = new Frame()
  return frame
}

Frame.prototype.addRoll = function(pins){
  this.rolls.push(pins)
}

Frame.prototype.isStrike = function(){
  return this.rolls[0] === MAX_SCORE
}

Frame.prototype.isSpare = function(){
  return this.score() === MAX_SCORE && this.rolls[0] !== MAX_SCORE
}

Frame.prototype.score = function(){
  return this.rolls.reduce((total, roll) => total + roll)
}

Frame.prototype.isComplete = function(){
  return this.isStrike() || this.rolls.length === 2
}
