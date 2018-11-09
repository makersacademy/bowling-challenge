function Frame (framenumber)
{
	this.framenumber = framenumber;
	this.rolls = [];
	this.FRAME_MAX = 10;
	this.MAXIMUM_PINS = 10;
	this.REGULAR_FRAMESIZE = 2;
	this.FINAL_BONUS_FRAMESIZE = 3;
	this.GUTTER_FRAME = 0;
	this.frame_bonus = [0,0];
	this.finalIndexOfFrame;
	this.framesize = this.REGULAR_FRAMESIZE;
}

Frame.prototype.getrolls = function () {
	return this.rolls;
};

Frame.prototype.getBonus = function () {
	return this.frame_bonus;
};

Frame.prototype.addBonus = function (pins) {
  this.frame_bonus.push(pins)
}
Frame.prototype.setBonus = function (bonus_arr) {
	this.frame_bonus = bonus_arr;
};

Frame.prototype.isFinalFrame = function () {
	return (this.framenumber === this.FRAME_MAX) ? true : false;
};

Frame.prototype.getMaxFrameSize = function () {
	if(!this.isFinalFrame()) {
		return this.REGULAR_FRAMESIZE;
	}
	if(this.hasStrike()){
		this.framesize = this.FINAL_BONUS_FRAMESIZE;
		return this.FINAL_BONUS_FRAMESIZE;
	}
	if(this.hasSpare()){
		this.framesize = this.FINAL_BONUS_FRAMESIZE;
		return this.FINAL_BONUS_FRAMESIZE;
	}
};

Frame.prototype.roll = function (pins) {
	if (this.isFrameOpen()) {
    if(this.isFinalFrame() && this.hasStrike()) {
      // console.log("fdsfdsfdsaf")
      this.frame_bonus[0] = pins
    } else if(this.isFinalFrame() && this.hasSpare()) {
      // console.log("fdsfdsfdsaf")
      this.frame_bonus[0] = pins
    } else {
		this.rolls.push(pins);
  }
	}
	else {
		return 'Max. 2 rolls allowed';
	}
};

Frame.prototype.isFrameOpen = function () {
	return (this.hasStrike() || this.maxRollsReached()) ? false : true;
};

Frame.prototype.getFrameSize = function () {
	return this.rolls.length;
};

Frame.prototype.getPinsScore = function () {
	return (this.rolls.length === 0) ? 0 : this.rolls.reduce(function(a, b){return a+b;});
};

Frame.prototype.hasStrike = function () {
	return (this.rolls[0] === this.MAXIMUM_PINS) ? true : false;
};

Frame.prototype.hasSpare = function () {
	return (!this.hasStrike() && this.maxPinsReached()) ? true : false;
};

Frame.prototype.maxPinsReached = function () {
	return (this.getPinsScore() >= this.MAXIMUM_PINS) ? true : false;
};

Frame.prototype.maxRollsReached = function () {
	return (this.getFrameSize() === this.getMaxFrameSize()) ? true : false;
};

Frame.prototype.isValidRoll = function (pins) {
	if (this.getFrameSize() > 0) {
		return (pins > this.remainingPins()) ? false : true;
	} else {
		return true;
	}
};

Frame.prototype.remainingPins = function () {
	return this.MAXIMUM_PINS - this.getPinsScore();
};

Frame.prototype.getFrameNumber = function () {
	return this.framenumber;
};

Frame.prototype.setFinalIndexOfFrame = function (index) {
	this.finalIndexOfFrame = index;
};
