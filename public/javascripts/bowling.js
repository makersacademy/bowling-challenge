"user strict";

function Bowling() {
  this.pins = [[]];
  this.score = [[]];
  this.frame = 0;
  this.spare = false;
  this.strike = false;

  Bowling.prototype.play = function(num) {
    if (this.pins[this.frame].length <= 2) {
      this.pins[this.frame].push(num);
    }
    if (this.pins[this.frame].length === 2 && this.frame != 10) {
      this.score[this.frame].push(
        this.pins[this.frame].reduce((a, b) => a + b, 0)
      );
      this._nextFrame();
    }
  };

  Bowling.prototype.addToScore = function() {};

  Bowling.prototype.isStrike = function() {
    if (this.pins[this.frame][0] === 10) {
      this.strike = true;
      this._nextFrame();
    }
  };

  Bowling.prototype.isSpare = function() {
    if (this.pins[this.frame - 1].reduce((a, b) => a + b, 0) === 10) {
      this.spare = true;
    }
  };

  Bowling.prototype.total = function(score) {
    var total = 0;
    for (var i = 0; i < score.length; i++) {
      for (var j = 0; j < score[i].length; j++) {
        total += score[i][j];
      }
    }

    return total;
  };

  Bowling.prototype._nextFrame = function() {
    this.pins.push([]);
    this.score.push([]);
    this.frame++;
  };
}
