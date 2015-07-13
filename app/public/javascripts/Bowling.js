function Bowling() {
  this.score = 0;
  this.turns = 0;
  this.bowlingFrames = [[null, null],
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
    for (i = 0; i < this.bowlingFrames.length; i++) {
      if (this.bowlingFrames[i][0] === null) {
        this.bowlingFrames[i][0] = pins;
        break;
      }
      else if (this.bowlingFrames[i][1] === null) {
        if((this.bowlingFrames[i][0] + pins) > 10) {
          throw new Error("invalid roll");
        }
        this.bowlingFrames[i][1] = pins;
        break;
      }
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
