function ScoreCard(){
  this.points = 0
  this.frameCount = 0
};

  ScoreCard.prototype.addPointsScore = function(points){
    this.points += points
  }

  ScoreCard.prototype.frameAdd = function(){
    this.frameCount += 1
  }


function Frame(){
  this.points = 0
  this.rollCount = 0
};

  Frame.prototype.rollAdd = function(n){
    this.rollCount += n
  }

  Frame.prototype.addPointsFrame = function(frame_points){
      this.points += frame_points
      if(this.strikeCheck() == true) {
        this.rollAdd(2)
      } else {
        this.rollAdd(1)
      }
      if(this.endFrameCheck() == true){
        return "initiate new roll"
      }
      console.log(this.rollCount)
      console.log(this.endFrameCheck())
  }

  Frame.prototype.strikeCheck = function(){
    return this.points == 10
  }

  Frame.prototype.endFrameCheck = function(){
    return this.rollCount == 2

  }

function Roll(){
  this.points = 0
};

Roll.prototype.addPointsRoll = function(points){
    this.points += points
  }
