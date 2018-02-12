// "use strict";

function Game() {
	this.score = 0;
	this.frametally = 0;
	this.submittedframes = [];
	this.totalframes = [];
	this.bonus_tenth_rolls = 2;
	this.tennerstrike = 0;
	this.tennerspare = 0;
}

Game.prototype.calculateScore = function() {
	if (this.tennerstrike === true && this.score === 300) {
		return "You have hit a Perfect Score!!! Bowling heaven!!! Respect!!!";
	} else if (this.tennerstrike === true && this.bonus_tenth_rolls === 2) {
		this.bonus_tenth_rolls -= 1;
		return "You have hit a strike in the final frame, you have 2 bonus rolls remaining. Please roll again.";
	} else if (this.tennerstrike === true && this.bonus_tenth_rolls === 1) {
		this.bonus_tenth_rolls -= 1;
		return "You have hit a strike in the final frame, you have rolled one additional roll and you have 1 bonus roll remaining. Please roll again.";
	}	else if (this.tennerspare === true) {
		return "You have hit a spare in the final frame, you have " + (this.bonus_tenth_rolls) + " bonus rolls remaining. Please roll again.";
	} else if (this.frametally === 10 && this.score === 0) {
		return "You have hit a Gutter Game!!! Boo-effing-hoo!!! You score nul points.";
	} else if (this.frametally === 10) {
		return "Game is now concluded. Your final score is: " + this.score;
	} else {
		return "Frame " + this.frametally + " of 10 complete. Your current score is " + this.score;
	}
};

Game.prototype.recordFrame = function(frame) {
	this.isBonus(frame);
	this.submittedframes.push(frame);
	this.score = this.frameSum();
	this.frametally++;
	this.isTenthFrameSpare(frame);
	this.isTenthFrameStrike(frame);
};

Game.prototype.onStrike = function() {
	return (this.submittedframes[this.submittedframes.length - 1]).isAstrike();
};

Game.prototype.onSpare = function() {
	return (this.submittedframes[this.submittedframes.length - 1]).isAspare();
};

Game.prototype.isBonus = function(frame) {
	if (this.frametally >= 1) {
		(this.submittedframes[this.submittedframes.length - 1]).recBonus(frame);
	}
};

Game.prototype.frameSum = function() {
	var i = 0;
	this.submittedframes.forEach(function(item){i += item.isScore();});
	return i;
};

Game.prototype.isTenthFrameStrike = function(frame) {
	var tenthstrike = frame;
	if (this.frametally === 10 && tenthstrike.isAstrike() === true) {
		this.tennerstrike = true;
	}
};

Game.prototype.isTenthFrameSpare = function(frame) {
	var tenthspare = frame;
	if (this.frametally === 10 && tenthspare.isAspare() === true) {
		this.bonus_tenth_rolls -= 1;
		this.tennerspare = true;
	}
};
