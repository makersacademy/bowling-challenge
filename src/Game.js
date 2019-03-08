function Game() {

  this.score = 0;
  this.frames = Array();
  this.gutterGame = false;
}

Game.prototype.addFrame = function(firstRoll, secondRoll) {
  
  var frame = new Frame(firstRoll, secondRoll);

  this.frames.push(frame);

}

Game.prototype.scoreGame = function() {

  for(var i = 0; i < this.frames.length; i++) {
    if (this.frames[i].isAStrike && i < 11) {
      this.score += this.frames[i+1].score;
    }
    this.score += this.frames[i].score;
  }

  this.score == 0 ? this.gutterGame = true : this.gutterGame = false;
}