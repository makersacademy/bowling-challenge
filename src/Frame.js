function Frame(roll = new Roll()){
  this.roll = roll;
  this.scores = [];
}

Frame.prototype.bowl = function(){
  this.resetPins()
  this.roll.go(this.remainingPins());
  this.scores.push(this.roll.result())
  return this.roll.result
}

Frame.prototype.firstRollScore = function(){
  return this.scores[0];
}

Frame.prototype.secondRollScore = function(){
  return this.scores[1];
}

Frame.prototype.remainingPins = function(){
  return (this.scores.length == 0 ? 10 : 10 - this.scores[0])
}

Frame.prototype.resetPins = function(){
  if (this.scores.length >= 2) this.scores.length = []
}

// Frame.prototype.pinCheck = f
