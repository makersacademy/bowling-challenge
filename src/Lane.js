'use-strict';

function Lane() {
  this.game = new Game()
}

Lane.prototype.pass = function(pins) {
  this.game.sendToFrame(pins)
}
