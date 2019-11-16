function Game() {
  this.bowls = [];
};

Game.prototype.bowl = function(skittles) {
  this.bowls.push(skittles);
};
Game.prototype.score = function() {
  var total = 0;
  for (i = 0; i < this.bowls.length; i++) {
    total += this.bowls[i];
  };
  return total;
}
