function Game() {
  this.playername;
  this.score = 0;
  this.MAX_FRAMES = 10
  this.frameCount = 0
  this.strike = false
};

Game.prototype.addPlayer = function(name) {
  this.playername = name
};

Game.prototype.addScore = function(number) {
  if(this.strike === true) {
    this.score += (number * 2)
    this.frameCount += 1
  }
  if(this.strike === false) {
    this.score += number
    this.frameCount += 1
  }
  if(number === 10) {
    this.strike = true
    return;
  }
};




