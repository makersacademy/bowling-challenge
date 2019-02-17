function Game() {
  this.allBowls = [];
}

Game.prototype.addBowl = function(pinsHit) {
  this.allBowls.push(pinsHit);
};

Game.prototype.calculateTotal = function() {
  var total = 0;
  for (var i = 0; i < 20; i++) {
    total += this.allBowls[i] || 0;
  }
  return total;
};
