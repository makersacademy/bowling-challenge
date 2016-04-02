function Game(){
  last = function(array) {
  return array[array.length-1];
  }
}

Game.prototype.name = function(name) {
  this.currentPlayer = name
}

Game.prototype.nextFrame = function(Frame) {
  if (this.currentGame === undefined) { 
    this.currentGame = [new Frame];}
  else
    {this.currentGame.push(new Frame);}
}

Game.prototype.currentFrame = function() {
 return last(this.currentGame)
}

Game.prototype.firstBowlPins = function(pins) {
  last(this.currentGame).b1(pins)
}

Game.prototype.secondBowlPins = function(pins) {
  last(this.currentGame).b2(pins)
}

Game.prototype.frameScores = function() {
  var score=[]
  for (i=0; i<this.currentGame.length;i++){
    score.push(this.currentGame[i].score())
  }
  return score
}