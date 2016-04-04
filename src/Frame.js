function Frame() {
  this.game = []
  this.roll = []
  this.completed = false
}


Frame.prototype.newRoll = function(pins) {
    this.checkFinish();
    this.roll.push(pins);
    this.checkPins();
  }


Frame.prototype.checkPins = function() {
  if (this.roll[0] === 10 && this.roll.length === 1) {
    this.newRoll(0);
  } else if (this.roll.length === 2) {
    this.game.push(this.roll);
    this.roll = [];
  }
}

Frame.prototype.checkFinish = function() {
  if (this.game.length === 10 && this.game[9][0] === 10) {
    this.lastRound();
  } else if (this.game.length >= 10) {
    throw new Error('Game completed')
  }
}

Frame.prototype.lastRound = function(){
  // if (this.game[this.game.length-1][0] != 10) {
  //   throw new Error('Game completed')
}

Frame.prototype.finalize = function() {
  var i = 0;
  var frames = this.game.length;
  var score = 0;
  var bonus = 0

  for (;i < frames; i++) {
    var rollOne = this.game[i][0]
    var rollTwo = this.game[i][1]

    if (rollOne === 10) {
      bonus = this.game[i+1][0] + this.game[i+1][1]
    } else if (rollOne + rollTwo === 10){
      bonus = this.game[i+1][0]
    }
    score += rollOne + rollTwo + bonus;
    bonus = 0
  }
  return score
}
