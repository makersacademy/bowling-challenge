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

Game.prototype.frameScore = function() {
  var score=[]
  for (i=0; i<this.currentGame.length;i++){
    score.push(this.currentGame[i].score())
  }
  return score
}

Game.prototype.scoreCalculator = function() {
  var score = 0
  var strike=0
  var temp = this.frameScore()
  for(i=0; i<temp.length; i++) {
    if (temp[i]!=='X') {score+=temp[i]}
    if (temp[i] ==='X') {strike += 1}
    if (temp[i-1] ==='X' && temp[i]!=='X')
        {score +=(this.strike(strike,temp[i]))
          strike=0
        }
  }
  return score
}

Game.prototype.strike = function(strikes, pins) {
  if (strikes ===1) {return (1*10)+(pins*strikes)};
  if (strikes ===2) {return (3*10)+(2*pins)}
  if (strike >3) {}
  return (5*10)+(4*pins)
}
