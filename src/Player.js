function Player(name) {
  this.name = name
  this.bowls = []
  this.frameCount =1
  this.score = 0
  this.tenthIsStrike = false
  this.tenthIsSpare = false
  this.gameOver = false
}

Player.prototype.addFrame = function(one, two) {
if (this.frameCount < 10) {
  if(one <= 9) {
    this.bowls.push(one);
    this.bowls.push(two);
  } else if( one == 10) {
    this.bowls.push(one);
  } else {
    this.bowls.push(0);
    this.bowls.push(0);
  }
} else if (this.frameCount === 10) {
  this.SetTenthIsStrike(one);
  if (one < 10) {
    this.SetTenthIsSpare(one,two);
  }
  if (this.tenthIsStrike) {
    this.bowls.push(one);
  } else if (this.tenthIsSpare) {
    this.bowls.push(one);
    this.bowls.push(two);
  } else {
    this.bowls.push(one);
    this.bowls.push(two);
    this.gameOver = true;
    this.calcScore();
  }
} else if (this.frameCount <= 11) {
  if(this.tenthIsStrike) {
    this.bowls.push(one);
    this.bowls.push(two);
    this.gameOver = true;
    this.calcScore();
  } else if(this.tenthIsSpare) {
    this.bowls.push(one);
    this.gameOver = true;
    this.calcScore();
  }
}
  this.frameCount += 1;
};

Player.prototype.getFrameCount = function() {
  return this.frameCount
}
// ran out of time to create score calculation method so this is from the solutions for the codewars kata found here: https://www.codewars.com/kata/5427db696f30afd74b0006a3
Player.prototype.calcScore = function() {
    var score = 0, i = 0, frame = 1, rolls = this.bowls;
    while(frame <= 10) {
      score += rolls[i] + rolls[i+1];
      if(rolls[i] + rolls[i+1] >= 10) score += rolls[i+2];
      if(rolls[i] !== 10) i++;
      i++;
      frame++;
    };
    this.score = score;
};

Player.prototype.SetTenthIsStrike = function(one) {
  if(one === 10) {
    this.tenthIsStrike = true
  }
}

Player.prototype.SetTenthIsSpare = function(one,two) {
  if(one+two === 10) {
    this.tenthIsSpare = true
  }
}