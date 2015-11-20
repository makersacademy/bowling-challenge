function Game() {

  Game.prototype.frames = {1:[1,2], 2:[1,2], 3:[1,2], 4:[1,2], 5:[1,2],
    6:[1,2], 7:[1,2], 8:[1,2], 9:[1,2], 10:[1,2]};

  Game.prototype.currentFrame = 1;
  Game.prototype.currentRoll = 1;
  Game.prototype.pins = 10;
  Game.prototype.score = 0;

  Game.prototype.returnCurrentFrame = function() {
    return this.currentFrame;
  }

  Game.prototype.roll = function() {
    if (this.currentRoll === 1) {
      this.currentRoll ++;
    } else {
      this.currentRoll --;
      this.currentFrame ++;
    }
    var roll = Math.floor(Math.random() * 11);
    this.pins -= roll;
    this.score += roll;
    return roll;
  }



}
