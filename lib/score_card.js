function ScoreCard(){
  this.total = 0
  this.frame = new Frame()
  this.frames = []
  this.frameCount = 1
}

ScoreCard.prototype.recordRoll = function(points){
  this.frameCheck()
  if(this.cheatGuard(points)==true){
    return 'illegal roll'
  } else {
    if(this.frameCount > 10){
      this.addBonus10(points)
    } else {
      this.addPoints(points)
}
}
}

ScoreCard.prototype.addBonus10 = function(points){
  if(this.frame.bonusMode == 1 && this.frame.count == 0){
  this.addBonusPoints(points, 0)
  }
  else if (this.frame.bonusMode == 2 && this.frame.count == 0){
    this.updateTotal(points, 0)
    }
    else if (this.frame.bonusMode == 2){
      this.addBonusPoints(poitnts, points )
    }
    else {

    }
}

ScoreCard.prototype.addBonus = function(points){
  if(this.frame.bonusMode == 1 && this.frame.count == 0){
  this.addBonusPoints(points, 0)
  }
  else if (this.frame.bonusMode == 2){
    this.addBonusPoints(points, points)
    }
    else {
    }
}

ScoreCard.prototype.frameCheck = function(){
if(this.bonusStrike()){
  this.newFrame(2)
}
else if(this.bonusSpare()){
  this.newFrame(1)
} else if(this.frame.count == 2) {
  this.newFrame(0)
} else {

}
}

ScoreCard.prototype.cheatGuard = function(points){
  return (this.frame.points + points > 10)
}

ScoreCard.prototype.updateTotal = function(points, bonus){
  this.total += (points + bonus)

}

ScoreCard.prototype.newFrame = function(bonus){
  this.storeFrames()
  this.frame = new Frame(bonus)
  this.bonusFrame = this.frames.pop()
  this.frameCount += 1
}

ScoreCard.prototype.storeFrames = function(){
  this.frames.push(this.bonusFrame)
  this.frames.push(this.frame)
}

ScoreCard.prototype.addPointsRegular = function(points, index){
  this.frame.addPoints(points, index)
  this.updateTotal(points, 0)
}

ScoreCard.prototype.addBonusPoints = function(x, y){
  this.bonusFrame.points += x
  this.updateTotal(y, x)

}



ScoreCard.prototype.addPoints = function(points){
    if(this.frame.count == 0){
    this.addPointsRegular(points, 0)
    this.addBonus(points)
    this.frame.count +=1
    } else {
    this.addPointsRegular(points, 1)
    this.addBonus(points)
    this.frame.count +=1
    }
  }

ScoreCard.prototype.bonusSpare = function(){
  return (this.frame.points == 10 && this.frame.count == 2)
}

ScoreCard.prototype.bonusStrike = function(){
  var rolls = this.frame.rolls
  var roll = rolls[0]
  return roll.points == 10
}

function Frame(bonus){
  this.points = 0
  this.count = 0
  this.bonusMode = bonus
  this.rolls = [new Roll, new Roll]
}

Frame.prototype.addPoints = function(points, index){
  this.points += points
  var roll = this.rolls[index]
  roll.points += points
}


function Roll(){
  this.points = 0
}
