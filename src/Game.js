function Game() {

  this.score = 0;
  this.frames = Array();
}

Game.prototype.addFrame = function(firstRoll, secondRoll) {
  
  var frame = new Frame(firstRoll, secondRoll);

  this.frames.push(frame);

}

Game.prototype.scoreGame = function() {

  for(var i = 0; i < this.frames.length; i++) {
    console.log(this.frames[i].score);
    this.score += this.frames[i].score;
  }
}