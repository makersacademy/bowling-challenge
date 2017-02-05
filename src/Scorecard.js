function Scorecard() {
  this._scores = []
}

Scorecard.prototype.addToScore = function(score){
  this._scores.push(score)
}

Scorecard.prototype.scores = function(){
  return this._scores
}

Scorecard.prototype.frameOneScore = function(){
  return (this.scores()[0] + this.scores()[1])
}

Scorecard.prototype.frameTwoScore = function(){
  return this.frameOneScore() + (this.scores()[2] + this.scores()[3])
}

Scorecard.prototype.frameThreeScore = function(){
  return this.frameTwoScore() + (this.scores()[4] + this.scores()[5])
}

Scorecard.prototype.frameFourScore = function(){
  return this.frameThreeScore() + (this.scores()[6] + this.scores()[7])
}

Scorecard.prototype.frameFiveScore = function(){
  return this.frameFourScore() + (this.scores()[8] + this.scores()[9])
}

Scorecard.prototype.frameSixScore = function(){
  return this.frameFiveScore() + (this.scores()[10] + this.scores()[11])
}
Scorecard.prototype.frameSevenScore = function(){
  return this.frameSixScore() + (this.scores()[12] + this.scores()[13])
}
Scorecard.prototype.frameEightScore = function(){
  return this.frameSevenScore() + (this.scores()[14] + this.scores()[15])
}
Scorecard.prototype.frameNineScore = function(){
  return this.frameEightScore() + (this.scores()[16] + this.scores()[17])
}

Scorecard.prototype.frameTenScore = function(){
  return this.frameNineScore() + (this.scores()[18] + this.scores()[19])
}
