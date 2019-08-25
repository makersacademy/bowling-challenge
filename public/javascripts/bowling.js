"user strict";

function Bowling() {
  this.pins = [[]];
  this.score = [[]];
  this.frame = 0;

  Bowling.prototype.play = function(num) {
    if (this.pins[this.frame].length < 2) {
      this.pins[this.frame].push(num);
    }
    if (this.pins[this.frame].length === 2 && this.frame != 10) {
      this.score[this.frame].push(
        this.pins[this.frame].reduce((a, b) => a + b, 0)
      );
      this.pins.push([]);
      this.score.push([]);
      this.frame++;
    }
  };
}
