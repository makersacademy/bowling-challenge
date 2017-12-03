function ScoreCard(){
  this.total = 0
  this.frame = new Frame()
  this.frames = []
}

ScoreCard.prototype.recordRoll = function(points){

  if(this.frame.roll1.points == 10){
    this.newFrame(2)
  }
  else if(this.frame.points == 10){
    this.newFrame(1)
  } else if(this.frame.count == 2) {
    this.newFrame(0)
  } else {
  }
  this.addPoints(points)


}


ScoreCard.prototype.cheatGuard = function(points){
  return (this.frame.points + points > 10)
}

ScoreCard.prototype.newFrame = function(bonus){
  this.frames.push(this.bonusFrame)
  this.frames.push(this.frame)
  this.frame = new Frame(bonus)
  this.bonusFrame = this.frames.pop()
}

ScoreCard.prototype.addPoints = function(points){
  if(this.cheatGuard(points)==true){
    return this.error()
  } else {
    if(this.frame.count == 0){
    this.total += (this.frame.points = (this.frame.roll1.points += points))
    if(this.frame.bonusMode == 1){
      this.bonusFrame.points += points
    }
    } else {
    this.total = (this.frame.points += (this.frame.roll2.points += points))
    if(this.frame.bonusMode == 2){
      this.bonusFrame.points += this.frame.points
    }
    }
      this.frame.count +=1
  }
  }


ScoreCard.prototype.error = function(){
  return 'Illegal Score'
}

ScoreCard.prototype.bonusSpare = function(){
  return (this.frame.points == 10 && this.frame.count == 2)
}

ScoreCard.prototype.bonusStrike = function(){
  return this.frame.roll1.points == 10
}

function Frame(bonus){
  this.count = 0
  this.roll1 = new Roll
  this.roll2 = new Roll
  this.bonusMode = bonus
}

function Roll(){
  this.points = 0
}
