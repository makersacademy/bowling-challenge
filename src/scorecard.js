function Scorecard() {
	this.roll_number = null;
	this.frame_number = null;
	this.current_frame_score = null;
	this.previous_frame_score = null;
	this.running_total = null;
	this.spare = false;
	this.strike = false;
};

Scorecard.prototype.input_score = function(pins_downed){
	this.current_frame_score += pins_downed;
};