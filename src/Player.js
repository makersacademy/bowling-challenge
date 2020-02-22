function Player(name = player1) {
  this.name = name
  this.turn = 1
  this.score = 0
  this.roll1 = 0
  this.roll2 = 0
  this.spare = false
  this.onStrike = false
  this.scoreTracker = []
};

Player.prototype.firstRoll = function(pins) {
  if (pins === 10) {
    this.strike();
  } else if (this.spare === true){
    this.firstRollOnSpare(pins)
  } else {
  this.roll1 = pins
  }
}

Player.prototype.secondRoll = function(pins) {
  if (this.onStrike === true) {
    this.score = this.score + 10 + (this.roll1)*2 + (pins)*2
  } else {
    if (this.roll1 + pins === 10) {
      this.spare = true
      this.roll2 = 'spare'
    } else {
      this.score = this.score + this.roll1 + pins
      this.roll2 = pins
    }
  }
  this.scoreTracker.push([this.roll1, this.roll2])
  this.roll1 = 0
  this.roll2 = 0 
}

Player.prototype.strike = function() {
  this.onStrike = true
  this.roll1 = 'strike'
  this.roll2 = 'NA'
  this.scoreTracker.push([this.roll1, this.roll2])
}

Player.prototype.firstRollOnSpare = function(pins) {
  this.roll1 = pins
  this.score = 10 + pins

}







function Game(player1 = new Player('Tim'), player2 = new Player('Harry')) {
  this.player1 = player1
  this.player2 = player2 
};
