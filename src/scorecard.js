function Scorecard() {
	this.roll_number = null;
	this.frame_number = 0;
	this.frame_score = [];
	this.current_frame_score = null;
	this.previous_frame_score = null;
	this.running_total = null;
	this.spare = false;
	this.strike = false;
};

function Frame(){
	this.first_roll = null;
	this.second_roll = null;
	this.score = null;
  this.index;
	this.is_strike = false;
	this.is_spare = false;
};

Frame.prototype.total = function(){
  this.score += this.first_roll += this.second_roll;
};

Frame.prototype.check_strike = function(){
	(this.first_roll === 10) ? this.is_strike = true : this.is_strike;
};

Frame.prototype.check_spare = function(){
	(this.first_roll + this.second_roll === 10) && (this.first_roll !== 0 && this.second_roll !==0) ? this.is_spare = true : this.is_spare;
};

Scorecard.prototype.calculate_score = function(roll_1, roll_2){
	current_frame = new Frame();
  current_frame.index = this.frame_number;
	current_frame.first_roll += roll_1;
  current_frame.check_strike();
	current_frame.second_roll += roll_2;
	current_frame.check_spare();
	this.frame_score.push(current_frame);
  this.bonus_score();
  current_frame.total();
  this.frame_number++
};

Scorecard.prototype.bonus_score = function(){
  if(this.frame_number > 0){
    var previous = this.frame_score[this.frame_number-1]
    console.log(previous.is_strike)
    if(previous.is_strike){
      previous.score += current_frame.first_roll;
      previous.score += current_frame.second_roll;
    }
  }
};

var scorecard = new Scorecard();

scorecard.calculate_score(10, 0);
scorecard.calculate_score(6, 3);
console.log(scorecard.frame_score[0]);
console.log(scorecard.frame_score[1]);





Game.prototype.isSpare = function(frameIndex){
  return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
};

Game.prototype.strikeBonus = function(frameIndex){
  return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
};

Game.prototype.spareBonus = function(frameIndex){
  return this.rolls[frameIndex + 2];
};