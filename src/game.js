function Game() {
  this.scores = 0
  this.rolls = []
  this.currentRoll = 0
  this.frameNumber = 0
}

Game.prototype.roll = function(pins) {
  if (this.currentRoll % 2 === 0 || pins === 10) {
    this.frameNumber++;
  } else {
    this.frameNumber += 0;
  }
  this.rolls[this.currentRoll++] = pins;
}

Game.prototype.countFrame = function() {
  return this.frameNumber;
}

Game.prototype.score = function() {
  this.scores = 0
  var frameIndex = 0;
  for (var frame = 0; frame < 10; frame++) {
    if (this.isStrike(frameIndex)) {
      //if (this.rolls[frameIndex + 1] !== undefined && this.rolls[frameIndex + 2] !== undefined) {
        this.scores += 10 + this.strikeBonus(frameIndex);
        frameIndex++;
      //} else {
        //this.scores;
      //}
    }
    else if (this.isSpare(frameIndex)) {
      //if (this.rolls[frameIndex + 1] !== undefined && this.rolls[frameIndex + 2] !== undefined) {
        this.scores += 10 + this.spareBonus(frameIndex);
        frameIndex += 2;
      //} else {
        //this.scores;
      //}
    } else {
      //if (this.rolls[frameIndex] + this.rolls[frameIndex + 1]){
        this.scores += this.sumOfBallsInFrame(frameIndex);
        frameIndex += 2;
      //}
      //this.scores;
    }
  }
  return this.scores;
}

Game.prototype.currentScore = function(frameIndex) {
  var score = 0
    if (this.isStrike(frameIndex)) {
      if (this.rolls[frameIndex + 1] !== undefined && this.rolls[frameIndex + 2] !== undefined) {
        score += 10 + this.strikeBonus(frameIndex);
      } else {
        return;
      }
    }
    else if (this.isSpare(frameIndex)) {
      if (this.rolls[frameIndex + 1] !== undefined && this.rolls[frameIndex + 2] !== undefined) {
        score += 10 + this.spareBonus(frameIndex);
      } else {
        return;
      }
    } else {
      if (frameIndex % 2 != 0) {
        frameIndex +=1;
      };
      score += this.sumOfBallsInFrame(frameIndex);
    }
    return score;
  };


Game.prototype.isSpare = function(frameIndex) {
  return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
}

Game.prototype.isStrike = function(frameIndex) {
  return this.rolls[frameIndex] === 10;
}

Game.prototype.sumOfBallsInFrame = function(frameIndex) {
  return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
}

Game.prototype.spareBonus = function(frameIndex) {
  return this.rolls[frameIndex + 2];
}

Game.prototype.strikeBonus = function(frameIndex) {
  return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
}
