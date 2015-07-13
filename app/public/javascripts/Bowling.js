function Bowling() {
  this.score = 0;
  this.turns = 0;
  this.bowlingFrame = [[null, null],
                    [null, null],
                    [null, null],
                    [null, null],
                    [null, null],
                    [null, null],
                    [null, null],
                    [null, null],
                    [null, null],
                    [null, null]];

  Bowling.prototype.roll = function (pins) {
    if(pins > 10 || pins < 0) {
      throw new Error("invalid roll");
    }
    this.score += pins;
    this.turns += 1;
  };

  Bowling.prototype.getCurrentFrame = function () {
    if (this.turns % 2 !== 0) {
      return (this.turns / 2) + 0.5;
    } else {
      return this.turns / 2;
    }
  };

}
