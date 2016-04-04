function Game(Frame){
  this.currentGame=[]
  this.normalGame=true
  last = function(array) {
  return array[array.length-1];
  }

}

Game.prototype.name = function(name) { //enterName
  this.currentPlayer = name
}

Game.prototype.firstBowlPins = function(pins) {
  this.nextFrame()
  last(this.currentGame).firstBowlPins(pins)

  if (this.currentFrame() === this.currentGame[9] && (pins===10)) 
    {this.normalGame=false}
}

Game.prototype.secondBowlPins = function(pins) {
  last(this.currentGame).secondBowlPins(pins)

  if (this.currentFrame() === this.currentGame[9] && last(this.currentGame).isSpare) 
    {this.normalGame=false}
}

Game.prototype.nextFrame = function() {
  if (this.isGameComplete()) {throw 'the game is complete'}
  this.currentGame.push(new Frame);
}

Game.prototype.currentFrame = function() {
 return last(this.currentGame)
}

Game.prototype.frameScore = function() { //setFrameScore
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

  if (frames[i+1].isStrike() && frames[i+2].isStrike() )
     {frames[i].bonus(20)}

  else if (frames[i+1].isStrike())
          {frames[i].bonus(10+(frames[i+2].first))}

  else {frames[i].bonus((frames[i+1].first)+(frames[i+1].second))}
}

Game.prototype.score = function() { //saveAllFramesScore
  this.frameScore()
  var score = []

  for (i=0; i<this.currentGame.length;i++) 
    { score.push(this.currentGame[i].totalScore())}

  return score
}

Game.prototype.total = function () { //totalScore
  var scores = this.score()
  var sum = 0 

  for (i=0; i<scores.length;i++) {sum += scores[i]}
  return sum
}


Game.prototype.isGameComplete = function() {
  var count = this.currentGame.length
  if ( count === 10 && this.normalGame) {return true}
  if (count ===11 && !this.normalGame && !this.currentFrame().isStikre) {return true}
  if (count ===12 && !this.normalGame) {return true}  

}

