function Game () {
  this.rolls = [];
  this.frames = [];
}

Game.prototype.score = function() {
  return this.calculateScore()
}

//Game.prototype.calculateFrame = function() {
//  var frameScore = this.rolls[this.rolls.length-1] + this.rolls[this.rolls.length-2];
//  return frameScore;
//}

Game.prototype.addToFrame = function(score) {
  this.frames.push(score)
}

Game.prototype.calculateScore = function() {
  var score = 0;
  for (var rollsIndex = 0; rollsIndex < this.rolls.length; rollsIndex++) {
    if (this.rolls[rollsIndex] === 'X') {
      score += 10 + this.rolls[rollsIndex+1] + this.rolls[rollsIndex+2];
      this.addToFrame(score)
    } else if (this.rolls[rollsIndex] === '/') {
      score += 10 + this.rolls[rollsIndex+1] - this.rolls[rollsIndex-1]
        this.addToFrame(score);  
    } else {
      score += this.rolls[rollsIndex]
    }
    }
    return score
    } 

    Game.prototype.rollBall = function(pins) {
      this.rolls.push(pins);
      this.updateFrame()
    }

    Game.prototype.updateFrame = function() {
      if (this.isStrike() === true) { 
        this.rolls.splice(-1,1)
      this.rolls.push('X');
      } else if (this.rolls.length % 2 === 0) {
        if (this.isSpare()===true) {
          this.rolls.splice(-1,1)
            this.rolls.push('/');
        } else {
          this.addToFrame(this.calculateScore());
        }
      }
    }


Game.prototype.isSpare = function() {
  var i = this.rolls[this.rolls.length-1] + this.rolls[this.rolls.length-2] === 10;
  return i;
}

Game.prototype.isStrike = function() {
  var i = this.rolls.length % 2 === 1 && this.rolls[this.rolls.length-1] === 10
    return i;
}
