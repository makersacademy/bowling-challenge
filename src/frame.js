function Frame() {
  this.first = 0
  this.second= 0 
  this.strike=false
  this.spare=false

}

Frame.prototype.isStrike = function() {
  return this.strike
}

Frame.prototype.isSpare = function() {
  return this.spare
}

Frame.prototype.firstBowlPins = function(pins) {
  if (pins === 10) {this.strike = true}
  this.first=pins
  this.complete=false
}

Frame.prototype.secondBowlPins = function(pins) {
  if (this.complete === undefined) {throw 'Please throw first bowl'}
  if (this.isComplete()) {throw 'this frame is complete please start next one!'}
  if (this.first + pins === 10) {this.spare = true;}
  this.second=pins
  this.complete = true
}

Frame.prototype.totalScore = function() {
  if (this.strike) {return ((this.total)+(this.first))}
  if (this.spare)  {return ((this.total)+(this.first)+this.second)}
  else {return this.first + this.second}
}
Frame.prototype.bonus = function(total) {
  this.total = total
}


Frame.prototype.isComplete = function() {
  if (this.complete || this.strike) {return true}
    else {false} 
}