function Frame() {
  this.bowls = []
  this.bowlIndex = 1
};

Frame.prototype.bowl = function(pins) {
  this.bowls.push(pins)
  this.bowlIndex++
}
