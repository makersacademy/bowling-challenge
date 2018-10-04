function Frame(){
  this.firstRoll = null
  this.secondRoll = null
  this.thirdRoll = null
  this.bonus = 0
};
var frame = new Frame
Frame.prototype.total = function() {
  return this.firstRoll + this.secondRoll + this.thirdRoll + this.bonus
}
