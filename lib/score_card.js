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
  this.addPoints(points)}
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
  this.frames.push(this.bonusFrame)
  this.frames.push(this.frame)
  this.frame = new Frame(bonus)
  this.bonusFrame = this.frames.pop()
  this.frameCount += 1
}

ScoreCard.prototype.addPointsRegular1 = function(points){
  this.frame.points = (this.frame.roll1.points += points)
  this.updateTotal(points, 0)
}

ScoreCard.prototype.addPointsRegular2 = function(points){
  this.frame.points += (this.frame.roll2.points += points)
  this.updateTotal(points, 0)
}

ScoreCard.prototype.addPointsSpare = function(points){
  this.bonusFrame.points += points
  this.updateTotal(0, points)
}

ScoreCard.prototype.addPointsStrike = function(points){
  this.bonusFrame.points += this.frame.points
  this.updateTotal(points, this.frame.points)
}

ScoreCard.prototype.addPoints = function(points){
    if(this.frame.count == 0){
    this.addPointsRegular1(points)
    if(this.frame.bonusMode == 1){
    this.addPointsSpare(points)
    }
    } else {
    this.addPointsRegular2(points)
    if(this.frame.bonusMode == 2){
    this.addPointsStrike()
    }
    }
    this.frame.count +=1
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
