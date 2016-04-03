function Game(Frame){
  last = function(array) {
  return array[array.length-1];
  }
}

Game.prototype.name = function(name) {
  this.currentPlayer = name
}

Game.prototype.nextFrame = function() {
  if (this.currentGame === undefined) { 
    this.currentGame = [new Frame];}
  else
    {this.currentGame.push(new Frame);}
  this.frameScore
}

Game.prototype.currentFrame = function() {
 return last(this.currentGame)
}

Game.prototype.knockedPins = function() {

}

Game.prototype.firstBowlPins = function(pins) {
  last(this.currentGame).b1(pins)
}

Game.prototype.secondBowlPins = function(pins) {
  last(this.currentGame).b2(pins)
}

Game.prototype.frameScore = function() {
  var frames = this.currentGame
  for (i=0; i<frames.length;i++){
   
    if (frames[i].isStrike())
        {this.strike(i)}
    else if (frames[i].isSpare())
        {this.spare(i)}
    else{frames[i].total}

  }
}

Game.prototype.spare = function(i) {
  var frames = this.currentGame
  frames[i].bonus(frames[i+1].first)
} 

Game.prototype.strike = function(i) {
    var frames = this.currentGame
    if (frames[i+2])
      { 
        if (frames[i+1].isStrike() && frames[i+2].isStrike() )
        {
          frames[i].bonus(20)
        }

        else if (frames[i+1].isStrike())
        {
          frames[i].bonus(10+(frames[i+2].first))
        }

        else
        {frames[i].bonus((frames[i+1].first)+(frames[i+1].second))}
      }
    else
      {frames[i].bonus((frames[i+1].first)+(frames[i+1].second))}
  }

Game.prototype.score = function() {
  var score = []
  this.frameScore()
  for (i=0; i<this.currentGame.length;i++) {

    score.push(this.currentGame[i].score())
  }

  return score
}

Game.prototype.total = function () {
  var scores = this.score()
  var sum = 0 

  for (i=0; i<scores.length;i++) {
    sum += scores[i]
  }

  return sum
}
