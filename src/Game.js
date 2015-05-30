function Game() {
	this.frame = 1;
	this.frameRoll = 1;
	this.rolls = [];
	this.score = 0;
	this.bonus = null;
};

Game.prototype.roll = function(pinsDown) {

	if (pinsDown > 10) {
		throw "Invalid roll (over 10)";
	}

	if (this.frame > 10) {
		throw "Game Over";
	}

	if (this.frameRoll == 1) {
		this.rolls.push([pinsDown]);
		this.calculateScore(pinsDown);
		if (pinsDown == 10) {
			this.frame += 1;
		} else {
			this.frameRoll += 1;
		}
	} else {

		if (this.rolls[this.frame - 1][0] + pinsDown > 10) {
			throw "Invalid roll (over 10 per frame)";
		} else {

			this.rolls[this.frame - 1].push(pinsDown);
			this.calculateScore(pinsDown);
			this.frame += 1;
			this.frameRoll = 1;

		};
	};
	return "Frame: " + this.frame + " Roll: " + this.frameRoll + " Score: " + this.score;
};


Game.prototype.calculateScore = function(pinsDown) {
	if (this.frame == 1) {
		this.score += pinsDown;
	} else {
		if (this.rolls[this.frame - 2].reduce(function(a, b) {return a + b;}) == 10) {
			if (this.frameRoll == 1) {

				if (this.frame >= 3 && this.rolls[this.frame - 3][0] == 10) {

					this.score += 3 * pinsDown;


				} else {
					this.score += 2 * pinsDown;
				}

			} else if (this.rolls[this.frame - 2].length == 1) {
				this.score += 2 * pinsDown;
			} else {
				this.score += pinsDown;
			}
		} else {
			this.score += pinsDown;
		}
	}
};
