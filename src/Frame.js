const MAX_SCORE = 10;

function Frame (){
  this.rolls = []
}

Frame.createFrame = function(firstRollScore) {
  var frame = new Frame()
  frame.addRoll(firstRollScore)
  return frame
}

Frame.prototype.addRoll = function(pins){
  this.rolls.push(pins)
}

Frame.prototype.isStrike = function(){
  return this.rolls[0] === MAX_SCORE
}

Frame.prototype.isSpare = function(){
  return this.score() === MAX_SCORE && this.rolls[0] !== 10
}

Frame.prototype.score = function(){
  return this.rolls.reduce((total, roll) => total + roll)
}
