function Game(){
  this.currentFrame = 1
  this.scores = [[],[],[],[],[],[],[],[],[],[]]
  this.currentTurn = 1
}

// GETTERS


Game.prototype.getCurrentScore = function(){
  return this._sumGame()
}

Game.prototype.getCurrentFrame = function(){
  return this.currentFrame
}

Game.prototype.getCurrentTurn = function(){
  return this.currentTurn
}

// ADD PINS


Game.prototype.addPins = function(pins){
  this._addStrikeBonus(pins)
  this._addSpareBonus(pins)
  this.scores[this.currentFrame - 1].push(pins)
  this._setCurrentTurn(pins)
}

// MOVE TO NEXT FRAME

Game.prototype.moveToNextFrame = function(){
  this.currentFrame += 1
}

Game.prototype._setCurrentTurn = function(pins){
  if (this.getCurrentTurn() === 1 && pins < 10) {
    this.currentTurn = 2
  } else {
    this.currentTurn = 1
    this.moveToNextFrame()
  }
}

// PRIVATE

Game.prototype._sumFrames = function(){
  var frameTotals = []
  this.scores.forEach(function(frame){
    var score = 0
    frame.forEach(function(bowl){
      score += bowl
    });
    frameTotals.push(score);
  });
  return frameTotals
}

Game.prototype._sumGame = function(){
  var total = 0
  this._sumFrames().forEach(function(frame){
    total += frame
  });
  return total
}

Game.prototype._addSpareBonus = function(pins){
  if (this.currentFrame > 1) {
    if (this.scores[this.currentFrame - 2][0] + this.scores[this.currentFrame - 2][1] === 10 && this.currentTurn === 1) {
      this.scores[this.currentFrame - 2].push(pins)
    }
  }
}

Game.prototype._addStrikeBonus = function(pins){
  if (this.currentFrame > 1) {
    if (this.scores[this.currentFrame - 2][0] === 10) {
      this.scores[this.currentFrame - 2].push(pins)
    }
  }
  if (this.currentFrame > 2) {
    if (this.scores[this.currentFrame - 3][0] === 10) {
      this.scores[this.currentFrame - 3].push(pins)
    }
  }
}
