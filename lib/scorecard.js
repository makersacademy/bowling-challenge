function ModeSetter(){
  this.scorecard = new ScoreCard
}



function ScoreCard(){
  this.points = 0
  this.frameInPlay = new Frame
  this.frames = []

};

  ScoreCard.prototype.addPointsScore = function(){
    this.points += this.frameInPlay.points
  }

  ScoreCard.prototype.frameAdd = function(){
    this.frameCount += 1
  }

  ScoreCard.prototype.newFrame = function(){
    this.frameInPlay = new Frame()
    this.frameAdd()
  }

  ScoreCard.prototype.finishFrame = function(){
    this.frames.push(this.frameInPlay)
  }

  ScoreCard.prototype.addBonus = function(bonus_points){
    bonusFrame = this.frames.pop()
    bonusFrame.addFrameBonus(bonus_points)
    this.frames.push(bonusFrame)
  }

  ScoreCard.prototype.setBonusMode = function(){
    if(this.frameInPlay.bonusCheck() == 'little-bonus') {
      this.bonusMode = 'spare'
    } else if(this.frameInPlay.bonusCheck() == 'big-bonus') {
      this.bonusMode = 'strike'
    } else {
      this.bonusMode = 'none'
    }
  }

  ScoreCard.prototype.bonusScore = function(){
    points = (this.roll1Score())
    this.addBonus(points)
  }

  ScoreCard.prototype.roll1Score = function(){
    return this.frameInPlay.roll1.points
  }

  ScoreCard.prototype.roll2Score = function(){
    return this.frameInPlay.roll2.points
  }

function Frame(){
  this.points = 0
  this.rollCount = 0
  this.roll1 = new Roll()
  this.roll2 = new Roll()
};

  Frame.prototype.rollAdd = function(n){
    this.rollCount += n
  }

  Frame.prototype.addPointsFrame = function(){
      this.points += (this.roll1.points + this.roll2.points)

  }

  Frame.prototype.rollCheck = function(){
    if(this.roll2Check() == true){
      this.rollAdd(2)
    } else if(this.roll1Check() == true){
      this.rollAdd(1)
    } else {
      this.rollAdd(0)
    }
  }

  Frame.prototype.roll1Check = function(){
    return this.roll1.closed
  }

  Frame.prototype.roll2Check = function(){
    return this.roll2.closed
  }

  Frame.prototype.endFrameCheck = function(){
    return this.rollCount == 2

  }

  Frame.prototype.bonusCheck = function(){
    if(this.endFrameCheck() == true && this.points == 10){
      return 'little-bonus'
    } else if(this.endFrameCheck() == false && this.points == 10 ){
      return 'big-bonus'
    } else {
      return 'no-bonus'
    }

  }

  Frame.prototype.addFrameBonus = function(bonus_points){
    this.points += bonus_points
  }

function Roll(){
  this.points = 0
  this.closed = false
};


  Roll.prototype.addPointsRoll = function(points){
    this.points += points
    this.closeRoll()
  }

  Roll.prototype.closeRoll = function(){
    this.closed = true
  }

//  Roll.prototype.strikeCheck = function(){
//    return this.points == 10
//  }
