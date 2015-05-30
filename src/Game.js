function Game() {
	this.frame = 1;
	this.frameRoll = 1;
  this.rolls = [];
	this.score = 0;
};

Game.prototype.roll = function(pinsDown) {
  var count = this.frame;
	if (pinsDown > 10) {
    throw "Invalid roll (over 10)";
  }

  if (this.frame > 10) {
		throw "Game Over";
	}

	if (this.frameRoll == 1) {
		this.frameRoll += 1;
    this.rolls.push([pinsDown]);
    this.score += pinsDown;
	} else {

    if (this.rolls[this.frame - 1][0] + pinsDown > 10) {
      throw "Invalid roll (over 10 per frame)";
    } else {

    this.rolls[this.frame - 1].push(pinsDown);
		this.frame += 1;
		this.frameRoll = 1;
    this.score += pinsDown;
  };
	};
  return "Frame: " + this.frame + " Roll: " + this.frameRoll + " Score: " + this.score;
};
