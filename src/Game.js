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

    if (this.frames[i].isAStrike && i < 10) {

      this.score += this.frames[i+1].score;
      this.score += this.frames[i+2].score;

    } else if (this.frames[i].isASpare) {

      this.score += this.frames[i+1].rolls[0];
    }

    this.score += this.frames[i].score;
  }
  
  this.score == 0 ? this.gutterGame = true : this.gutterGame = false;
}