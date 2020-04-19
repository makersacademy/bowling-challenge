function Player(name) {
  this.name = name
  this.bowls = []
}

Player.prototype.addFrame = function(one, two) {
  this.bowls.push(one)
  this.bowls.push(two)
};