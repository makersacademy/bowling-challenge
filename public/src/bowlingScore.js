function bowlingScore() {
  this.rolls = [];
  this.frames = [];
};

bowlingScore.prototype.roll = function(pins) {
  check_roll = this.rolls.filter(isNotStrike)
  if (checkRoll(pins)) throw new Error('Roll not allowed')
  if (!this.game_over) this.rolls.push(pins);
  this.framesScore();

  function isNotStrike(value) {
    return value != 10;
  }

  function checkRoll(pins){
  return isSecondRoll() && isNotAllowed();
  }

  function isSecondRoll(){
    return check_roll.length % 2 != 0;
  }

  function isNotAllowed(){
    return check_roll[check_roll.length - 1] + pins > 10;
  }
};

bowlingScore.prototype.score = function(frame) {
  var score = 0;
  for(i=0; i<=frame; i++) {
    if(!isNaN(this.frames[i])) score += this.frames[i];
  }
  return score;
};

bowlingScore.prototype.framesScore = function() {
  var self = this;
  this.frames = []
  lastFrameRoll = 1;
  calcFrames()

  function calcFrames() {
    for(roll=0; roll<self.rolls.length;) {
      if (isLastFrame()) {
        getLastFrameScore();
      } else if (isStrike()) {
        getStrikeScore();
      } else if (isSpare()) {
        getSpareScore();
      } else {
        getNormalScore();
      };
      if (gameIsOver()) {
        self.game_over = true;
        break;
      }
    }
  }

  function getNormalScore() {
    self.frames.push(setNormal());
    roll += 2;
  }

  function setNormal() {
    return self.rolls[roll] + self.rolls[roll+1];
  }

  function isSpare() {
    return self.rolls[roll] + self.rolls[roll+1] === 10
  }

  function getSpareScore() {
    self.frames.push(setBonus());
    roll += 2;
  }

  function isStrike() {
    return self.rolls[roll] === 10
  }

  function getStrikeScore() {
    self.frames.push(setBonus());
    roll++;
  }

  function setBonus() {
    return self.rolls[roll] + self.rolls[roll+1] + self.rolls[roll+2]
  };

  function isLastFrame() {
    return self.frames.length >= 9;
  }

  function getLastFrameScore() {
    self.frames[9] = self.frames[9] || 0;
    self.frames[9] += self.rolls[roll];
    lastFrameRoll ++;
    roll++;
  }

  function noBonus() {
    return self.rolls[roll-1] + self.rolls[roll-2] < 10
  }

  function gameIsOver() {
    return lastFrameRoll > 3 || lastFrameRoll > 2 && noBonus()
  }
};  
