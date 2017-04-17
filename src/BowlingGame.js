var BowlingGame = function() {
	this.rolls = [];
	this.throw = 0;
  this.turn = 0;
  this.frame = 0;
  this.frameScore = [];
  this.gameOver = false;
  this.scoreSheet =[];
};

BowlingGame.prototype.roll = function(pins) {

  this.rolls[this.throw++] = pins;

  if (this.turn === 0) {
    if (pins === 10) {
      this.scoreSheet.push([' ', 'X']);
      this.frame++;
    } else {
      this.scoreSheet.push([pins,0]);
      this.turn++;
    }
  } else {
    if (this.rolls[this.throw - 2] + pins === 10) {
      this.scoreSheet[this.frame][1] = "/";
    } else {
      this.scoreSheet[this.frame][1]= pins;
    }
    this.frame++;
    this.turn=0
    if (this.frame === 10) {this.gameOver = true;}
  }
};


BowlingGame.prototype.points = function() {
	var score = 0;
	var frameIndex = 0;
	var self = this;

	function sumOfBallsInFrame() {
		return self.rolls[frameIndex] + self.rolls[frameIndex + 1];
	}

	function spareBonus() {
		return self.rolls[frameIndex + 2];
	}

	function strikeBonus() {
		return self.rolls[frameIndex + 1] + self.rolls[frameIndex + 2];
	}

	function isStrike() {
		return self.rolls[frameIndex] === 10;
	}

	function isSpare() {
		return self.rolls[frameIndex] + self.rolls[frameIndex + 1] === 10;
	}

	for (var frame = 0; frame < 10; frame++) {
		if (isStrike()) {
			score += 10 + strikeBonus();
			frameIndex++;
		} else if (isSpare()) {
			score += 10 + spareBonus();
			frameIndex += 2;
		} else {
			score += sumOfBallsInFrame();
			frameIndex += 2;
		}
    this.frameScore.push(score);
	}
	return score;
};

BowlingGame.prototype.showFrameScore = function() {
  return this.frameScore;
};
