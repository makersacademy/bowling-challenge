function Game() {

  this.score = 0;
  this.frames = Array();
  this.gutterGame = false;
  this.perfectGame = false;
}

Game.prototype.addFrame = function(firstRoll, secondRoll) {
  var frame = new Frame(firstRoll, secondRoll);
  this.frames.push(frame);
}

Game.prototype.scoreGame = function() {
  for(var i = 0; i < this.frames.length; i++) {

    // base score
    this.score += this.frames[i].score;

    // bonuses
    if (this.frames[i].isAStrike && i < 9) { // strike

      // is the next frame a strike?
      if (this.frames[i+1].isAStrike) {
        this.score += this.frames[i+1].score;
      } else { // spare
        this.score += this.frames[i+1].rolls[0];
        this.score += this.frames[i+1].rolls[1];
      }

    } else if (this.frames[i].isASpare) { // sapre

      this.score += this.frames[i+1].rolls[0];
    }
  }

  this.score == 0 ? this.gutterGame = true : this.gutterGame = false;
}