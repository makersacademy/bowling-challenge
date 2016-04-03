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

Frame.prototype.b1 = function(pins) {
  if (pins === 10) {this.strike = true;}
  this.first=pins


}

Frame.prototype.b2 = function(pins) {
  if (this.first + pins === 10) {
    this.spare = true;}
  this.second=pins
}

Frame.prototype.score = function() {
  if (this.strike) {return ((this.total)+(this.first))}
  if (this.spare)  {return ((this.total)+(this.first)+this.second)}
  else {return this.first + this.second}
}
Frame.prototype.bonus = function(total) {
  this.total = total
}
