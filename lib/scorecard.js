function ScoreCard(){
  this.points = 0
  this.frameCount = 0
  this.frameInPlay = new Frame
};

  ScoreCard.prototype.addPointsScore = function(){
    this.points += this.frameInPlay.points
  }

  ScoreCard.prototype.frameAdd = function(){
    this.frameCount += 1
  }

  ScoreCard.prototype.newFrame = function(){
    this.frameInPlay = new Frame()
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
