function Frame() {
  this.pins = 10
  this.currentFrame = []
  this.frameScores = []
  this.turnCount = 0
  this.spare = false
  this.strike = false
  this.game_over = false
  this.points = 0
}

Frame.prototype.bowl = function() {
  var x = (Math.round(Math.random() * this.pins ))
  this.points = x
  this.pins -= x
  this.turnCount += 1
    if (this.strike){
        this.frameScores.slice(-1)[0].push(x)
      if (this.frameScores.length >= 2) {
      if (this.turnCount === 1)
        {this.frameScores.slice(-2)[0].push(x)}}
      this.currentFrame.push(x)
      this.strike_count += 1
      if (this.strike_count === 2){this.strike = false}
    } else if (this.spare && this.turnCount === 1){
      this.frameScores.slice(-1)[0].push(x)
      this.currentFrame.push(x)
      this.spare = false
    } else { this.currentFrame.push(x) }
  if(this.pins === 0){this._isStrikeorSpare()}
  if (this.turnCount === 2) {
    this.resetFrame();
  }
}

Frame.prototype.resetFrame = function() {
  this.turnCount = 0
  this.pins = 10
  this.frameScores.push(this.currentFrame)
  this.currentFrame = []
};

Frame.prototype._isStrikeorSpare = function() {
    if (this.currentFrame.length === 1) {this.strike = true
    this.resetFrame()
    this.strike_count = 0
  } else {this.spare = true}
}

Frame.prototype.lastFrame_bowl = function() {
  if(this.game_over === false){
  var y = (Math.round(Math.random() * this.pins ))
  this.points = y
  if (this.strike && this.currentFrame.length === 0)
  {this.frameScores.slice(-2)[0].push(y)}
  if (this.strike && this.currentFrame.length < 2)
  {this.frameScores.slice(-1)[0].push(y)}
  if (this.spare && this.currentFrame.length === 0)
  {this.frameScores.slice(-1)[0].push(y)}
  this.pins -= y
  this.turnCount += 1
  this.currentFrame.push(y)
  if (this.pins === 0){
    if (this.turnCount === 1){
    this.pins = 10
    this.turnCount = 0
  } else {
    this.pins = 10
    this.turnCount = 1
  }}
  if (this.turnCount === 2 || this.currentFrame.length === 3) {
    this.frameScores.push(this.currentFrame)
    this.game_over = true
    return ("Game Over!")
  }
} else {throw "Game is over!"}
};

Frame.prototype.resetGame = function() {
  this.pins = 10
  this.currentFrame = []
  this.frameScores = []
  this.turnCount = 0
  this.spare = false
  this.strike = false
  this.game_over = false
};

// Frame.prototype._countScore = function() {
//   return this.currentFrame.reduceRight(function(a,b){return a+b;})
// };
// Frame.prototype._isSpare = function() {
//   if(this._countScore === 10){
//     this.spare = true
//   }
// }
