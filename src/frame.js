function Frame() {
  this.first = 0
  this.second= 0 
  this.strike=false
  this.spare=false
}

Frame.prototype.strike = function() {

}

Frame.prototype.b1 = function(pins) {
  if (pins === 10) {this.strike = true;}
  else {this.first=pins;}


}

Frame.prototype.b2 = function(pins) {
  if (this.first + pins === 10) {
    this.spare = true;}
  else { this.second=pins;}
}

Frame.prototype.score = function() {
  return this.first + this.second
}