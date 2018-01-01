
function Game() {
  this.resetPins()
}

Game.prototype.knockDown = function(num) {
  for(i=0;i<num;i++) { this.pins.pop() }
}

Game.prototype.resetPins = function() {
  this.pins = []
  for(i=0;i<10;i++) {  this.pins.push(1) }
}
