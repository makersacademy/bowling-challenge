function Scorecard() {
	this.roll_number = null;
	this.frame_number = 1;
	this.current_frame_score = null;
	this.previous_frame_score = null;
	this.running_total = null;
	this.spare = false;
	this.strike = false;
};

Scorecard.prototype.input_score = function(pins_downed){
	this.check_strike(pins_downed)
	this.current_frame_score += pins_downed;
	this.check_spare();
	this.update_roll_number();
	this.update_frame_number();
};

Scorecard.prototype.update_roll_number = function(){
	this.roll_number ++
	if (this.roll_number > 2) {
		this.roll_number = 1
	}
};

Scorecard.prototype.update_frame_number = function(){
	if(this.roll_number == 2){
		this.frame_number ++;
	}
};

Scorecard.prototype.check_strike = function(pins_downed){
	pins_downed == 10 ? this.strike = true : this.strike;
};

Scorecard.prototype.check_spare = function(){
	this.current_frame_score == 10 ? this.spare = true : this.spare;
};