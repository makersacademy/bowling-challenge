function Game() {
  this.turns = []
  this.scoreDefault = 0;
  this.total = 0;
};

  function allTurns(turns, pins) {
    for (i = 0; i <= turns; i++);
      console.log("Frame" + i + "Turns" + turns)
  };


Game.prototype.bowl = function(pins) {
  bowl = this.turns[this.score++] = pins
  return bowl
}

Game.prototype.score = function () {
  var score = 0, i;
    for (i = 0; i < this.score; i++);
      this.total = Number(score)
    return this.total
}